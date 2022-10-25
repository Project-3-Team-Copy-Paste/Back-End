const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const Review = require("../models/Review");
const User = require("../models/User");
const { createUserToken, requireToken } = require("../middleware/auth");

router.get("/", async (req, res, next) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
});

router.get("/:userId", async (req, res, next) => {
	try {
		const user = await User.findById(req.params.userId);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
});

router.get("/reviews/:userId", requireToken, async (req, res, next) => {
	try {
		const reviewsByAuthor = await Review.find({ author: req.params.userId })
			.sort({ updatedAt: -1 })
			.populate("author");
		res.status(200).json(reviewsByAuthor);
	} catch (error) {
		next(error);
	}
});

router.get("/movies/:userId", requireToken, async (req, res, next) => {
	try {
		const user = await User.findById(req.params.userId);
		res.status(200).json(user.movies);
	} catch (error) {
		next(error);
	}
});

router.patch("/:userId/movie/:movieId", requireToken, async (req, res, next) => {
	try {
		if (req.body.title) {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.userId,
				{ $push: { movies: req.body } },
				{ new: true }
			);
			res.status(200).json(updatedUser);
		} else {
			const user = await User.findOneAndUpdate(
				{ _id: req.params.userId, "movies.id": req.params.movieId },
				{ $set: { "movies.$.finished": req.body.finished } },
				{ new: true }
			);
			res.status(200).json(user);
		}
	} catch (error) {
		next(error);
	}
});

router.post("/signup", async (req, res, next) => {
	try {
		const password = await bcrypt.hash(req.body.password, 10);
		const newUser = await User.create({
			username: req.body.username,
			password: password,
			email: req.body.email,
			movies: [],
			reviews: [],
		});
		return res.status(201).json(newUser);
	} catch (error) {
		next(error);
	}
});

router.post("/signin", async (req, res, next) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		const token = await createUserToken(req, user);
		res.json({ token, username: user.username, userId: user._id });
	} catch (err) {
		next(err);
	}
});

router.put("/:id", async (req, res, next) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(202).json(updatedUser);
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(204);
	} catch (error) {
		next(error);
	}
});

module.exports = router;

const express = require("express");
const { requireToken } = require("../middleware/auth");
const { handleValidateOwnership } = require("../middleware/custom_errors");
const router = express.Router();

const Review = require("../models/Review");
const User = require("../models/User");

router.get("/", async (req, res, next) => {
	try {
		const reviews = await Review.find().populate("author");
		res.json(reviews);
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const review = await Review.find().populate("author");
		res.json(review);
	} catch (error) {
		next(error);
	}
});

router.get("/movie/:id", async (req, res, next) => {
	try {
		const reviews = await Review.find({ movie: req.params.id }).populate("author");
		res.json(reviews);
	} catch (error) {
		next(error);
	}
});

router.post("/", requireToken, async (req, res, next) => {
	try {
		const user = await User.findOne({ username: req.body.author });
		if (user) {
			const review = await Review.create({ ...req.body, author: user._id });
			const updatedUser = await User.findOneAndUpdate(
				{ username: req.body.author },
				{ $push: { reviews: review._id, movies: { id: req.body.movie, finished: true } } },
				{ new: true }
			);
			res.json(review);
		} else {
			throw new Error("Not a valid user");
		}
	} catch (error) {
		next(error);
	}
});

router.put("/:id", requireToken, async (req, res, next) => {
	try {
		const review = await Review.findById(req.params.id);
		handleValidateOwnership(req, review);
		const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(updatedReview);
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", requireToken, async (req, res, next) => {
	try {
		const review = await Review.findById(req.params.id);
		handleValidateOwnership(req, review);
		const deletedReview = await Review.findByIdAndDelete(req.params.id);
		const updatedUser = await User.findByIdAndUpdate(
			deletedReview.author,
			{ $pull: { movies: deletedReview.movie, reviews: req.params.id } },
			{ new: true }
		);
		res.json([deletedReview, updatedUser]);
	} catch (error) {
		next(error);
	}
});

module.exports = router;

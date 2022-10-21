const express = require("express");
const router = express.Router();

const Review = require("../models/Review");

router.get("/", async (req, res, next) => {
	try {
		const reviews = await Review.find();
		res.json(reviews);
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const review = await Review.findById(req.params.id);
		res.json(review);
	} catch (error) {
		next(error);
	}
});

router.get("/movie/:id", async (req, res, next) => {
	try {
		const reviews = await Review.find({ movie: req.params.id });
		res.json(reviews);
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const newReview = await Review.create(req.body);
		res.status(201).json(newReview);
	} catch (error) {
		next(error);
	}
});

router.put("/:id", async (req, res, next) => {
	try {
		const updatedReview = await Review.findOneAndUpdate({ _id: req.params.id }, req.body, {
			new: true,
		});
		res.json(updatedReview);
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const deletedReview = await Review.findByIdAndDelete(req.params.id);
		res.status(204);
	} catch (error) {
		next(error);
	}
});

module.exports = router;

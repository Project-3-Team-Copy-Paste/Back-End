const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const User = require('../models/User');

router.get('/', async (req, res, next) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
});

router.get('/reviews/:id', async (req, res, next) => {
	try {
		const reviewsByAuthor = await Review.find({ author: req.params.id });
		res.status(200).json(reviewsByAuthor);
	} catch (error) {
		next(error);
	}
});

router.post('/signup', async (req, res, next) => {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		next(error);
	}
});

// router.post('/signin', async (req, res, next) => {
// 	try {
// 		const newUser = await User.create(req.body);
// 		res.status(201).json(newUser);
// 	} catch (error) {
// 		next(error);
// 	}
// });

router.put('/:id', async (req, res, next) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(202).json(updatedUser);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(204);
	} catch (error) {
		next(error);
	}
});

module.exports = router;

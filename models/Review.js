const mongoose = require('../db/connection');

const ReviewSchema = new mongoose.Schema(
	{
		movie: String,
		title: String,
		body: String,
		rating: Number,
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;

const mongoose = require('../db/connection');

const ReviewSchema = new mongoose.Schema({
	movie: String,
	title: String,
	body: String,
	rating: Number,
	Author: String,
});

const Bookmark = mongoose.model('Bookmark', BookmarkSchema);

module.exports = Bookmark;

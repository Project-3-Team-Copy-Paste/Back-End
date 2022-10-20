const mongoose = require('../db/connection');

const MovieSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	genre: [String],
	datePublished: Date,
	Author: String,
	trailer: {
		thumbnail: {
			contentUrl: String,
		},
		url: String,
	},
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;

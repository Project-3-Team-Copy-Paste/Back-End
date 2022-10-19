const mongoose = require('../db/connection');

const reelSchema = new mongoose.Schema({
	title: String,
	url: String,
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		// ref: 'User',
	},
});

const Reel = mongoose.model('Reel', reelSchema);

module.exports = Reel;

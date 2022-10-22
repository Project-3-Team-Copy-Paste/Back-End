const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema(
	{
		movies: [
			{
				id: String,
				finished: Boolean,
			},
		],
		reviews: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Review',
			},
		],
		username: String,
		password: String,
		email: String,
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;

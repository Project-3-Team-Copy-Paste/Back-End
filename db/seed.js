const Review = require('../models/Review');
const reviews = require('./seeds.json');

Review.deleteMany()
	.then(() => Review.insertMany(reviews))
	.then(console.log)
	.catch(console.log)
	.finally(() => process.exit());

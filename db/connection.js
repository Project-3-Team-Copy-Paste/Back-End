require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

mongoose.connect(mongoURI);

db.on('error', (err) =>
	console.log(err.message + ' You have failed the monGODb.')
);
db.on('connected', () => console.log('This connection pleases the monGODb.'));
db.on('disconnected', () => console.log('The monGODb has abandoned you.'));

db.on('open', () => {
	console.log('✅ Glory to the monGODb!');
});

module.exports = mongoose;

require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

mongoose.connect(mongoURI);

db.on('error', (err) =>
	console.log(err.message + ' You have failed the monGOD.')
);
db.on('connected', () =>
	console.log('This connection pleases the monGOD.: ', mongoURI)
);
db.on('disconnected', () => console.log('The monGOD has abandoned you.'));

db.on('open', () => {
	console.log('✅ Glory to the monGod!');
});

module.exports = mongoose;

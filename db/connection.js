require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

mongoose.connect(mongoURI);

db.on('error', (err) => console.log(err.message + ' am monGOD break??'));
db.on('connected', () => console.log('monGOD likey: ', mongoURI));
db.on('disconnected', () => console.log('monGOD bye-bye'));

db.on('open', () => {
	console.log('✅ monGod!');
});

module.exports = mongoose;

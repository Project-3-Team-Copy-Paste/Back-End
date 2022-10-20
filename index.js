const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4040;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
	res.redirect('/');
});

const reviewsController = require('./controllers/review.js');
app.use('/reviews', reviewsController);

app.listen(PORT, () => console.log(`The reels are rolling on port ${PORT}`));

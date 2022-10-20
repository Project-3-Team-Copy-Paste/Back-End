const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res, next) => {
	res.redirect('/reviews');
});

const requestLogger = require('./middleware/request_logger.js');
app.use(requestLogger);

const reviewsController = require('./controllers/reviewsController.js');
app.use('/reviews', reviewsController);

app.use((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
});

app.listen(PORT, () => console.log(`The reelz are rolling on port ${PORT}`));

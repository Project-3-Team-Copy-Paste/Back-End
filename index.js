const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res, next) => {
	res.redirect("/reviews");
});

const requestLogger = require("./middleware/request_logger.js");
app.use(requestLogger);

const reviewsController = require("./controllers/reviewsController.js");
app.use("/reviews", reviewsController);
const usersController = require("./controllers/usersController.js");
app.use("/users", usersController);

const { handleErrors } = require("./middleware/custom_errors");
app.use(handleErrors);

app.listen(PORT, () => console.log(`The reelz are rolling on port ${PORT}`));

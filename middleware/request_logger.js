const requestLogger = function (req, res, next) {
	console.log('\n===== An audience with the monGODb is requested. =====\n');
	console.log(`${new Date()}`);
	console.log(`${req.method} ${req.url}`);
	console.log(`body ${JSON.stringify(req.body)}`);
	console.log('\n======================================================\n');
	next();
};

module.exports = requestLogger;

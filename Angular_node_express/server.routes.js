module.exports = (function() {
	var router = require('express').Router();

	// Router middleware
	router.use(function(req, res, next) {
	    // do stuff every request to API
	    console.log('Something is happening.');
	    // make sure we go to the next routes and don't stop here
	    //This is important because our application would stop at this middleware without it
	    next(); 
	});

	router.get('/', function(req, res) {
		res.json({message: 'hooray! welcome to our API!'});
	});

	return router;
})();



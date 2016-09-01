var express		= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var routes 		= require('./server.routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('app/public'));

var port = process.env.PORT || 8080;

app.use('/api', routes);

app.listen(port, function() {
	console.log('Server listening on port ' + port);
});

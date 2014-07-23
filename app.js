var express = require('express');
// var underscore = require('underscore');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});








var server = app.listen(6514, function() {
	console.log('Express server listening on port ' + server.address().port);
});

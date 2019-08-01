// Hello world

var express = require('express');
var app     = express();
var port    = 1025;

app.get('/', function handleIndex(req, res) {
	res.send('Hello world!');
});

app.listen(port, function appShoutsThis() {
	console.log('We are live here on port ' + port);
});


//sending status codes:

app.get('/show_error', function showError(req, res) {
	res.status(500).send({ error: 'egad!' });
});


// bind hostname:
app.listen(port, '0.0.0.0');

// serving static files:
// https://expressjs.com/en/starter/static-files.html

// best to use the absolute path
app.use('/static', express.static(path.join(__dirname, 'public')))





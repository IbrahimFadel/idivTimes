const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const php = require('php-express');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());

var phpExpress = require('php-express')({
  binPath: 'php'
});

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', (req, res, next) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/index.css', (req, res, next) => {
	res.sendFile(__dirname + '/index.css');
});

app.get('/css/bootstrap.min.css', (req, res, next) => {
	res.sendFile(__dirname + '/css/bootstrap.min.css');
});

app.get('/src/img/github.png', (req, res, next) => {
	res.sendFile(__dirname + '/src/img/github.png');
});

app.get('/contact.html', (req, res, next) => {
	res.sendFile(__dirname + '/contact.html');
});

app.get('/staff.html', (req, res, next) => {
	res.sendFile(__dirname + '/staff.html');
});

app.get('/catalog.html', (req, res, next) => {
	res.sendFile(__dirname + '/catalog.html');
});

app.get('/action_page.php', (req, res, next) => {
	res.sendFile(__dirname + '/action_page.php');
});

app.get('/src/img/no-image.png', (req, res, next) => {
	res.sendFile(__dirname + '/src/img/no-image.png');
});

app.get('/src/img/no-profile.png', (req, res, next) => {
	res.sendFile(__dirname + '/src/img/no-profile.png');
});

app.get('/src/articles/png/article1.png', (req, res, next) => {
	res.sendFile(__dirname + '/src/articles/png/article1.png');
});

app.get('/src/articles/png/article2.png', (req, res, next) => {
	res.sendFile(__dirname + '/src/articles/png/article2.png');
});

app.get('/src/articles/png/article3.png', (req, res, next) => {
	res.sendFile(__dirname + '/src/articles/png/article3.png');
});

app.get('/src/fonts/NexaBold.otf', (req, res, next) => {
	res.sendFile(__dirname + '/src/fonts/NexaBold.otf');
});

app.get('/src/fonts/NexaLight.otf', (req, res, next) => {
	res.sendFile(__dirname + '/src/fonts/NexaLight.otf');
});

app.get('/src/articles/pdf/article1.pdf', (req, res, next) => {
	res.sendFile(__dirname + '/src/articles/pdf/article1.pdf');
}); 

app.get('/src/articles/html/article2.html', (req, res, next) => {
	res.sendFile(__dirname + '/src/articles/html/article2.html');
}); 

app.get('/src/articles/pdf/article3.pdf', (req, res, next) => {
	res.sendFile(__dirname + '/src/articles/pdf/article3.pdf');
}); 

app.get('/src/articles/pdf/article2.pdf', (req, res, next) => {
	res.sendFile(__dirname + '/src/articles/pdf/article2.pdf');
}); 

app.post('/action_page.php',function(req,res){
   var username = req.body.name;
   var email = req.body.email;
   var htmlData = 'Hello:' + username;
   res.send(htmlData);
   console.log(htmlData);
});

app.listen(PORT, () => {
	console.log("Server listening on port: " + PORT + "");
});
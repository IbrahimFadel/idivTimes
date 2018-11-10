	const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/index.html');
})

app.get('/css/bootstrap.min.css', (req, res, next) => {
	res.sendFile(__dirname + '/css/bootstrap.min.css');
})

app.get('/css/index.css', (req, res, next) => {
	res.sendFile(__dirname + '/css/index.css');
})

app.get('/index.html', (req, res, next) => {
	res.sendFile(__dirname + '/index.html');
})

app.get('/contact.html', (req, res, next) => {
	res.sendFile(__dirname + '/contact.html');
})

app.get('/firebase.js', (req, res, next) => {
	res.sendFile(__dirname + '/firebase.js');
})

app.get('/login.html', (req, res, next) => {
	res.sendFile(__dirname + '/login.html');
})

app.get('/staff.html', (req, res, next) => {
	res.sendFile(__dirname + '/staff.html');
})

app.get('/catalog.html', (req, res, next) => {
	res.sendFile(__dirname + '/catalog.html');
})

app.get('/articlesHtml/Article1.html', (req, res, next) => {
	res.sendFile(__dirname + '/articlesHtml/Article1.html');
})

app.get('/articlesHtml/Article2.html', (req, res, next) => {
	res.sendFile(__dirname + '/articlesHtml/Article2.html');
})

app.get('/articlesHtml/Article3.html', (req, res, next) => {
	res.sendFile(__dirname + '/articlesHtml/Article3.html');
})

//////////////////////////////////////////////

app.get('/img/no-profile.png', (req, res, next) => {
	res.sendFile(__dirname + '/img/no-profile.png');
});

app.get('/img/apostolosZezos.png', (req, res, next) => {
	res.sendFile(__dirname + '/img/apostolosZezos.png');
});

app.get('/img/Article1.png', (req, res, next) => {
	res.sendFile(__dirname + '/img/Article1.png');
});

app.get('/img/Article2.png', (req, res, next) => {
	res.sendFile(__dirname + '/img/Article2.png');
});

app.get('/img/Article3.png', (req, res, next) => {
	res.sendFile(__dirname + '/img/Article3.png');
});

////////////////////////////////////////////////

app.get('/img/article1.pdf', (req, res, next) => {
	res.sendFile(__dirname + '/img/article1.pdf');
});

app.get('/img/article2.pdf', (req, res, next) => {
	res.sendFile(__dirname + '/img/article2.pdf');
});

app.get('/img/article3.pdf', (req, res, next) => {
	res.sendFile(__dirname + '/img/article3.pdf');
});

///////////////////////////////////////////////

app.listen(PORT, () => {
	console.log("Server listening on port: " + PORT + "");
});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
	console.log("Server listening on port: " + PORT + "");
});
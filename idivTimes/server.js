const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const php = require('php-express');
var BSON = require('bson')
const Long = BSON.Long;
var bson = new BSON();
const fs = require('fs');
const ibrah = require('ibrahimstestpkg');

var dataArray = new Array();
var dataPoint;
var serializedData;
var email = "";
var username = "";
var password = "";
var loginData = {"email": "","username": "","password": "", "id": null};
var userId = -1;

var newEmail;
var myEmail;
var newUsername;
var newPassword;

var jsonData;
var parsedJsonData;
var jsonLength;


var jsonLoginData = new Array();

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

//There must be a more effeicient way I just havent figured out lol:

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

app.get('/login.html', (req, res, next) => {
	res.sendFile(__dirname + '/login.html');
});

app.get('/indexLoggedIn.html', (req, res, next) => {
	res.sendFile(__dirname + '/indexLoggedIn.html');
});

app.get('/profile.html', (req, res, next) => {
	res.sendFile(__dirname + '/profile.html');
});

app.get('/src/img/no-image.png', (req, res, next) => {
	res.sendFile(__dirname + '/src/img/no-image.png');
});

app.get('/src/img/no-profile.png', (req, res, next) => {
	res.sendFile(__dirname + '/src/img/no-profile.png');
});

app.get('/src/articles/html/article1.html', (req, res, next) => {
	res.sendFile(__dirname + '/src/articles/html/article1.html');
});

app.get('/src/articles/html/article1.html', (req, res, next) => {
	res.sendFile(__dirname + '/src/articles/html/article1.html');
});

app.get('/src/articles/html/article1.html', (req, res, next) => {
	res.sendFile(__dirname + '/src/articles/html/article1.html');
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

app.get('/src/articles/html/article3.html', (req, res, next) => {
	res.sendFile(__dirname + '/src/articles/html/article3.html');
}); 

app.get('/src/articles/pdf/article3.pdf', (req, res, next) => {
	res.sendFile(__dirname + '/src/articles/pdf/article3.pdf');
}); 

app.get('/src/articles/pdf/article2.pdf', (req, res, next) => {
	res.sendFile(__dirname + '/src/articles/pdf/article2.pdf');
}); 

app.get('/src/img/idivTimesLogo.png', (req, res, next) => {
	res.sendFile(__dirname + '/src/img/idivTimesLogo.png');
}); 


fs.writeFileSync('data.json', jsonLoginData, finished);
function finished(err) {
	console.log('success');
}



//create the initial data.json file using array: jsonLoginData
/*fs.writeFileSync('data.json', jsonLoginData, finished);
function finished(err) {
	console.log('success');
}*/

//Pushes data from form on contact.html to data.json
// SENSITIVE INFO PLEASE STAY OUT
//Trying to encrypr to binary with bson data format
app.post('/action_page.php',function(req,res){
	'use strict'
   email = req.body.email;
   username = req.body.username;
   password = req.body.password;
   userId++;



   jsonData = JSON.stringify(fs.readFileSync('data.json'.toString(), 'utf8'));
   parsedJsonData = JSON.parse(jsonData);
   if(jsonData.length > 0) {


   		jsonLength = Object.keys(parsedJsonData).length;
   		//console.log(jsonData);
   		//console.log(parsedJsonData);
   		console.log(Object.keys(parsedJsonData));
   		console.log("Cool");


   		loginData = {
					email: email,
					username: username,
					password: bson.serialize({string: password}),
					id: userId
				};

		dataArray.push(loginData);

		fs.writeFile('data.json', JSON.stringify(dataArray, null, 4), finished);

   		res.sendFile(__dirname + '/contact.html');
   } else {
   		console.log("bad");
   		loginData = {
					email: email,
					username: username,
					password: bson.serialize({string: password}),
					id: userId
				};

		dataArray.push(loginData);

		fs.writeFile('data.json', JSON.stringify(dataArray, null, 4), finished);

		res.sendFile(__dirname + '/signupResponse.html');
   }

  
   //jsonData = fs.readFileSync('data.json', 'utf8');


   //parsedJsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

   /*if(fs.existsSync('data.json')) {
   	console.log(jsonData.length > 0);
   		for(let i = 0; i < jsonData.length; i++) {
   			if(email === parsedJsonData[i].email || parsedJsonData[i].username === username || bson.deserialize(parsedJsonData[i].password) === password) {
   				res.sendFile(__dirname + '/contact.html');
   				console.log("Duplicate info");
   				throw 'ERROR'
   			} else {
				loginData = {
					email: email,
					username: username,
					password: bson.serialize({string: password}),
					id: userId
				};

				dataArray.push(loginData);

				fs.writeFile('data.json', JSON.stringify(dataArray, null, 4), finished);

				res.sendFile(__dirname + '/signupResponse.html');
   			}
   		}
   } else {
   	//console.log(email);
	loginData = {
		email: email,
		username: username,
		password: bson.serialize({string: password}),
		id: userId
	};

	dataArray.push(loginData);

	fs.writeFile('data.json', JSON.stringify(dataArray, null, 4), finished);

	res.sendFile(__dirname + '/signupResponse.html');
   }*/

   /*fs.exists('data.json', (exists) => {
   	//jsonData = JSON.stringify(fs.readFileSync('data.json', 'utf8'));
   	//console.log(jsonData);
   	console.log(exists);
   		if(exists) {
   			jsonData = JSON.stringify(fs.readFileSync('data.json', 'utf8'));
   			//console.log(jsonData);
   			parsedJsonData = JSON.parse(jsonData);

   			for(let i = 0; i < parsedJsonData.length; i++) {
   				console.log("hi");
   				if(email === parsedJsonData[i].email || parsedJsonData[i].username === username || bson.deserialize(parsedJsonData[i].password) === password) {
   					console.log("LETS GOOOO");
   					res.sendFile('contact.html');
   				} else {
					res.sendFile('index.html');
   				}
   			}
   			
   		} else {
   			loginData = {
					email: email,
					username: username,
					password: bson.serialize({string: password}),
					id: userId
				};

			dataArray.push(loginData);

			fs.writeFile('data.json', JSON.stringify(dataArray, null, 4), finished);

			res.sendFile(__dirname + '/signupResponse.html');
   		}
   })*/
	

	
	

});

app.post('/action_page1.php', function(req, res){

	email = req.body.email;
	username = req.body.username;
	password = req.body.password;

	jsonData = fs.readFileSync('data.json', 'utf8');
	parsedJsonData = JSON.parse(jsonData);

	for(let i = 0; i < parsedJsonData.length; i++) {
		if(parsedJsonData[i].email === email && parsedJsonData[i].username === username) {
			console.log("LOGGED IN!");
			res.sendFile(__dirname + '/indexLoggedIn.html');
		} else {
			console.log("Failed!");
			res.sendFile(__dirname + '/login.html');
		}
	}


});


app.listen(PORT, () => {
	console.log("Server listening on port: " + PORT + "");
});
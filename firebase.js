firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("loginDiv").style.display = "none";
    document.getElementById("logoutDiv").style.display = "initial";
  } else {
    document.getElementById("logoutDiv").style.display = "none";
    document.getElementById("loginDiv").style.display = "initial";
  }
});

function signUp() {
	var email = document.getElementById("email_signUp").value;
	var password = document.getElementById("password_signUp").value;

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  window.alert("Error: " + errorCode + errorMessage);
	});
}

function login() {
	var email = document.getElementById("email_logIn").value;
	var password = document.getElementById("password_logIn").value;

	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  window.alert("Error: " + errorCode + errorMessage );
	});
}

function loginGoogle() {
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function(result) {
	  // This gives you a Google Access Token. You can use it to access the Google API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  var user = result.user;
	  // ...
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});
}

function logout() {
	firebase.auth().signOut();
}
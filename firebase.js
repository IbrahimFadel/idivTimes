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

function logout() {
	firebase.auth().signOut();
}
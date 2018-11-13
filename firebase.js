firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("loginDiv").style.display = "none";
    document.getElementById("logoutDiv").style.display = "initial";
    //document.getElementById("signUpDiv").style.display = "none";
  } else {
    document.getElementById("logoutDiv").style.display = "none";
    document.getElementById("loginDiv").style.display = "initial";
  }
});

function signUp() {
	var email = document.getElementById("email_signUp").value;
	var password = document.getElementById("password_signUp").value;
	document.getElementById("password_signUp").value = "";
	firebase.auth().createUserWithEmailAndPassword(email, password).then(function() { 
		window.location = "/";
		console.log("test");
	}).catch(function(error) {
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

function hasAccount() {
	document.getElementById("signUpDiv").style.display = "none";	
	document.getElementById("loginDiv").style.display = "initial";
}

function needsAccount() {
	document.getElementById("signUpDiv").style.display = "initial";	
	document.getElementById("loginDiv").style.display = "none";
}

function deleteAccount() {
	var user = firebase.auth().currentUser;

	swal({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, delete it!'
	}).then((result) => {
	  if (result.value) {
	    swal(
	      'Deleted!',
	      'Your file has been deleted.',
	      'success'
	    )
	  }
	})

	user.delete().then(function() {
	  window.alert("Your account has been deleted")
	}).catch(function(error) {
	  window.alert("Error deleting your account");
	});
}

function logout() {
	firebase.auth().signOut();
}
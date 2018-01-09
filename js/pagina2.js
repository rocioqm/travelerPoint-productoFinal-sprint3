function ingreso() {
  var email2 = document.getElementById('exampleInputEmail2').value;
  var contrasena2 = document.getElementById('exampleInputPassword2').value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
}


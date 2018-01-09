// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCo9pon8LLXocZN-ANAVtdDu2IiwxF7x3g',
  authDomain: 'traveler-point.firebaseapp.com',
  databaseURL: 'https://traveler-point.firebaseio.com',
  projectId: 'traveler-point',
  storageBucket: 'traveler-point.appspot.com',
  messagingSenderId: '629280360421'
};
firebase.initializeApp(config);


function registrar() {
  var email = document.getElementById('exampleInputEmail1').value;
  var contrasena = document.getElementById('exampleInputPassword1').value;
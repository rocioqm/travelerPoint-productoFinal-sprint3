$(document).ready(function() {    
  $('#letsgo').click(function() {        
    /* Captura de datos escrito en los inputs*/   
    var email1 = document.getElementById('exampleInputEmail2').value;
    var password1 = document.getElementById('exampleInputPassword2').value;
    /* Guardando los datos en el LocalStorage*/
    localStorage.setItem('Email', email1);
    localStorage.setItem('Password', password1);
    /* Limpiando los campos o inputs*/
    document.getElementById('exampleInputEmail1').value = '';
    document.getElementById('exampleInputPassword1').value = '';
  });   
}); 
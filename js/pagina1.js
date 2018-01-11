function begin() {
  // ocultamos todos los span
  $('form div span').hide();
  var $usernameInput = $('#exampleInputUsername');
  var $passwordInput = $('#exampleInputPassword1');
  var $confirmPasswordInput = $('#exampleInputConfirmPassword1');
  var $submit = $('#getstarted');
  function isUsernameValid() {
    return $usernameInput.val().length <= 10 && $usernameInput.val().length > 3;
  }
  function isPasswordValid() {
    return $passwordInput.val().length >= 6;
  }
  function arePasswordsMaching() {
    return $passwordInput.val() === $confirmPasswordInput.val();
  }
  function usernameEvent() {
    if (isUsernameValid())
      $usernameInput.next().hide();
    else
      $usernameInput.next().show();
  }
  function passwordEvent() {
    if (isPasswordValid())
      $passwordInput.next().hide();
    else
      $passwordInput.next().show();
  }
  function confirmPasswordEvent() {
    if (arePasswordsMaching())
      $confirmPasswordInput.next().hide();
    else
      $confirmPasswordInput.next().show();
  }
  function areAllValidationsPassing() {
    return isUsernameValid() && isPasswordValid() && arePasswordsMaching();
  }
  function formStateEvent() {
    // Revisar css porque el boton se hace pequeño en disabled
    if (areAllValidationsPassing()) {
      if ($submit.hasClass('disabled')) {
        $submit.removeClass('disabled');
      }
    } else {
      if(!$submit.hasClass('disabled')) {
        $submit.addClass('disabled');
      }
    }
  }
  // hacemos focus al input username
  $usernameInput.focus();
  $usernameInput
    .focus(usernameEvent)
    .on('keyup', usernameEvent)
    .on('keyup', passwordEvent)
    .on('keyup', formStateEvent);
  $passwordInput
    .focus(passwordEvent)
    .on('keyup', passwordEvent)
    .on('keyup', confirmPasswordEvent)
    .on('keyup', formStateEvent);
  $confirmPasswordInput
    .focus(confirmPasswordEvent)
    .on('keyup', confirmPasswordEvent)
    .on('keyup', formStateEvent);
  formStateEvent();

  $('#getstarted').click(function() {        
    /* Captura de datos escrito en los inputs*/        
    var $userName= $('#exampleInputUsername').val();
    var $emai =$('#exampleInputEmail1').val();
    var $password = $('#exampleInputPassword1').val();

    /* Guardando los datos en el LocalStorage*/
    localStorage.setItem('User Name', $userName);
    localStorage.setItem('Email', $emai);
    localStorage.setItem('Password', $password);
    /* Limpiando los campos o inputs*/
    $userName.val('');
    $emai.val('');
    $password.val('');
    
  });   
}


function begin() {
  // ocultamos todos los span
  $('form div span').hide();
  var $emailInput = $('#exampleInputEmail2');
  var $passwordInput = $('#exampleInputPassword2');
  var $submit = $('#letsgo');
  function isEmailValid() {
    if 
    return $emailInput.val() === userName;
  }
  function isPasswordValid() {
    return $passwordInput.val() === email;
  }
  function areAllValidationsPassing() {
    return isEmailValid() && isPasswordValid() ;
  }
  function formStateEvent() {
    // Revisar css porque el boton se hace pequeño en disabled
    if (areAllValidationsPassing()) {
      if ($submit.hasClass('disabled')) {
        $submit.removeClass('disabled');
      }
    } else {
      if (!$submit.hasClass('disabled')) {
        $submit.addClass('disabled');
      }
    }
  }

  // hacemos focus al input username
  $emailInput.focus();
  $emailInput
    .focus(emailEvent)
    .on('keyup', emailEvent)
    .on('keyup', passwordEvent)
    .on('keyup', formStateEvent);
  $passwordInput
    .focus(passwordEvent)
    .on('keyup', passwordEvent)
    .on('keyup', formStateEvent);
  formStateEvent();
}

$(document).ready(begin);
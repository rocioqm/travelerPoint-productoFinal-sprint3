$(function() {
  $('.checkbox-group li').bind('click', function() {
  
    if ($(this).hasClass('checkbox-group-active')) {
      $(this).removeClass('checkbox-group-active');
      $(this).attr('value', 'off');
    } else {
      $(this).addClass('checkbox-group-active');
      $(this).attr('value', 'on');
    }
    
    // Caja para guardar los valores on y off
    $('#checkbox-value').html('');
    $('.checkbox-group li').each(function() {
      $('#checkbox-value').append($(this).text() + ':' + $(this).attr('value') + '<br>');
    });
  });
});
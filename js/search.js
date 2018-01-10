$('#search').keyup(function() {
    
  var name = $(this).val();
  
  $('#container-travelers').hide();

  $('#container-travelers').each(function() {
    var search = $(this).text();

    if (search.indexOf(name) !== -1) {
      $(this).show();
    }

  });
});


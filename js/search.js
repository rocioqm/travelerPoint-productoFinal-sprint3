// recorrer la data y crear imagenes
var container = $('#container-travelers');
for (i = 0; i < data.length; i++) {
  var grupo = 
  '<div class="col-xs-12 collection">' +
  '<div class="col-xs-4">' +
  '<img class="img-responsive content" src = ' + data[i].image + '>' + '</div>' +
  '<div class="col-xs-8">' +  
  '<p class="name-traveler"><i class="fa fa-user-circle-o" aria-hidden="true"></i>  ' + data[i].name + '</p>' +
  '<p class="address-traveler"><i class="fa fa-location-arrow" aria-hidden="true"></i>  ' + data[i].address + '</p>' +
  '<p class="phone-traveler"><i class="fa fa-phone" aria-hidden="true"></i>  ' + data[i].phone + '</p>' +
  '<p class="mother-country"><i class="fa fa-globe" aria-hidden="true"></i>  ' + data[i].country + '</p>' + 
  '<button type="button" class="btn btn-default">Contact me</button>' + '</div>' +
  '</div>';
  container.append(grupo);
};

// filtro
$('#search').keyup(function() {
  var name = $(this).val();
  $('.collection').hide();
  $('.collection').each(function() {
    var search = $(this).text().toLowerCase();
    if (search.indexOf(name) !== -1) {
      $(this).show();
    }
  });
});

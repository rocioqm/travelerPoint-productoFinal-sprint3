window.addEventListener('load', function() {
  var content = document.getElementById('post-content');
  var posting = document.getElementById('post');
  
  content.addEventListener('keyup', btnactive);
  posting.addEventListener('click', send);

  function btnactive(event) {
    if (content.value === '') {
      posting.disabled = true;
      posting.style.backgroundColor = 'gainsboro';
      posting.style.fontWeight = '500';
      posting.style.cursor = 'not-allowed';      
    } else {
      posting.disabled = false;
      posting.style.backgroundColor = 'lightblue';
      posting.style.fontWeight = '700';      
      posting.style.cursor = 'pointer';
    }
  };

  function send(event) {
    var containerPosts = document.getElementById('container-posts');
    var nuevoPost = document.createElement('div');
    

    nuevoPost.classList.add('nuevoPost');
    nuevoPost.textContent = content.value;
    
    var hours = document.createElement('div');
    hours.classList.add('hours');
    var date = new Date();
    var hour = date.getHours();
    var hourPost = 'Posted at ' + hour + 'h';
    hours.textContent = hourPost;

    nuevoPost.appendChild(hours);
    containerPosts.appendChild(nuevoPost);
    content.value = '';

    btnactive();
  };

  // Función para cargar imágenes
  function archivo(evt) {
    var files = evt.target.files; // FileList object
     
    // Obtenemos la imagen del campo "file". 
    for (var i = 0, f; f = files[i]; i++) {         
      // Solo admitimos imágenes.
      if (!f.type.match('image.*')) {
        continue;
      }
     
      var reader = new FileReader();
         
      reader.onload = (function(theFile) {
        return function(e) {
        // Creamos la imagen.
          document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
        };
      })(f);

      reader.readAsDataURL(f);
    }
  }
           
  document.getElementById('files').addEventListener('change', archivo, false);
});
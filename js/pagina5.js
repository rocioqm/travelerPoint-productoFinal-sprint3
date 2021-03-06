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
    var newPost = document.createElement('div');

    newPost.classList.add('newPost');
    newPost.textContent = content.value;
    
    var hours = document.createElement('div');
    hours.classList.add('hours');
    var date = new Date();
    var hour = date.getHours();
    var hourPost = 'Posted at ' + hour + 'h';
    hours.textContent = hourPost;

    newPost.appendChild(hours);
    
    $('#container-posts').prepend(newPost);    

    content.value = '';

    btnactive();
  };

  // Función para cargar imágenes
  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
});

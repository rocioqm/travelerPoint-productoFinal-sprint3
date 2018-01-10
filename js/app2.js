window.addEventListener('load', function() {
  var twittear = document.getElementById('post');
  var content = document.getElementById('post-content');
  var contentScroll = content.scrollHeight;
  
  content.addEventListener('keyup', activate);
  content.addEventListener('input', resize);
  twittear.addEventListener('click', send);

  function activate(event) {
    if (content.value === '') {
      twittear.disabled = true;
      twittear.style.backgroundColor = 'gray';
      twittear.style.color = 'black';
    } else {
      twittear.disabled = false;
      twittear.style.backgroundColor = 'skyblue';
      twittear.style.color = 'white';
    }
  };

  function resize(event) {
    var el = content;
    setTimeout(function() {
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  };

  function send(event) {
    var containerTweets = document.getElementById('container-posts');
    var nuevoTweet = document.createElement('div');
    nuevoTweet.classList.add('nuevosPosts');
    nuevoTweet.textContent = content.value;
    var hours = document.createElement('p');
    hours.classList.add('hours');
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    if (minute < 10) {
      minute = '0' + minute;
    }
    var hourEnd = hour + ':' + minute;
    hours.textContent = hourEnd;
    nuevoTweet.appendChild(hours);
    containerTweets.appendChild(nuevoTweet);
    content.value = '';
    count.textContent = 140;
    content.setAttribute('rows', '4');
    activate();
  };
});

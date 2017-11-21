var videoList = new Object();

document.addEventListener('DOMContentLoaded', function () {
  fetchJson();

});

function fetchJson() {
  var request = new XMLHttpRequest();

  request.open('GET', './videos.json', true);
  request.onload = function() {

    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      videoList = data;
    } else {
      showError('Villa kom upp');
    }
    console.log(videoList);
    console.log(videoList.videos[2].created);
  };
  request.send();

  function time(video) {
    var now = Date.now();
    var difference = now - video.videos[1].created;
    var days = difference/1000/3600/24;
    if (days < 7) {
      return "Fyrir " + days + " dögum síðan";
    }
    else {
      return "Fyrir " + Math.round(days/7) + " víkum síðan";
    }

    function showVideoList() {
      return videoList.videos[0];
    };
    console.log(time(videoList));

  }
  console.log(time(videoList));


};

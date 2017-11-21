'use strict';

document.addEventListener('DOMContentLoaded', function () {
  fetchJson();
});

function fetchJson() {
  var request = new XMLHttpRequest();

  request.open('GET', './videos.json', true);
  request.onload = function () {
    var data = JSON.parse(request.response);
    time(data, 0);
  };
  request.send();
}

function time(video, n) {
  var now = Date.now();
  var difference = now - video.videos[n].created;
  var days = difference / 1000 / 3600 / 24;
  if (days < 7) {
    return "Fyrir " + days + " dögum síðan";
  } else {
    return "Fyrir " + Math.round(days / 7) + " víkum síðan";
  }
}

//# sourceMappingURL=script-compiled.js.map
  document.addEventListener('DOMContentLoaded', function () {
    fetchJson();

  });

  function fetchJson() {
    var request = new XMLHttpRequest();

    request.open('GET', './videos.json', true);
    request.onload = function() {
      var data = JSON.parse(request.response);
      time(data, 0);
      showVideoList()
    };
    request.send();
  }

  function time(video, n) {
    var now = Date.now();
    var difference = now - video.videos[n].created;
    var days = difference/1000/3600/24;
    if (days < 7) {
      return "Fyrir " + days + " dögum síðan";
    }
    else {
      return "Fyrir " + Math.round(days/7) + " víkum síðan";
    }

  }

  function showVideoList() {
    var body = document.querySelector("body");
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src","./videos/16-9.png")
    div.appendChild(img);
    body.appendChild(div);
//    document.div.appendChild("img");
/*    x.setAttribute("src",videolink);

    x.setAttribute("width", "320");
    x.setAttribute("height", "240");
    x.setAttribute("controls", "controls");*/
}

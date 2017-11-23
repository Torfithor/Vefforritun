  document.addEventListener('DOMContentLoaded', function () {
    fetchJson();

  });

  function fetchJson() {
    var request = new XMLHttpRequest();

    request.open('GET', './videos.json', true);
    request.onload = function() {
      var data = JSON.parse(request.response);
      if (request.status >= 200 && request.status < 400) {
        time(data, 0);
        myFunction(data.videos[1].video)
      } else {
        alert('Villa kom upp!');
      }

    };
    request.send();
  }

  function time(data, n) {
    var now = Date.now();
    var difference = now - data.videos[n].created;
    var days = difference/1000/3600/24;
    if (days < 7) {
      var daysAgo = document.createElement("p");
      var daysAgoText = document.createTextNode("Fyrir " + days + " dögum síðan")
      daysAgo.appendChild(daysAgoText);
      document.querySelector("body").appendChild(daysAgo);
    }
    else {
      var weeksAgo = document.createElement("p");
      var weeksAgoText = document.createTextNode("Fyrir " + Math.round(days/7) + " víkum síðan")
      weeksAgo.appendChild(weeksAgoText);
      document.querySelector("body").appendChild(weeksAgo);
    }

  }

  function myFunction(videolink) {
    var x = document.createElement("VIDEO");

    x.setAttribute("src",videolink);

    x.setAttribute("width", "320");
    x.setAttribute("height", "240");
    x.setAttribute("controls", "controls");
    document.body.appendChild(x);
}

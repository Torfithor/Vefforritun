  document.addEventListener('DOMContentLoaded', function () {
    fetchJson();

  });

  function fetchJson() {
    var request = new XMLHttpRequest();

    request.open('GET', './videos.json', true);
    request.onload = function() {
      var data = JSON.parse(request.response);
      time(data, 0);
      showVideoList(data)
    };
    request.send();
  }

  function showVideoList(data) {
    var body = document.querySelector("body");
    var div = document.createElement("div");
    var catNo = data.categories.length;

    showHeading(data);
    function showHeading(data) {
      for (var i=0;i<catNo;i++) {
        var div2 = document.createElement("div");
        body.appendChild(div);
        var h2 = document.createElement("h2");
        div.appendChild(h2);
        var text = document.createTextNode(data.categories[i].title);
        h2.appendChild(text);
        div.appendChild(div2);
    }

    showPoster(data);
    function showPoster(data) {
      for (var i=0;i<catNo;i++) {
        var j=0
        while (j<data.categories[i].videos.length) {
          var img = document.createElement("img");
          div2.appendChild(img);
          img.setAttribute("src",data.videos[i].poster);
          var x = data.categories[i].videos[j];
          img.setAttribute("src",data.videos[x].poster);
          console.log(x);
          j++;
        }
      }
    }

    /* TODO
    showTitle(data);
    function showTitle(data) {

    }

    showDuration(data);
    function showDuration(data) {

    }

    showCreated(data, n);                     //ATH n
    function showCreated(data, n) {
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

    append a href með querystring? Una?

    */
  }

/*    img.setAttribute("src","./videos/16-9.png")
    div.appendChild(img);
    body.appendChild(div);
    */
//    document.div.appendChild("img");
/*    x.setAttribute("src",videolink);

    x.setAttribute("width", "320");
    x.setAttribute("height", "240");
    x.setAttribute("controls", "controls");*/
}

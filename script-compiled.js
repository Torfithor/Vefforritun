'use strict';

document.addEventListener('DOMContentLoaded', function () {
  fetchJson();
});

function fetchJson() {
  var request = new XMLHttpRequest();

  request.open('GET', './videos.json', true);
  request.onload = function () {
    var data = JSON.parse(request.response);
    showVideoList(data);
  };
  request.send();
}

// Sýnir myndbandalista
// TODO module utan um showVideoList

function showVideoList(data) {
  var body = document.querySelector("body");
  var div = document.createElement("div");
  var catNo = data.categories.length;

  showCategory(data);
  function showCategory(data) {
    // Birtir allt fyrir hvert category á myndbandalista
    for (var i = 0; i < catNo; i++) {
      var div2 = document.createElement("div");
      body.appendChild(div);
      var h2 = document.createElement("h2");
      div.appendChild(h2);
      var text = document.createTextNode(data.categories[i].title);
      h2.appendChild(text);
      div.appendChild(div2);
      div2.setAttribute("class", "cat__" + i);
      showPoster(data, i);
    }

    function showPoster(data, i) {
      // Sýnir poster fyrir myndbönd hvers category
      for (var j = 0; j < data.categories[i].videos.length; j++) {
        var div3 = document.createElement("div");
        var img = document.createElement("img");
        div2.appendChild(div3);
        div3.appendChild(img);
        var x = data.categories[i].videos[j];
        img.setAttribute("src", data.videos[x - 1].poster);
        img.setAttribute("width", "25%");
        img.setAttribute("height", "25%");
        //          showTitle(data, i, j);
      }
    }

    /* TODO
     showTitle(data); // Sýnir titil hvers myndbands þar sem það birtist
    function showTitle(data, i, j) {
      var div3 = document.createElement("div");
      var p = document.createElement("p");
      var title = document.createTextNode(data.videos[x-1].title);
      var x = data.categories[i].videos[j];
      div3.appendChild(p);
      p.appendChild(title);
    //      var x = data.categories[i].videos[j];
    //      img.setAttribute("src",data.videos[x-1].poster);
    }
    showDuration(data); // Sýnir lengd hvers myndbands þar sem það birtist
    function showDuration(data) {
     }
     showCreated(data, n); // Sýnir aldur hvers myndbands þar sem það birtist                     //ATH n
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
    //  append a href með querystring? Una?
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

//# sourceMappingURL=script-compiled.js.map
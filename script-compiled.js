'use strict';

document.addEventListener('DOMContentLoaded', function () {
  fetchJson();
});

function fetchJson() {
  var request = new XMLHttpRequest();

  request.open('GET', './videos.json', true);
  request.onload = function () {
    var data = JSON.parse(request.response);
    /*    if(window.location.search("id") > 0) {
          myFunction((videoID+1)); //setja querystring í input
        }
        else {
          showVideoList();
        }
    /*    if(window.location.search("video") == true) {
          myFunction();
        }
        */
    showVideoList(data);
  };
  request.send();
}

// Sýnir myndbandalista
// TODO: module utan um showVideoList

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
      var text = document.createTextNode(data.categories[i].title);
      div.appendChild(div2);
      div2.setAttribute("class", "cat__" + i);
      var h2 = document.createElement("h2");
      div2.appendChild(h2);
      h2.appendChild(text);
      showVideoData(data, i);
    }

    /* TODO
        - querystring fyrir hvert videoID í showVideoData fall
        - setja div3 í showVideoData fall
        - setja a tag utan um showXYZ í showVideoData falli svo querystring link nái yfir poster, titil og duration
    */

    //   ALL THE PRETTY LINKIES
    //   HERE BELOW


    function showVideoData(data, i) {
      var j = 0;
      while (j < data.categories[i].videos.length) {
        var videoID = data.categories[i].videos[j] - 1;
        var div3 = document.createElement("div");
        div3.setAttribute("class", "vid__" + (videoID + 1));
        div2.appendChild(div3);
        var a = document.createElement("a");
        a.setAttribute("href", "video.html?id=" + (videoID + 1));
        div3.appendChild(a);

        //      console.log(videoID);

        var div4 = document.createElement("div");
        a.appendChild(div4);
        div4.setAttribute("id", "poster__" + i + "__" + (videoID + 1));
        var div5 = document.createElement("div");
        a.appendChild(div5);
        div5.setAttribute("id", "title__" + i + "__" + (videoID + 1));
        var div6 = document.createElement("div");
        a.appendChild(div6);
        div6.setAttribute("id", "created__" + i + "__" + (videoID + 1));
        var div7 = document.createElement("div");
        a.appendChild(div7);
        div7.setAttribute("id", "duration__" + i + "__" + (videoID + 1));
        //      var poster = document.getElementById("poster__" + (videoID + 1));
        showPoster(data, videoID, i); // kalla á föllin með div3.appendChild(showXYZ)?
        document.getElementById("title");
        showTitle(data, videoID, i);
        document.getElementById("created");
        showCreated(data, videoID, i);
        document.getElementById("duration");
        showDuration(data, videoID, i);

        //      div3.appendChild(videoData);
        //      a.setAttribute("href","http://www.hi.is/" + videoID);
        //    showAll(data, videoID);
        j++;
        //        document.crea
      }
    }

    function showAll(data, videoID) {
      showPoster(data, videoID);
      showTitle(data, videoID);
      showCreated(data, videoID);
      showDuration(data, videoID);
    }

    function showPoster(data, videoID, i) {
      // Sýnir poster fyrir hvert myndband í category
      //  þessa div4 skilgreiningu frekar?
      //    var div4 = document.querySelector(".vid__" + (videoID+1));
      //    var div4 = document.createElement("div");
      var imgdiv = document.getElementById("poster__" + i + "__" + (videoID + 1));
      //    div2.appendChild(div4);
      var img = document.createElement("img");
      imgdiv.appendChild(img);
      //    div4.appendChild(img);
      img.setAttribute("src", data.videos[videoID].poster);
    }

    // ALL THE PRETTY LINKIES
    // HERE ABOVE


    // ALL THE OLD FUNCTIONS
    // HERE BELOW

    /*
    function showVideoData(data, i) {
      var j = 0;
      while (j<data.categories[i].videos.length) {
        var videoID = data.categories[i].videos[j] - 1;
        var div3 = document.createElement("div");
        div3.setAttribute("class", "vid__" + (videoID+1));
        div2.appendChild(div3);
        //var a = document.createElement("a");
        //div2.appendChild(a);
        showAll(data, videoID);
        //a.appendChild(div3);
        //div3.appendChild(videoData);
        //a.setAttribute("href","http://www.hi.is");
    //    showPoster(data, videoID); // kalla á föllin með div3.appendChild(showXYZ)?
    //    showTitle(data, videoID);
    //    showCreated(data, videoID);
    //    showDuration(data, videoID);
        j++;
    //        document.crea
      }
    }
    
    function showAll(data, videoID) {
      showPoster(data, videoID);
      showTitle(data, videoID);
      showCreated(data, videoID);
      showDuration(data, videoID);
    }
    
    function showPoster(data, videoID) {  // Sýnir poster fyrir hvert myndband í category
    //  þessa div4 skilgreiningu frekar?
    //      var div4 = document.querySelector(".vid__" + (videoID+1));
      var div4 = document.createElement("div");
      div2.appendChild(div4);
      var img = document.createElement("img");
      //div4.appendChild(img);
      img.setAttribute("src",data.videos[videoID].poster);
    }
    */

    function showTitle(data, videoID) {
      // Sýnir titil hvers myndbands þar sem það birtist
      var titdiv = document.getElementById("title__" + i + "__" + (videoID + 1));
      var p = document.createElement("p");
      var videoTitle = document.createTextNode(data.videos[videoID].title);
      titdiv.appendChild(p);
      p.appendChild(videoTitle);
    }

    function showCreated(data, videoID) {
      // Sýnir aldur hvers myndbands þar sem það birtist
      var now = Date.now();
      var difference = now - data.videos[videoID].created;
      var days = difference / 1000 / 3600 / 24;
      var crediv = document.getElementById("created__" + i + "__" + (videoID + 1));
      if (days < 7) {
        var daysAgo = document.createElement("p");
        if (days == 1) {
          var daysAgoText = document.createTextNode("Fyrir 1 degi síðan");
        } else {
          var daysAgoText = document.createTextNode("Fyrir " + days + " dögum síðan");
        }
        daysAgo.appendChild(daysAgoText);
        crediv.appendChild(daysAgo);
      } else if (days < 30) {
        var weeksAgo = document.createElement("p");
        if (Math.round(days / 7) == 1) {
          var weeksAgoText = document.createTextNode("Fyrir 1 viku síðan");
        } else {
          var weeksAgoText = document.createTextNode("Fyrir " + Math.round(days / 7) + " vikum síðan");
        }
        weeksAgo.appendChild(weeksAgoText);
        crediv.appendChild(weeksAgo);
      } else if (days < 365) {
        var monthsAgo = document.createElement("p");
        if (Math.round(days / 30) == 1) {
          var monthsAgoText = document.createTextNode("Fyrir 1 mánuði síðan");
        } else {
          var monthsAgoText = document.createTextNode("Fyrir " + Math.round(days / 30) + " mánuðum síðan");
        }
        monthsAgo.appendChild(monthsAgoText);
        crediv.appendChild(monthsAgo);
      } else {
        var yearsAgo = document.createElement("p");
        if (Math.round(days / 365) % 10 == 1 || (Math.round(days / 365) - 11) % 100 != 0) {
          var yearsAgoText = document.createTextNode("Fyrir 1 ári síðan");
        } else {
          var yearsAgoText = document.createTextNode("Fyrir " + Math.round(days / 365) + " árum síðan");
        }
        yearsAgo.appendChild(yearsAgoText);
        crediv.appendChild(yearsAgo);
      }
    }

    function showDuration(data, videoID) {
      // Sýnir lengd hvers myndbands þar sem það birtist
      var durdiv = document.getElementById("duration__" + i + "__" + (videoID + 1));
      var p = document.createElement("p");
      var t = data.videos[videoID].duration;
      if (t < 10) {
        var videoLength = document.createTextNode("00:0" + t);
      } else if (t < 60) {
        var videoLength = document.createTextNode("00:" + t);
      } else if (t < 600 && t % 60 < 10) {
        var videoLength = document.createTextNode("0" + Math.round(t / 60) + ":0" + t % 60);
      } else if (t < 600 && t % 60 > 10) {
        var videoLength = document.createTextNode("0" + Math.round(t / 60) + ":" + t % 60);
      } else if (t < 3600 && t % 60 < 10) {
        var videoLength = document.createTextNode(Math.round(t / 60) + ":0" + t % 60);
      } else if (t < 3600 && t % 60 > 10) {
        var videoLength = document.createTextNode(Math.round(t / 60) + ":" + t % 60);
      } else if (3600 <= t && t % 3600 < 600 && t % 60 < 10) {
        var videoLength = document.createTextNode(Math.round(t / 3600) + ":0" + t % 3600 + ":0" + t % 60);
      } else if (3600 <= t && t % 3600 > 600 && t % 60 < 10) {
        var videoLength = document.createTextNode(Math.round(t / 3600) + ":" + t % 3600 + ":0" + t % 60);
      } else if (3600 <= t && t % 3600 < 600 && t % 60 > 10) {
        var videoLength = document.createTextNode(Math.round(t / 3600) + ":0" + t % 3600 + ":" + t % 60);
      } else if (3600 <= t && t % 3600 > 600 && t % 60 > 10) {
        var videoLength = document.createTextNode(Math.round(t / 3600) + ":" + t % 3600 + ":" + t % 60);
      } else {
        var videoLength = document.createTextNode(Math.round(t / 3600) + ":" + Math.round(t / 60) + ":" + t % 60);
      }
      durdiv.appendChild(p);
      p.appendChild(videoLength);
    }
  }
}

//# sourceMappingURL=script-compiled.js.map
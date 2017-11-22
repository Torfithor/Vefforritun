  document.addEventListener('DOMContentLoaded', function () {
    fetchJson();

  });

  function fetchJson() {
    var request = new XMLHttpRequest();

    request.open('GET', './videos.json', true);
    request.onload = function() {
      var data = JSON.parse(request.response);
      showVideoList(data)
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
    function showCategory(data) { // Birtir allt fyrir hvert category á myndbandalista
      for (var i=0;i<catNo;i++) {
        var div2 = document.createElement("div");
        body.appendChild(div);
        var h2 = document.createElement("h2");
        div.appendChild(h2);
        var text = document.createTextNode(data.categories[i].title);
        h2.appendChild(text);
        div.appendChild(div2);
        div2.setAttribute("class","cat__" + i);
        showVideoData(data, i);
    }

    /* TODO
        - querystring fyrir hvert videoID í showVideoData fall
        - setja div3 í showVideoData fall
        - setja a tag utan um showXYZ í showVideoData falli svo querystring link nái yfir poster, titil og duration
    */

    function showVideoData(data, i) {
      var j = 0;
      while (j<data.categories[i].videos.length) {
        var videoID = data.categories[i].videos[j] - 1;
        var div3 = document.createElement("div");
        div3.setAttribute("class", "vid__" + (videoID+1));
        div2.appendChild(div3);
/*        var a = document.createElement("a");
        div2.appendChild(a);
        var videoData = document.createTextNode(showVideoData(data, i));
        a.appendChild(videoData);
        a.setAttribute("href","http://www.hi.is")*/
        showPoster(data, videoID); // kalla á föllin með div3.appendChild(showXYZ)?
        showTitle(data, videoID);
        showCreated(data, videoID);
        showDuration(data, videoID);
        j++;
      }
    }

    function showPoster(data, videoID) {  // Sýnir poster fyrir hvert myndband í category
//  þessa div4 skilgreiningu frekar?
//      var div4 = document.querySelector(".vid__" + (videoID+1));
      var div4 = document.createElement("div");
      div2.appendChild(div4);
      var img = document.createElement("img");
      div4.appendChild(img);
      img.setAttribute("src",data.videos[videoID].poster);
      img.setAttribute("width","25%");
      img.setAttribute("height","25%");
    }

    function showTitle(data, videoID) {  // Sýnir titil hvers myndbands þar sem það birtist
      var cat = document.querySelector(".cat__" + i);
      var p = document.createElement("p");
      var videoTitle = document.createTextNode(data.videos[videoID].title);
      cat.appendChild(p);
      p.appendChild(videoTitle);
    }

    function showCreated(data, videoID) { // Sýnir aldur hvers myndbands þar sem það birtist
      var now = Date.now();
      var difference = now - data.videos[videoID].created;
      var days = difference/1000/3600/24;
      if (days < 7) {
        var daysAgo = document.createElement("p");
        if (days==1) {
          var daysAgoText = document.createTextNode("Fyrir 1 degi síðan")
        }
        else {
          var daysAgoText = document.createTextNode("Fyrir " + days + " dögum síðan")
        }
        daysAgo.appendChild(daysAgoText);
        document.querySelector(".cat__" + i).appendChild(daysAgo);
      }
      else if (days < 30) {
        var weeksAgo = document.createElement("p");
        if (Math.round(days/7)==1) {
          var weeksAgoText = document.createTextNode("Fyrir 1 viku síðan")
        }
        else {
          var weeksAgoText = document.createTextNode("Fyrir " + Math.round(days/7) + " vikum síðan")
        }
        weeksAgo.appendChild(weeksAgoText);
        document.querySelector(".cat__" + i).appendChild(weeksAgo);
      }
      else if (days < 365) {
        var monthsAgo = document.createElement("p");
        if (Math.round(days/30)==1) {
          var monthsAgoText = document.createTextNode("Fyrir 1 mánuði síðan")
        }
        else {
          var monthsAgoText = document.createTextNode("Fyrir " + Math.round(days/30) + " mánuðum síðan")
        }
        monthsAgo.appendChild(monthsAgoText);
        document.querySelector(".cat__" + i).appendChild(monthsAgo);
      }
      else {
        var yearsAgo = document.createElement("p");
        if (Math.round(days/365)%10==1 || (Math.round(days/365)-11)%100!=0 ) {
          var yearsAgoText = document.createTextNode("Fyrir 1 ári síðan")
        }
        else {
          var yearsAgoText = document.createTextNode("Fyrir " + Math.round(days/365) + " árum síðan")
        }
        yearsAgo.appendChild(yearsAgoText);
        document.querySelector(".cat__" + i).appendChild(yearsAgo);
      }
    }

    function showDuration(data, videoID) { // Sýnir lengd hvers myndbands þar sem það birtist
      var cat = document.querySelector(".cat__" + i);
      var p = document.createElement("p");
      var t = data.videos[videoID].duration;
      if (t < 10) {
        var videoLength = document.createTextNode("00:0" + t);
      }
      else if (t < 60) {
        var videoLength = document.createTextNode("00:" + t);
      }
      else if (t < 600 && t % 60 < 10) {
        var videoLength = document.createTextNode("0" + Math.round(t/60) + ":0" + t%60);
      }
      else if (t < 600 && t % 60 > 10) {
        var videoLength = document.createTextNode("0" + Math.round(t/60) + ":" + t%60);
      }
      else if (t < 3600 && t % 60 < 10) {
        var videoLength = document.createTextNode(Math.round(t/60) + ":0" + t%60);
      }
      else if (t < 3600 && t % 60 > 10) {
        var videoLength = document.createTextNode(Math.round(t/60) + ":" + t%60);
      }
      else if (3600 <= t && t%3600 < 600 && t % 60 < 10) {
        var videoLength = document.createTextNode(Math.round(t/3600) + ":0" + t%3600 + ":0" + t%60);
      }
      else if (3600 <= t && t%3600 > 600 && t % 60 < 10) {
        var videoLength = document.createTextNode(Math.round(t/3600) + ":" + t%3600 + ":0" + t%60);
      }
      else if (3600 <= t && t%3600 < 600 && t % 60 > 10) {
        var videoLength = document.createTextNode(Math.round(t/3600) + ":0" + t%3600 + ":" + t%60);
      }
      else if (3600 <= t && t%3600 > 600 && t % 60 > 10) {
        var videoLength = document.createTextNode(Math.round(t/3600) + ":" + t%3600 + ":" + t%60);
      }
      else {
        var videoLength = document.createTextNode(Math.round(t/3600) + ":" + Math.round(t/60) + ":" + t%60);
      }
      cat.appendChild(p);
      p.appendChild(videoLength);
    }
  }
}

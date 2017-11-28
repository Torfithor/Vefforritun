'use strict';

// Sýnir myndbandalista
// TODO: module utan um showVideoList

function showVideoList(data) {
  var body = document.querySelector('body');
  var div = document.createElement('div');
  div.className = 'DIV';

  showCategory();
  function showCategory() {
    // Birtir allt fyrir hvert category á myndbandalista
    var i = 0;
    while (i < data.categories.length) {
      var div2 = document.createElement('div');
      body.appendChild(div);
      var text = document.createTextNode(data.categories[i].title);
      div.appendChild(div2);
      div2.setAttribute('class', 'cat__' + i);
      var div3 = document.createElement('div');

      var h2 = document.createElement('h2');
      div2.appendChild(div3);
      div3.appendChild(h2);
      h2.appendChild(text);

      var div4 = document.createElement('div');
      div2.appendChild(div4);
      div4.setAttribute('class', 'videoContainer__' + i);

      showVideoData(i);

      i += 1;
    }

    function showVideoData() {
      var j = 0;
      while (j < data.categories[i].videos.length) {
        var videoID = data.categories[i].videos[j] - 1;
        showDataDivs(videoID);
        showPoster(videoID, i);
        showTitle(videoID, i);
        showCreated(videoID, i);
        showDuration(videoID, i);
        j += 1;
      }
    }

    function showDataDivs(videoID) {
      var div3 = document.createElement('div');
      div3.setAttribute('class', 'vid__' + (videoID + 1));
      div4.appendChild(div3);

      var a = document.createElement('a');
      a.setAttribute('href', 'video.html?id=' + (videoID + 1));
      a.setAttribute('id', 'vid__' + i + '__' + (videoID + 1));
      div3.appendChild(a);
    }

    function showPoster(videoID) {
      // Sýnir poster fyrir hvert myndband í category
      var imgdiv = document.getElementById('vid__' + i + '__' + (videoID + 1));
      var img = document.createElement('img');
      imgdiv.appendChild(img);
      img.setAttribute('src', data.videos[videoID].poster);
    }

    function showTitle(videoID) {
      // Sýnir titil hvers myndbands þar sem það birtist
      var titdiv = document.getElementById('vid__' + i + '__' + (videoID + 1));
      var p = document.createElement('p');
      var videoTitle = document.createTextNode(data.videos[videoID].title);
      titdiv.appendChild(p);
      p.appendChild(videoTitle);
    }

    function showCreated(videoID) {
      // Sýnir aldur hvers myndbands þar sem það birtist
      var now = Date.now();
      var difference = now - data.videos[videoID].created;
      var days = difference / 1000 / 3600 / 24;
      var crediv = document.getElementById('vid__' + i + '__' + (videoID + 1));
      var ago = document.createElement('p');
      var agoText = document.createTextNode('');
      if (days < 7) {
        if (days === 1) {
          agoText = document.createTextNode('Fyrir 1 degi síðan');
        } else {
          agoText = document.createTextNode('Fyrir ' + days + ' d\xF6gum s\xED\xF0an');
        }
      } else if (days < 30) {
        if (Math.round(days / 7) === 1) {
          agoText = document.createTextNode('Fyrir 1 viku síðan');
        } else {
          agoText = document.createTextNode('Fyrir ' + Math.round(days / 7) + ' vikum s\xED\xF0an');
        }
      } else if (days < 365) {
        if (Math.round(days / 30) === 1) {
          agoText = document.createTextNode('Fyrir 1 mánuði síðan');
        } else {
          agoText = document.createTextNode('Fyrir ' + Math.round(days / 30) + ' m\xE1nu\xF0um s\xED\xF0an');
        }
      } else if (Math.round(days / 365) % 10 === 1 || (Math.round(days / 365) - 11) % 100 !== 0) {
        agoText = document.createTextNode('Fyrir 1 ári síðan');
      } else {
        agoText = document.createTextNode('Fyrir ' + Math.round(days / 365) + ' \xE1rum s\xED\xF0an');
      }
      ago.appendChild(agoText);
      crediv.appendChild(ago);
    }

    function showDuration(videoID) {
      // Sýnir lengd hvers myndbands þar sem það birtist
      var durdiv = document.getElementById('vid__' + i + '__' + (videoID + 1));
      var p = document.createElement('p');
      var t = data.videos[videoID].duration;
      var videoLength = document.createTextNode('');
      if (t < 10) {
        videoLength = document.createTextNode('00:0' + t);
      } else if (t < 60) {
        videoLength = document.createTextNode('00:' + t);
      } else if (t < 600 && t % 60 < 10) {
        videoLength = document.createTextNode('0' + Math.round(t / 60) + ':0' + t % 60);
      } else if (t < 600 && t % 60 > 10) {
        videoLength = document.createTextNode('0' + Math.round(t / 60) + ':' + t % 60);
      } else if (t < 3600 && t % 60 < 10) {
        videoLength = document.createTextNode(Math.round(t / 60) + ':0' + t % 60);
      } else if (t < 3600 && t % 60 > 10) {
        videoLength = document.createTextNode(Math.round(t / 60) + ':' + t % 60);
      } else if (t >= 3600 && t % 3600 < 600 && t % 60 < 10) {
        videoLength = document.createTextNode(Math.round(t / 3600) + ':0' + t % 3600 + ':0' + t % 60);
      } else if (t >= 3600 && t % 3600 > 600 && t % 60 < 10) {
        videoLength = document.createTextNode(Math.round(t / 3600) + ':' + t % 3600 + ':0' + t % 60);
      } else if (t >= 3600 && t % 3600 < 600 && t % 60 > 10) {
        videoLength = document.createTextNode(Math.round(t / 3600) + ':0' + t % 3600 + ':' + t % 60);
      } else if (t >= 3600 && t % 3600 > 600 && t % 60 > 10) {
        videoLength = document.createTextNode(Math.round(t / 3600) + ':' + t % 3600 + ':' + t % 60);
      } else {
        videoLength = document.createTextNode(Math.round(t / 3600) + ':' + Math.round(t / 60) + ':' + t % 60);
      }
      durdiv.appendChild(p);
      p.appendChild(videoLength);
    }
  }
}

function fetchJson() {
  var request = new XMLHttpRequest();

  request.open('GET', './videos.json', true);
  request.onload = function onLoad() {
    var data = JSON.parse(request.response);
    if (request.status >= 200 && request.status < 400) {
      showVideoList(data);
    } else {
      alert('Villa kom upp!');
    }
  };
  request.send();
}

document.addEventListener('DOMContentLoaded', function () {
  fetchJson();
});

//# sourceMappingURL=script-compiled.js.map
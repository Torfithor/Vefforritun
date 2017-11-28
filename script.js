
// Sýnir myndbandalista
// TODO: module utan um showVideoList

function showVideoList(data) {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  div.className = 'DIV';

  showCategory();
  function showCategory() { // Birtir allt fyrir hvert category á myndbandalista
    let i = 0;
    while (i < data.categories.length) {
      const div2 = document.createElement('div');
      body.appendChild(div);
      const text = document.createTextNode(data.categories[i].title);
      div.appendChild(div2);
      div2.setAttribute('class', `cat__${i}`);
      const div3 = document.createElement('div');

      const h2 = document.createElement('h2');
      div2.appendChild(div3);
      div3.appendChild(h2);
      h2.appendChild(text);

      var div4 = document.createElement('div');
      div2.appendChild(div4);
      div4.setAttribute('class', `videoContainer__${i}`);

      showVideoData(i);

      i += 1;
    }

    function showVideoData() {
      let j = 0;
      while (j < data.categories[i].videos.length) {
        const videoID = data.categories[i].videos[j] - 1;
        showDataDivs(videoID);
        showPoster(videoID, i);
        showTitle(videoID, i);
        showCreated(videoID, i);
        showDuration(videoID, i);
        j += 1;
      }
    }

    function showDataDivs(videoID) {
      const div3 = document.createElement('div');
      div3.setAttribute('class', `vid__${videoID + 1}`);
      div4.appendChild(div3);

      const a = document.createElement('a');
      a.setAttribute('href', `video.html?id=${videoID + 1}`);
      a.setAttribute('id', `vid__${i}__${videoID + 1}`);
      div3.appendChild(a);
    }

    function showPoster(videoID) { // Sýnir poster fyrir hvert myndband í category
      const imgdiv = document.getElementById(`vid__${i}__${videoID + 1}`);
      const img = document.createElement('img');
      imgdiv.appendChild(img);
      img.setAttribute('src', data.videos[videoID].poster);
    }

    function showTitle(videoID) { // Sýnir titil hvers myndbands þar sem það birtist
      const titdiv = document.getElementById(`vid__${i}__${videoID + 1}`);
      const p = document.createElement('p');
      const videoTitle = document.createTextNode(data.videos[videoID].title);
      titdiv.appendChild(p);
      p.appendChild(videoTitle);
    }

    function showCreated(videoID) { // Sýnir aldur hvers myndbands þar sem það birtist
      const now = Date.now();
      const difference = now - data.videos[videoID].created;
      const days = difference / 1000 / 3600 / 24;
      const crediv = document.getElementById(`vid__${i}__${videoID + 1}`);
      const ago = document.createElement('p');
      let agoText = document.createTextNode('');
      if (days < 7) {
        if (days === 1) {
          agoText = document.createTextNode('Fyrir 1 degi síðan');
        } else {
          agoText = document.createTextNode(`Fyrir ${days} dögum síðan`);
        }
      } else if (days < 30) {
        if (Math.round(days / 7) === 1) {
          agoText = document.createTextNode('Fyrir 1 viku síðan');
        } else {
          agoText = document.createTextNode(`Fyrir ${Math.round(days / 7)} vikum síðan`);
        }
      } else if (days < 365) {
        if (Math.round(days / 30) === 1) {
          agoText = document.createTextNode('Fyrir 1 mánuði síðan');
        } else {
          agoText = document.createTextNode(`Fyrir ${Math.round(days / 30)} mánuðum síðan`);
        }
      } else if (Math.round(days / 365) % 10 === 1 || (Math.round(days / 365) - 11) % 100 !== 0) {
        agoText = document.createTextNode('Fyrir 1 ári síðan');
      } else {
        agoText = document.createTextNode(`Fyrir ${Math.round(days / 365)} árum síðan`);
      }
      ago.appendChild(agoText);
      crediv.appendChild(ago);
    }

    function showDuration(videoID) { // Sýnir lengd hvers myndbands þar sem það birtist
      const durdiv = document.getElementById(`vid__${i}__${videoID + 1}`);
      const p = document.createElement('p');
      const t = data.videos[videoID].duration;
      let videoLength = document.createTextNode('');
      if (t < 10) {
        videoLength = document.createTextNode(`00:0${t}`);
      } else if (t < 60) {
        videoLength = document.createTextNode(`00:${t}`);
      } else if (t < 600 && t % 60 < 10) {
        videoLength = document.createTextNode(`0${Math.round(t / 60)}:0${t % 60}`);
      } else if (t < 600 && t % 60 > 10) {
        videoLength = document.createTextNode(`0${Math.round(t / 60)}:${t % 60}`);
      } else if (t < 3600 && t % 60 < 10) {
        videoLength = document.createTextNode(`${Math.round(t / 60)}:0${t % 60}`);
      } else if (t < 3600 && t % 60 > 10) {
        videoLength = document.createTextNode(`${Math.round(t / 60)}:${t % 60}`);
      } else if (t >= 3600 && t % 3600 < 600 && t % 60 < 10) {
        videoLength = document.createTextNode(`${Math.round(t / 3600)}:0${t % 3600}:0${t % 60}`);
      } else if (t >= 3600 && t % 3600 > 600 && t % 60 < 10) {
        videoLength = document.createTextNode(`${Math.round(t / 3600)}:${t % 3600}:0${t % 60}`);
      } else if (t >= 3600 && t % 3600 < 600 && t % 60 > 10) {
        videoLength = document.createTextNode(`${Math.round(t / 3600)}:0${t % 3600}:${t % 60}`);
      } else if (t >= 3600 && t % 3600 > 600 && t % 60 > 10) {
        videoLength = document.createTextNode(`${Math.round(t / 3600)}:${t % 3600}:${t % 60}`);
      } else {
        videoLength = document.createTextNode(`${Math.round(t / 3600)}:${Math.round(t / 60)}:${t % 60}`);
      }
      durdiv.appendChild(p);
      p.appendChild(videoLength);
    }
  }
}

function fetchJson() {
  const request = new XMLHttpRequest();

  request.open('GET', './videos.json', true);
  request.onload = function onLoad() {
    const data = JSON.parse(request.response);
    if (request.status >= 200 && request.status < 400) {
      showVideoList(data);
    } else {
      alert('Villa kom upp!');
    }
  };
  request.send();
}

document.addEventListener('DOMContentLoaded', () => {
  fetchJson();
});

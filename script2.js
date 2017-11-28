document.addEventListener("DOMContentLoaded", function() {
  fetchJson();
});

function fetchJson() {
  var request = new XMLHttpRequest();

  request.open("GET", "./videos.json", true);
  request.onload = function() {
    var data = JSON.parse(request.response);
    var x = location.search.substring(4);
    myFunction(data, x);
  };
  request.send();
}

function myFunction(data, videoId) {
  var dataVideos = data.videos[videoId - 1].video;

  var videotitle = document.createElement("h3");
  var text = document.createTextNode(data.videos[videoId].title);
  videotitle.appendChild(text);
  var body = document.querySelector("body");
  var a = document.createElement("div");
  var div = document.createElement("div");
  var video = document.createElement("VIDEO");
  var divelement = document.createElement("div");
  video.setAttribute("src", dataVideos);

  var buttonPlayPause = document.createElement("button");
  buttonPlayPause.className = "PlayPause";
  PlayPause(buttonPlayPause, video);

  var buttonMute = document.createElement("button");
  buttonMute.className = "Mute";
  Mute(buttonMute, video);

  var buttonBack = document.createElement("button");
  buttonBack.className = "Back";
  Back(buttonBack, video);

  var buttonForward = document.createElement("button");
  buttonForward.className = "Forward";
  Forward(buttonForward, video);

  var buttonFullscreen = document.createElement("button");
  buttonFullscreen.className = "Fullscreen";
  FullScreen(buttonFullscreen, video);

  //  var TilBaka = document.createElement("p");
  //  TilBaka.className = "TilBaka";
  var linkIndex = document.createElement("a");
  linkIndex.innerHTML = "Til baka";
  linkIndex.setAttribute("href", "index.html");

  divelement.appendChild(buttonPlayPause);
  divelement.appendChild(buttonMute);
  divelement.appendChild(buttonBack);
  divelement.appendChild(buttonForward);
  divelement.appendChild(buttonFullscreen);
  div.appendChild(linkIndex);

  a.appendChild(video);
  a.appendChild(divelement);
  a.appendChild(div);
  body.appendChild(videotitle);
  body.appendChild(a);
}

function PlayPause(clicky, video) {
  clicky.addEventListener("click", function() {
    if (video.paused) {
      video.play();
      document.querySelector(".PlayPause").style.background =
        "url('./img/pause.svg')";
      document.querySelector(".PlayPause").style.backgroundSize = "contain";
    } else {
      video.pause();
      document.querySelector(".PlayPause").style.background =
        "url('./img/play.svg')";
      document.querySelector(".PlayPause").style.backgroundSize = "contain";
    }
  });
}

function Mute(clicky, video) {
  clicky.addEventListener("click", function() {
    if (video.muted === false) {
      video.muted = true;
      document.querySelector(".Mute").style.background =
        "url('./img/unmute.svg')";
      document.querySelector(".Mute").style.backgroundSize = "contain";
    } else {
      video.muted = false;
      document.querySelector(".Mute").style.background =
        "url('./img/mute.svg')";
      document.querySelector(".Mute").style.backgroundSize = "contain";
    }
  });
}
function Back(clicky, video) {
  clicky.addEventListener("click", function() {
    video.currentTime = video.currentTime - 3;
  });
}
function Forward(clicky, video) {
  clicky.addEventListener("click", function() {
    video.currentTime = video.currentTime + 3;
  });
}

function FullScreen(clicky, video) {
  video.webkitRequestFullscreen();
  clicky.addEventListener("click", this.fullS.bind(video));
}
function fullS() {
  this.webkitRequestFullscreen();
}

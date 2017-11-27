"use strict";

document.addEventListener("DOMContentLoaded", function () {
  fetchJson();
});

function fetchJson() {
  var request = new XMLHttpRequest();

  request.open("GET", "./videos.json", true);
  request.onload = function () {
    var data = JSON.parse(request.response);
    myFunction(data.videos[1].video);
  };
  request.send();
}

/*function myFunction(videolink) {
  var body = document.querySelector("body");
  var a = document.createElement("a");
  //  a.setAttribute("href");
    var x = document.createElement("VIDEO");

    x.setAttribute("src", videolink);
    x.setAttribute("width", "320");
    x.setAttribute("height", "240");
    x.setAttribute("controls", "controls");
  a.appendChild(x);
  body.appendChild(a);
}
myFunction();*/

function myFunction(videoID) {
  var body = document.querySelector("body");
  var a = document.createElement("a");
  //  video.id= "video";
  var video = document.createElement("VIDEO");
  var divelement = document.createElement("div");
  video.setAttribute("src", videoID);

  var buttonPlayPause = document.createElement("button");
  buttonPlayPause.className = "PlayPause";
  PlayPause(buttonPlayPause, video);

  var buttonMute = document.createElement("button");
  buttonMute.className = "Mute";
  Mute(buttonMute, video);

  var buttonBack = document.createElement("button");
  buttonBack.className = "Back";

  var buttonForward = document.createElement("button");
  buttonForward.className = "Forward";
  var buttonFullscreen = document.createElement("button");
  buttonFullscreen.className = "Fullscreen";
  var buttonTilBaka = document.createElement("button");
  buttonTilBaka.className = "TilBaka";

  divelement.appendChild(buttonPlayPause);
  divelement.appendChild(buttonMute);
  divelement.appendChild(buttonBack);
  divelement.appendChild(buttonForward);
  divelement.appendChild(buttonFullscreen);
  divelement.appendChild(buttonTilBaka);
  a.appendChild(video);
  a.appendChild(divelement);
  body.appendChild(a);

  //  x.appendChild(divelement);;
}
//showButton();
function PlayPause(clicky, video) {
  clicky.addEventListener("click", function () {
    //  document.getElementById("PlayPause").addEventListener("click", PlayPause(){
    if (video.paused) {
      video.play();
      //  buttonPlayPause.style.backround = "url(/img/play.svg)";
    } else {
      video.pause();
      //    buttonPlayPause.style.backound = "url(/img/pause.svg)";
    }
  });
}

function Mute(clicky, video) {
  clicky.addEventListener("click", function () {
    if (video.muted === false) {
      //  changeButtonType(button, "mute");
      video.muted = true;
    } else {
      video.muted = false;
    }
  });
}
function Back(clicky, video) {
  clicky.addEventListener("click", function () {
    setTime(-3);
  });
}
function Forward(clicky, video) {
  clicky.addEventListener("click", function () {
    setTime(3);
  });
}

//  request.send

//# sourceMappingURL=script-compiled.js.map
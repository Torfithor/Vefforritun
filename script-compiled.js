"use strict";

document.addEventListener("DOMContentLoaded", function () {
  fetchJson();
});

function fetchJson() {
  var request = new XMLHttpRequest();

  request.open("GET", "./videos.json", true);
  request.onload = function () {
    var data = JSON.parse(request.response);
    time(data, 0);
    myFunction(data.videos[1].video);
  };
  request.send();
}

function time(video, n) {
  var now = Date.now();
  var difference = now - video.videos[n].created;
  var days = difference / 1000 / 3600 / 24;
  if (days < 7) {
    return "Fyrir " + days + " dögum síðan";
  } else {
    return "Fyrir " + Math.round(days / 7) + " víkum síðan";
  }
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
  buttonPlayPause.id = "PlayPause";
  var buttonMute = document.createElement("button");
  buttonMute.className = "Mute";
  //  var buttonStop = document.createElement("button");
  //  buttonStop.className = "Stop";
  var buttonBack = document.createElement("button");
  buttonBack.className = "Back";
  var buttonForward = document.createElement("button");
  buttonForward.className = "Forward";
  var buttonFullscreen = document.createElement("button");
  buttonFullscreen.className = "Fullscreen";

  divelement.appendChild(buttonPlayPause);
  divelement.appendChild(buttonMute);
  //  divelement.appendChild(buttonStop);
  divelement.appendChild(buttonBack);
  divelement.appendChild(buttonForward);
  divelement.appendChild(buttonFullscreen);
  a.appendChild(video);
  a.appendChild(divelement);
  body.appendChild(a);

  //  x.appendChild(divelement);
}
//showButton();

//var video = document.querySelector
function playVideo() {
  video.play();
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("PlayPause").addEventListener("click", function PlayPause() {
    var buttonPlayPause = querySelector("PlayPause");
    //  document.getElementById("PlayPause").addEventListener("click", PlayPause(){
    //if (video.paus || video.ended) {
    //    button.title = "pause";
    //    button.innerHTML = "pause";
    //  button.className = "pause";
    video.play();

    //  button.title = "play";
    //  button.innerHTML = "play";
    //  btn.className = "play";
    //  video.pause();
  });
});
function changeButtonType(button, value) {
  button.title = value;
  button.innerHTML = value;
  button.className = value;
}
function stopPlayer() {
  var buttonStop = querySelector("Stop");
  mediaPlayer.pause();
  mediaPlayer.currentTime = 0;
}
function mute() {
  var buttonMute = querySelector("Mute");
  if (mediaPlayer.muted) {
    changeButtonType(button, "mute");
    mediaPlayer.muted = false;
  } else {
    changeButtonType(button, "unmute");
    mediaPlayer.muted = true;
  }
}
//  request.send

//# sourceMappingURL=script-compiled.js.map
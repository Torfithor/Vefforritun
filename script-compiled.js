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

function myFunction(videolink) {
  var x = document.createElement("VIDEO");

  x.setAttribute("src", videolink);

  x.setAttribute("width", "320");
  x.setAttribute("height", "240");
  x.setAttribute("controls", "controls");
  document.body.appendChild(x);
}

//á button ekki vera í global og föllunum??
/*  function showVideo() {
    var divelement = document.createElement("div");
    var video = document.createElement("video");
    video.setAttribute("src", "./videos/small.mp4");
    video.setAttribute("type", "video/mp4");
    divelement.appendChild(video);
    //body.appendChild(divelement);
    console.log(video);
  }
  showVideo();*/
//  var button = document.createElement("button");

function showButton() {
  var body = document.querySelector("body");
  var divelement = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src", "./img/back.svg");
  img.setAttribute("src", "./img/fullscreen.svg");
  img.setAttribute("src", "./img/mute.svg");
  img.setAttribute("src", "./img/next.svg");
  img.setAttribute("src", "./img/pause.svg");
  img.setAttribute("src", "./img/play.svg");
  img.setAttribute("src", "./img/unmute.svg");
  divelement.appendChild(img);
  body.appendChild(divelement);
}
showButton();

function PlayPause() {
  var button = document.createElement("button");
  if (mediaPlayer.paused || mediaPlayer.ended) {
    button.title = "pause";
    button.innerHTML = "pause";
    button.className = "pause";
    mediaPlayer.play();
  } else {
    button.title = "play";
    button.innerHTML = "play";
    btn.className = "play";
    mediaPlayer.pause();
  }
}
function changeButtonType(button, value) {
  button.title = value;
  button.innerHTML = value;
  button.className = value;
}
function stopPlayer() {
  var buttonStop = document.createElement("button");
  mediaPlayer.pause();
  mediaPlayer.currentTime = 0;
}
function mute() {
  var buttonMute = document.createElement("button");
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
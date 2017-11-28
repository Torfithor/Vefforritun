function PlayPause(clicky, video) {
  clicky.addEventListener("click", () => {
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

function createPause(div) {
  const pauseButton = document.createElement("IMG");
  pauseButton.setAttribute("src", "./img/play.svg");
  pauseButton.setAttribute("id", "pauseButton");
  div.appendChild(pauseButton);
}

function showPause() {
  document.getElementById("pauseButton").style.visibility = "visible";
}

function hidePause() {
  document.getElementById("pauseButton").style.visibility = "hidden";
}

function PlayPauseVideo(video) {
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      document.querySelector(".PlayPause").style.background =
        "url('./img/pause.svg')";
      document.querySelector(".PlayPause").style.backgroundSize = "contain";
      hidePause();
    } else {
      video.pause();
      document.querySelector(".PlayPause").style.background =
        "url('./img/play.svg')";
      document.querySelector(".PlayPause").style.backgroundSize = "contain";
      showPause();
    }
  });
}

function Mute(clicky, video) {
  clicky.addEventListener("click", () => {
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
  clicky.addEventListener("click", () => {
    video.currentTime -= 3;
  });
}
function Forward(clicky, video) {
  clicky.addEventListener("click", () => {
    video.currentTime += 3;
  });
}

function FullScreen(clicky, video) {
  video.webkitRequestFullscreen();
  clicky.addEventListener("click", this.fullS.bind(video));
}
function fullS() {
  this.webkitRequestFullscreen();
}

function myFunction(data, videoId) {
  const dataVideos = data.videos[videoId - 1].video;

  const videotitle = document.createElement("h3");
  const text = document.createTextNode(data.videos[videoId - 1].title);
  videotitle.appendChild(text);
  const body = document.querySelector("body");
  const a = document.createElement("a");
  const div = document.createElement("div");
  const video = document.createElement("VIDEO");
  const divelement = document.createElement("div");
  video.setAttribute("src", dataVideos);

  const buttonPlayPause = document.createElement("button");
  buttonPlayPause.className = "PlayPause";
  PlayPause(buttonPlayPause, video);
  createPause(a);
  PlayPauseVideo(video);

  const buttonMute = document.createElement("button");
  buttonMute.className = "Mute";
  Mute(buttonMute, video);

  const buttonBack = document.createElement("button");
  buttonBack.className = "Back";
  Back(buttonBack, video);

  const buttonForward = document.createElement("button");
  buttonForward.className = "Forward";
  Forward(buttonForward, video);

  const buttonFullscreen = document.createElement("button");
  buttonFullscreen.className = "Fullscreen";
  FullScreen(buttonFullscreen, video);

  const linkIndex = document.createElement("a");
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

  hidePause();
}

function fetchJson() {
  const request = new XMLHttpRequest();

  request.open("GET", "./videos.json", true);
  request.onload = function onLoad() {
    const data = JSON.parse(request.response);
    const x = window.location.search.substring(4);
    if (request.status >= 200 && request.status < 400) {
      myFunction(data, x);
    } else {
      alert("Villa kom upp!");
    }
  };
  request.send();
}

document.addEventListener("DOMContentLoaded", () => {
  fetchJson();
});

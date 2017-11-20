function search() {
  var request = new XMLHttpRequest();

  request.open("GET", "./videos.json", true);
  request.onload = function() {
    var data = JSON.parse(request.responseText);
    console.log(data);

    var id1 = data.videos[0];
    var id2 = data.videos[1];
    var id3 = data.videos[2];
    var id4 = data.videos[3];

    var catNew = data.categories[0];
    var catTeach = data.categories[1];
    var catFun = data.categories[2];
  };
  request.send();
}

search();

//á button ekki vera í global og föllunum??
var button = document.createElement("button");
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


function search() {
  var request = new XMLHttpRequest();

  request.open('GET', './videos.json', true);
  request.onload = function() {
    var data = JSON.parse(request.responseText);
    console.log(data);

    var id1 = data.videos[0];
    var id2 = data.videos[1];
    var id3 = data.videos[2];
    var id4 = data.videos[3];
    document.getElementById("demo").innerHTML = id4.title;
    var catNew = data.categories[0];
    var catTeach = data.categories[1];
    var catFun = data.categories[2];
  };
  request.send();
};

search();

'use strict';

function search() {
  var request = new XMLHttpRequest();

  request.open('GET', './videos.json', true);
  request.onload = function () {
    var data = JSON.parse(request.responseText);
    console.log(data);

    var id1 = data.videos[0];
    var id2 = data.videos[1];
    var id3 = data.videos[2];
    var id4 = data.videos[3];

    var catNew = data.categories[0];
    var catTeach = data.categories[1];
    var catFun = data.categories[2];
    /*
        document.getElementById('catNewTitle').innerHTML = catNew.title;
        document.getElementById('catTeachTitle').innerHTML = catTeach.title;
        document.getElementById('catFunTitle').innerHTML = catFun.title;
    */
    for (var i = 0; i < data.categories.length; i++) {
      console.log(data.categories[i].title);
    }

    for (var i = 0; i < data.videos.length; i++) {
      console.log(data.videos[i].title);
    }
    /*
        for (var i=0; i<catFun.videos.length; i++) {
          catFun.videos[i];
        }*/
  };
  request.send();
};

search();

//# sourceMappingURL=script-compiled.js.map
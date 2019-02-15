window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

var content = document.querySelector('ons-splitter-content');

// Switch to the Settings page.
content.load('profil.html');


//listen af hunde 
fetch('json/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
    appendAnimals(json);
  });

function appendAnimals(animals) {
  for (let animal of animals) { // looping trough all dogs
    console.log(animal);
  }
  
}

//en ny for inde i denne funktion, så der loops igennem billederne 
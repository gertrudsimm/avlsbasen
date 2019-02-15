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
    let htmlTemplate = "";
  for (let animal of animals) {
      console.log(animals)
      htmlTemplate +=`
    <section>
      <img src="${getFeaturedImageUrl(teacher)}">
      <h3>${animal.name}</h3>
      ${animal.name}
    </section>`;}
  
}

//en ny for inde i denne funktion, så der loops igennem billederne 
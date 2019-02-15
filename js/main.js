'use strict';

window.fn = {};

window.fn.open = function () {
    var menu = document.getElementById('menu');
    menu.open();
};

window.fn.load = function (page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content.load(page)
        .then(menu.close.bind(menu));
};

var content = document.querySelector('ons-splitter-content');

content.load('profil.html');
//listen af hunde 

fetch('json/data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        appendAnimals(json);
    });

function appendAnimals(animals) {
    for (let animal of animals) {
        console.log(animals);
    document.getElementById('gridAnimals').innerHTML += `<section>
            <img src="img/${animal.img}">
            <h3>${animal.name}</h3>
            <p>${animal.age}</p>
            <p>${animal.race}</p>
        </section>`;
    }
}

//en ny for inde i denne funktion, så der loops igennem billederne


//knap på søg avlspartner siden!!
let showToast = function () {
    ons.notification.toast('Filter muligheder kommer senere!', {
        timeout: 2000
    });
};

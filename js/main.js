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

content.load('logud.html');
//listen af hunde 

fetch('json/data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        appendAnimals(json);
    });

function appendAnimals(animals) {
    let htmlTemplate = "";
    for (let animal of animals) {
        console.log(animals);
        htmlTemplate += `<div>
            <div class="imgContainer"><span onclick="fn.load('dyrprofil.html')" tappable><img src="img/${animal.img}"></span></div>
            <h3>${animal.name}</h3>
            <div class="textContainer"> 
            <p>${animal.race}</p>
            <p>${animal.age}</p></div>
            </div>`;
    }

    let avlspertnerContent = document.getElementById('sg_avlspartner.html').content;
    avlspertnerContent.querySelector('#gridAnimals').innerHTML = htmlTemplate;
}

//en ny for inde i denne funktion, så der loops igennem billederne


//knap på søg avlspartner siden!!
let showToast = function () {
    ons.notification.toast('Filter muligheder kommer senere!', {
        timeout: 2000
    });
};

// alert buttons
function btnalert1() {
    Swal.fire({
        title: 'Fedt!',
        text: 'Du gav brugeren et like',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        animation: false,
		timer: 1500,
		showConfirmButton: false,
    })
}

function btnalert2() {
    Swal.fire({
        text: 'Du gav brugeren et like',
        imageUrl: 'img/like.png',
        imageWidth: 72,
        imageHeight: 60,
        animation: false,
		timer: 1500,
		showConfirmButton: false,
    })
}

function btnalert3() {
    Swal.fire({
        text: 'Brugeren blev tilføjet til dine favoritter',
        imageUrl: 'img/favorit2.png',
        imageWidth: 63,
        imageHeight: 60,
        animation: false,
		timer: 1500,
		showConfirmButton: false,
    })
}

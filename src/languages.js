// Define language reload anchors

let dataReload = document.querySelectorAll("[data-reload]")

// Language translations

let language = {
    eng: {
        hello1: '"Hello, nice to see you, hope you like my web site.',
        hello2: 'And don´t forget to click on the contact bar!"'

    },
    es: {
        hello1: '"Hola, me alegro de verte, espero que te guste mi página web.',
        hello2: '¡Y no olvides hacer clic en la barra de contacto!"'



    }
};


let helloId1 = document.querySelector("#hello1")
let helloId2 = document.querySelector("#hello2")

// Define language using window hash

if (window.location.hash) {
    if (window.location.hash === "#es") {
        helloId1.textContent = language.es.hello1;
        helloId2.textContent = language.es.hello2;
    }
}

// Define language reload onclick illiteration
let i = 0;

for(i = 0; i < dataReload.length; i++) {
    dataReload[i].addEventListener("click", () =>{
        location.reload(true);
    })
}
// Language translations

let language = {
     en: {
        enterName : '"Enter your name"',
     },
    
    es: {
        enterName : '"Ingresa tu nombre"',
    }
};

let qs = document.querySelector.bind(document)

let enterName = qs("#enterName")

// Define language using window hash


if (window.location.hash) {
    if (window.location.hash === "#es") {
        enterName.textContent = language.es.enterName;
    }
    if (window.location.hash === "#en") {
        enterName.textContent = language.en.enterName;

    }
}

// Define language reload anchors

let dataReload = document.querySelectorAll("[data-reload]")

// Define language reload onclick illiteration
let i = 0;

for(i = 0; i < dataReload.length; i++) {
    dataReload[i].addEventListener("click", () =>{
        location.reload(true);
    })
}


// Set and get language selected from the intro

// let spainFlag = document.querySelector(".spainFlag");
// let ukFlag = document.querySelector(".ukFlag");

// spainFlag.addEventListener("click", () => {
//     elementNodeReference.lang = es; // Set new value for lang
// })
// ukFlag.addEventListener("click", () => {
//     elementNodeReference.lang = en; // Set new value for lang
// })

// let languageSelected = elementNodeReference.lang; // Get the value of lang

// localStorage.setItem("langSelected",languageSelected);


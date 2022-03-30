// Language translations

let language = {
    en: {},

    es: {
        email: '¡Claro!, mi correo es delviratapia @gmail.com, ¡gracias por contactarme!',
        language: 'Idioma',
        save: 'Guardar',
        gameOver: 'Terminar partida',
        skills: 'Skills',
        aboutMe: 'Acerca de mi',
        aboutMeText: 'Soy una persona creativa con ganas de ganar más experiencia en el mundo de la programación, siempre comprometida al commit.',
        locationTime: 'Hora local',
        repoBtn: 'Ir al repositorio',
        AvWebBtn: 'Ir a página web',
        saveS1: 'Ranura de guardado 1',
        saveS2: 'Ranura de guardado 2',
        saveS3: 'Ranura de guardado 3',
        saveS4: 'Ranura de guardado 4',
        juiceLang: 'Jugo',
        riceLang: 'Arroz',
        beerLang: 'Cerveza',
        handbagLang: 'Bolso',
        laptopLang: 'Laptop',
        musicLang: 'Música',
        endPhrase: 'Si al principio no lo consigues, llámalo versión 1.0',
    }
};

let qs = document.querySelector.bind(document)

let email = qs("#email")
let langBtn = qs("#langbtn")
let saveBtn = qs("#savebtn")
let gameoverBtn = qs("#gameoverbtn")
let skillsBtn = qs("#skillsbtn")
let abtMe = qs("#abtMe")
let abtMeText = qs("#abtMeText")
let locationTime = qs("#lcTime")
let repoBtn = qs("#repoBtn")
let AvWebBtn = qs("#AvWebBtn")
let saveS1 = qs("#saveS1")
let saveS2 = qs("#saveS2")
let saveS3 = qs("#saveS3")
let saveS4 = qs("#saveS4")
let juiceLang = qs("#juiceLang")
let riceLang = qs("#riceLang")
let beerLang = qs("#beerLang")
let handbagLang = qs("#handbagLang")
let laptopLang = qs("#laptopLang")
let musicLang = qs("#musicLang")
let endPhrase =qs("#endPhrase")

// Define language using window hash

if (window.location.hash) {
    if (window.location.hash === "#es") {
        email.textContent = language.es.email;
        langBtn.textContent = language.es.language;
        saveBtn.textContent = language.es.save;
        gameoverBtn.textContent = language.es.gameOver;
        skillsBtn.textContent = language.es.skills;
        abtMe.textContent = language.es.aboutMe;
        abtMeText.textContent = language.es.aboutMeText;
        locationTime.textContent = language.es.locationTime;
        repoBtn.textContent = language.es.repoBtn;
        AvWebBtn.textContent = language.es.AvWebBtn;
        saveS1.textContent = language.es.saveS1;
        saveS2.textContent = language.es.saveS2;
        saveS3.textContent = language.es.saveS3;
        saveS4.textContent = language.es.saveS4;
        juiceLang.textContent = language.es.juiceLang;
        riceLang.textContent = language.es.riceLang;
        beerLang.textContent = language.es.beerLang;
        handbagLang.textContent = language.es.handbagLang;
        laptopLang.textContent = language.es.laptopLang;
        musicLang.textContent = language.es.musicLang;
        endPhrase.textContent = language.es.endPhrase;

    }
}


// Define language reload anchors

let dataReload = document.querySelectorAll("[data-reload]")

// Define language reload onclick illiteration
let i = 0;

for (i = 0; i < dataReload.length; i++) {
    dataReload[i].addEventListener("click", () => {
        location.reload(true);
    })
}


// Set and get language selected from the intro

// localStorage.getItem("langSelected");
// if (document.documentElement.lang === "en") 
//     window.location.hash = "#en";

// if (document.documentElement.lang === "es") 
//     window.location.hash = "#es";

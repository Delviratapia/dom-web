// Define language reload anchors

let dataReload = document.querySelectorAll("[data-reload]")

// Language translations

let language = {
    // eng: {
    //     hello1: '"Hello, nice to see you, hope you like my web site.',
    //     hello2: 'And don´t forget to click on the contact bar!"',
    //     lang: 'Language',
    //     save: 'Save',
    //     gameOver: 'Game End',
    //     skills : 'Skills',
    //     aboutMe: 'About me',
    //     aboutMeText: 'Im a creative person willing to gain more experience in the programming world, always commited to commit',
    //     locationTime: 'Location time',
    // },
    es: {
        hello1: '"Hola, me alegro de verte, espero que te guste mi página web.',
        hello2: '¡Y no olvides hacer clic en la barra de contacto!"',
        lang: 'Idioma',
        save: 'Guardar',
        gameOver: 'Fin del juego',
        skills : 'Habilidades',
        aboutMe: 'Acerca de mi',
        aboutMeText: 'Soy una persona creativa con ganas de ganar más experiencia en el mundo de la programación, siempre comprometida al commit.',
        locationTime: 'Hora local',






    }
};


let helloId1 = document.querySelector("#hello1")
let helloId2 = document.querySelector("#hello2")
let langBtn = document.querySelector("#langbtn")
let saveBtn = document.querySelector("#savebtn")
let gameoverBtn = document.querySelector("#gameoverbtn")
let skillsBtn = document.querySelector("#skillsbtn")
let abtMe = document.querySelector("#abtMe")
let abtMeText = document.querySelector("#abtMeText")
let locationTime = document.querySelector("#lcTime")

// Define language using window hash

if (window.location.hash) {
    if (window.location.hash === "#es") {
        helloId1.textContent = language.es.hello1;
        helloId2.textContent = language.es.hello2;
        langBtn.textContent = language.es.lang;
        saveBtn.textContent = language.es.save;
        gameoverBtn.textContent = language.es.gameOver;
        skillsBtn.textContent = language.es.skills;
        abtMe.textContent = language.es.aboutMe;
        abtMeText.textContent = language.es.aboutMeText;
        locationTime.textContent = language.es.locationTime;
    }
   
}




// Define language reload onclick illiteration
let i = 0;

for(i = 0; i < dataReload.length; i++) {
    dataReload[i].addEventListener("click", () =>{
        location.reload(true);
    })
}
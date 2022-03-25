// Language translations

let language = {
     eng: {
        enterName : '"Enter your name"',
    //     hello1: '"Hello,' + " " + localStorage.getItem("name") + " " + 'nice to meet you, hope you like my web site."',
    //     hello2: 'And don´t forget to click on the contact bar!"',
    //     lang: 'Language',
    //     save: 'Save',
    //     gameOver: 'Game End',
    //     skills : 'Skills',
    //     aboutMe: 'About me',
    //     aboutMeText: 'Im a creative person willing to gain more experience in the programming world, always commited to commit',
    //     locationTime: 'Location time',
     },
    
    es: {
        // hello1: '"Hola' + " " + localStorage.getItem("name") + " " + 'me alegro de conocerte, espero que te guste mi página web."',
        // hello2: '¡Y no olvides hacer clic en la barra de contacto!"',
        enterName : '"Ingresa tu nombre"',
        email: '¡Claro!, mi correo es delviratapia@gmail.com, ¡gracias por contactarme!',
        lang: 'Idioma',
        save: 'Guardar',
        gameOver: 'Terminar partida',
        skills : 'Skills',
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
    }
};

let qs = document.querySelector.bind(document)

// let helloId1 = qs("#hello1")
// let helloId2 = qs("#hello2")
let enterName = qs("#enterName")
let email = qs("#email")
let langBtn = qs("#langbtn")
let saveBtn = qs("#savebtn")
let gameoverBtn = qs("#gameoverbtn")
let skillsBtn = qs("#skillsbtn")
let abtMe = qs("#abtMe")
let abtMeText = qs("#abtMeText")
let locationTime = qs("#lcTime")
let repoBtn= qs("#repoBtn")
let AvWebBtn= qs("#AvWebBtn")
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

// Define language using window hash




if (window.location.hash) {
    if (window.location.hash === "#es") {
        // helloId1.textContent = language.es.hello1;
        // helloId2.textContent = language.es.hello2;
        enterName.textContent = language.es.enterName;
        email.textContent = language.es.email;
        langBtn.textContent = language.es.lang;
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
    }
    if (window.location.hash === "#eng") {
        enterName.textContent = language.eng.enterName;

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
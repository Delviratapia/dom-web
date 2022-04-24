import corpse_party_gameover from "/src/assets/audio/corpse_party_gameover.mp3"
import rpg_hover_2 from "/src/assets/audio/rpg_hover-2.wav"
import rpg_denied from "/src/assets/audio/rpg_denied.wav"


const GAMEOVER_AUDIO = new Audio(corpse_party_gameover)
let modalOnload = document.querySelector("body");
const myTimeout = setTimeout(onloadModal, 1000);

function onloadModal() {
    window.onload = modalOnload.style.display = "block";
    GAMEOVER_AUDIO.play()

}


const HOVER_AUDIO = new Audio(rpg_hover_2)
// let gameContinueBtn = document.querySelectorAll(".gamecontinue-btn")
let gameContinueEndBtn = document.querySelectorAll(".gamecontinueEnd-btn")
for (let btn of gameContinueEndBtn) {
    btn.addEventListener("click", () => {
        HOVER_AUDIO.play()
    })
}





// Language translations

let language = {

    es: {
        continueText: 'Continuar',
        endText: 'Fin',
        endPhrase: 'Si al principio no lo consigues, llámalo versión 1.0',

    }
};

let qs = document.querySelector.bind(document)
let continueText = qs("#continueText")
let endText = qs("#endText")
let endPhrase = qs("#endPhrase")


continueText.addEventListener("click", () => {
    window.location.href = window.location.origin + "/home.html"
})

endText.addEventListener("click", () => {
    window.location.href = window.location.origin + "/index.html"
})





// Define language using window hash

if (window.location.hash) {
    if (window.location.hash === "#es") {
        continueText.textContent = language.es.continueText;
        endText.textContent = language.es.endText;
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
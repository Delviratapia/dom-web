const GAMEOVER_AUDIO = new Audio("src/assets/audio/corpse_party_gameover.mp3")
let modalOnload = document.querySelector("body");
const myTimeout = setTimeout(onloadModal, 1000);

function onloadModal() {
    window.onload = modalOnload.style.display = "block";
    GAMEOVER_AUDIO.play()

}


const HOVER_AUDIO = new Audio("src/assets/audio/rpg_hover-2.wav")
let gameContinueBtn = document.querySelectorAll(".gamecontinue-btn")


for (let btn of gameContinueBtn) {
    btn.addEventListener("click", () => {
        HOVER_AUDIO.play()
    })

}

const DENIED_AUDIO = new Audio("src/assets/audio/rpg_denied.wav")
let endBtn = document.querySelector(".end-game-btn");

endBtn.addEventListener("click", () => {
            DENIED_AUDIO.play()
        })



// Language translations

let language = {
    
    es: {
        continueText: 'Continuar',
        endText: 'Fin',
    }
};

let qs = document.querySelector.bind(document)
let continueText = qs("#continueText")
let endText = qs("#endText")

// Define language using window hash

if (window.location.hash) {
    if (window.location.hash === "#es") {
        continueText.textContent = language.es.continueText;
        endText.textContent = language.es.endText;
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
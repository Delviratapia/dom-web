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
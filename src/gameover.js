const GAMEOVER_AUDIO = new Audio("src/assets/audio/corpse_party_gameover.mp3")
let modalOnload = document.querySelector("body");
const myTimeout = setTimeout(onloadModal, 1000);

function onloadModal() {
    window.onload = modalOnload.style.display = "block";
    GAMEOVER_AUDIO.play()

}
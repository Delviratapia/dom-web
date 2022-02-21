const TYPINGAUDIO = new Audio("src/assets/audio/TEXTtypingcut.mp3")
const CONFIRMAUDIO = new Audio("src/assets/audio/rpg_confirm.wav")

const myTimeout = setTimeout(onloadModal, 2000);

function onloadModal() {
    window.onload = modalOnload.style.display = "block";
    TYPINGAUDIO.play()

}

// Get the modal
let modalOnload = document.querySelector(".modal-Onload");

// Get the <span> element that closes the modal
let closeModalOnload = document.querySelector(".close-modal-Onload");

// When the user clicks on <span> (x), close the modal
closeModalOnload.onclick = function () {
    modalOnload.style.display = "none";
    TYPINGAUDIO.pause()
    CONFIRMAUDIO.play()
}

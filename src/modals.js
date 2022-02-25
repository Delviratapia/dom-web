const TYPING_AUDIO = new Audio("src/assets/audio/textTypingIntro.mp3")
const CONFIRM_AUDIO = new Audio("src/assets/audio/rpg_confirm.wav")

const myTimeout = setTimeout(onloadModalInitial, 2000);

function onloadModalInitial() {
    window.onload = modalInitial.style.display = "block";
    TYPING_AUDIO.play()

}

// Get the modal
let modalInitial = document.querySelector(".modal-Initial");

// Get the <span> element that closes the modal
let closeModalInitial = document.querySelector(".close-modal-Initial");

// When the user clicks on <span> (x), close the modal
closeModalInitial.onclick = function () {
    modalInitial.style.display = "none";
    TYPING_AUDIO.pause()
    CONFIRM_AUDIO.play()
}



let inputName = document.querySelector("input");
let title = document.querySelector("title")
inputName.onclick = function () {
title.innerHTML=inputName.value
}
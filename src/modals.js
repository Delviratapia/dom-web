const TYPING_AUDIO = new Audio("src/assets/audio/textTypingIntro.mp3")
const CONFIRM_AUDIO = new Audio("src/assets/audio/rpg_confirm.wav")

const myTimeout = setTimeout(onloadModalInitial, 2000);


let modalInitial = document.querySelector(".modal-Initial");

function onloadModalInitial() {
    window.onload = modalInitial.style.display = "block";
    TYPING_AUDIO.play()

}


let inputName = document.querySelector("input");
let title = document.querySelector("title")
inputName.onclick = function () {
    title.innerHTML = inputName.value
}



function play(url) {
    return new Promise(function (resolve, reject) { // return a promise
            var audio = new Audio(url); // create audio wo/ src
            audio.preload = "auto"; // intend to play through
            audio.autoplay = true; // autoplay when loaded
            audio.onerror = reject; // on error, reject
            audio.onended = resolve; // when done, resolve
        
    });
}

let closeModalInitial = document.querySelector(".close-modal-Initial");
closeModalInitial.onclick = function () {
    // CONFIRM_AUDIO.play()
    play("src/assets/audio/rpg_confirm.wav").then(()=>{
        modalInitial.style.display = "none";
        window.location.href = "./index.html"
    })
   
}

const TYPING_AUDIO = new Audio("src/assets/audio/textTypingIntro.mp3")
const CONFIRM_AUDIO = new Audio("src/assets/audio/rpg_confirm.wav")

const myTimeout = setTimeout(onloadModalInitial, 2000);


let modalInitial = document.querySelector(".modal-Initial");

function onloadModalInitial() {
    window.onload = modalInitial.style.display = "block";
    TYPING_AUDIO.play()

}

// DISPLAY INPUT NAME ON TITLE

let title = document.querySelector("title")

if (localStorage.getItem('name') !== null) {
    title.innerHTML = localStorage.getItem("name")
}


let inputName = document.querySelector("input");
let enterBtn = document.querySelector(".intro-modal-enter")
enterBtn.addEventListener("click", () => {
    if (inputName.value === " " || inputName.value.length <= 0 ) {
    localStorage.setItem("name", "Anon")
    title.innerHTML = localStorage.getItem("name")
    } else {
        localStorage.setItem("name",inputName.value)
        title.innerHTML = localStorage.getItem("name")
        inputName.value=""
    }
    
})

let skipBtn = document.querySelector(".intro-modal-skip")
skipBtn.addEventListener("click", () => {
    localStorage.setItem("name", "Anon")
    title.innerHTML = localStorage.getItem("name")
    inputName.value=""

})





// AUDIO WAITING TIME

function play(url) {
    return new Promise(function (resolve, reject) { // return a promise
            var audio = new Audio(url); // create audio wo/ src
            audio.preload = "auto"; // intend to play through
            audio.autoplay = true; // autoplay
            audio.onerror = reject; // on error, reject
            audio.onended = resolve; // when done, resolve
        
    });
}




enterBtn.onclick = function () {
    play("src/assets/audio/rpg_confirm.wav").then(()=>{
        modalInitial.style.display = "none";
        window.location.href = "./index.html"
    })
   
}
skipBtn.onclick = function () {
    play("src/assets/audio/rpg_confirm.wav").then(()=>{
        modalInitial.style.display = "none";
        window.location.href = "./index.html"
    })
   
}
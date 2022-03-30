const TYPING_AUDIO = new Audio("src/assets/audio/textTypingIntro.mp3")
const CONFIRM_AUDIO = new Audio("src/assets/audio/rpg_confirm.wav")

const myTimeout = setTimeout(onloadModalIntro, 0);


let modalIntro = document.querySelector(".modal-Intro");


function onloadModalIntro() {
    window.onload = modalIntro.classList.remove("hidden")
    setTimeout(() => TYPING_AUDIO.play(), 800);
    // location.href = "#eng";
    setTimeout(() => TYPING_AUDIO.pause(), 3000);

}


// DISPLAY INPUT NAME ON TITLE

let title = document.querySelector("title")

if (localStorage.getItem('name') !== null) {
    title.innerHTML = localStorage.getItem("name")
}


let inputName = document.querySelector("input");
let enterBtn = document.querySelector(".intro-modal-enter")
enterBtn.addEventListener("click", () => {
    if (inputName.value === " " || inputName.value.length <= 0) {
        localStorage.setItem("name", "Anon")
        title.innerHTML = localStorage.getItem("name")
    } else {
        localStorage.setItem("name", inputName.value)
        title.innerHTML = localStorage.getItem("name")
        inputName.value = ""
    }

})


inputName.addEventListener("keydown", function (enter) {
    if (enter.key === "Enter") {
        enter.preventDefault();
        if (inputName.value === " " || inputName.value.length <= 0) {
            localStorage.setItem("name", "Anon")
            title.innerHTML = localStorage.getItem("name")
        } else {
            localStorage.setItem("name", inputName.value)
            title.innerHTML = localStorage.getItem("name")
            inputName.value = ""
        }
        play("src/assets/audio/rpg_confirm.wav").then(() => {
            modalIntro.style.display = "none";
            window.location.href = "./index.html"
        })

        inputName.reset();

    }
})





let skipBtn = document.querySelector(".intro-modal-skip")
skipBtn.addEventListener("click", () => {
    localStorage.setItem("name", "Anon")
    title.innerHTML = localStorage.getItem("name")
    inputName.value = ""

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





enterBtn.addEventListener("click", () => {
    play("src/assets/audio/rpg_confirm.wav").then(() => {
        modalIntro.style.display = "none";
        window.location.href = "./index.html"
    })
})


skipBtn.addEventListener("click", () => {

    play("src/assets/audio/rpg_confirm.wav").then(() => {
        modalIntro.style.display = "none";
        window.location.href = "./index.html"
    })

})
import textTypingIntro from "/src/assets/audio/textTypingIntro.mp3"
import rpg_confirm from "/src/assets/audio/rpg_confirm.wav"

const TYPING_AUDIO = new Audio(textTypingIntro)
const CONFIRM_AUDIO = new Audio(rpg_confirm)

let modalIntro = document.querySelector(".modal-Intro");
if (modalIntro != null) {
    const myTimeout = setTimeout(onloadModalIntro, 0);

}

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
if (enterBtn != null) {
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
}

if (inputName != null) {
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
            play(rpg_confirm).then(() => {
                modalIntro.style.display = "none";
                if (window.location.hash == "")
                    window.location.href = window.location.origin + "/home.html"
                else
                    window.location.href = window.location.origin + "/home.html" +  window.location.hash

            })

            inputName.reset();

        }
    })
}

let skipBtn = document.querySelector(".intro-modal-skip")
if (skipBtn != null) {

    skipBtn.addEventListener("click", () => {
        localStorage.setItem("name", "Anon")
        title.innerHTML = localStorage.getItem("name")
        inputName.value = ""

    })
}






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




if (enterBtn != null) {
    enterBtn.addEventListener("click", () => {
        play(rpg_confirm).then(() => {
            modalIntro.style.display = "none";
            if (window.location.hash == "")
                window.location.href = window.location.origin + "/home.html"
            else 
                window.location.href = window.location.origin + "/home.html" + window.location.hash
 
        })
    })
}

if (skipBtn != null) {
    skipBtn.addEventListener("click", () => {

        play(rpg_confirm).then(() => {
            modalIntro.style.display = "none";
            if (window.location.hash == "")
                window.location.href = window.location.origin + "/home.html"
            else 
                window.location.href = window.location.origin + "/home.html" + window.location.hash
        })

    })
}

let gameoverbtn = document.querySelector("#gameoverbtn")
gameoverbtn.addEventListener("click", ()=> {
    if (window.location.hash == "")
        window.location.href = window.location.origin + "/gameover.html"
    else
        window.location.href = window.location.origin + "/gameover.html" + window.location.hash
})
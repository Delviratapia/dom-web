import { closeOpenModals } from "./utils";
import textTypingCut from "/src/assets/audio/TEXTtypingcut.mp3"
import rpg_confirm from "/src/assets/audio/rpg_confirm.wav"
import meSmile from  "/src/assets/images/smile-brows-eyesopen1.svg"
import meWorry from "/src/assets/images/worry-brow-smile.gif"
import meClosed from "/src/assets/images/smile-eyesclosed4.svg"
import meHappy from "/src/assets/images/happy-smile.gif"

let unknownItem = document.querySelector(".unknown-item")
let riceItem = document.querySelector(".rice-item")
let juiceItem = document.querySelector(".juice-item")
let avatarImg = document.querySelector(".avatar-img")
let openBeerModal = document.querySelector(".beer-item");

// function that changes image when hovering the items



// function mouseOverWorry() {
//     avatarImg.src = "src/assets/images/midmouth-normal-eyesopen8.svg"
// }

// function mouseOverHappy() {
//     avatarImg.src = "src/assets/images/smile-teeth-eyesclosed7.svg"
// }
// openBeerModal.addEventListener("mouseover", mouseOverWorry);
// unknownItem.addEventListener("mouseover", mouseOverWorry);
// riceItem.addEventListener("mouseover", mouseOverHappy);
// juiceItem.addEventListener("mouseover", mouseOverHappy);

// function that changes image when hovering outside the items
// openBeerModal.addEventListener("mouseout", mouseOutWorry);
// unknownItem.addEventListener("mouseout", mouseOutWorry);
// riceItem.addEventListener("mouseout", mouseOutHappy);
// juiceItem.addEventListener("mouseout", mouseOutHappy);

// function mouseOutWorry() {
//     avatarImg.src = "src/assets/images/smile-normal-eyesopen6.svg"
// }

// function mouseOutHappy() {
//     avatarImg.src = "src/assets/images/smile-normal-eyesopen6.svg"
// }


// MODAL BOX FOR BEER ITEM

let beerItemText = document.querySelector(".beer-item-text")
let randomBeerText = ["I'm afraid I can't",
    "Sorry, I can't",
    "Not for me, thanks",
    "I think I'll pass"
]

if (window.location.hash) {
    if (window.location.hash === "#es") {
        randomBeerText = ["Me temo que no puedo",
        "Lo siento, no puedo",
        "No es para mi, gracias",
        "Creo que pasaré"
    ]
    }
}


const TYPING_AUDIO = new Audio(textTypingCut)
const CONFIRM_AUDIO = new Audio(rpg_confirm)


// Get the modal
let beerItem = document.querySelector(".beer-item-modal")

// Get the <span> element that closes the modal
let closeBeerModal = document.querySelector(".close-beer-modal");


// When the user clicks the button, open the modal 
openBeerModal.addEventListener("click", (event) => {
    event.stopPropagation()
    closeOpenModals();
    beerItem.classList.remove("hidden")
    beerItemText.innerHTML = "<p>" + '"' + randomBeerText[Math.floor(Math.random() * randomBeerText.length)] + '"' + "</p>";
    avatarImg.src = meWorry
    setTimeout(() => {
        avatarImg.src = meSmile
    }, 1200);
    TYPING_AUDIO.play()
    setTimeout(() => TYPING_AUDIO.pause(), 1000);
})

// When the user clicks on <span> (x), close the modal
closeBeerModal.addEventListener("click", () => {
    beerItem.classList.add("hidden")
    TYPING_AUDIO.pause()
    CONFIRM_AUDIO.play()
})

// MODAL BOX FOR UNKNOWN ITEM

let unknownItemText = document.querySelector(".unknown-item-text")
let randomUnknownText = ["I'm afraid I can't",
    "That looks suspicious",
    "A-are you sure?",
    "I wouldn't click again"
]

if (window.location.hash) {
    if (window.location.hash === "#es") {
        randomUnknownText = ["Me temo que no puedo",
        "Se ve sospechoso",
        "¿E-estás seguro?",
        "Yo no haria click otra vez"
    ]
    }
}


// Get the modal
let unknownItemModal = document.querySelector(".unknown-item-modal")

let openUnknownModal = document.querySelector(".unknown-item");
// Get the <span> element that closes the modal
let closeUnknownModal = document.querySelector(".close-unknown-modal");


// When the user clicks the button, open the modal 
openUnknownModal.addEventListener("click", (event) => {
    event.stopPropagation()
    closeOpenModals();
    unknownItemModal.classList.remove("hidden")
    unknownItemText.innerHTML = "<p>" + '"' + randomUnknownText[Math.floor(Math.random() * randomUnknownText.length)] + '"' + "</p>";
    avatarImg.src = meWorry
    setTimeout(() => {
        avatarImg.src = meSmile
    }, 1200);
    TYPING_AUDIO.play()
    setTimeout(() => TYPING_AUDIO.pause(), 1000);
})

// When the user clicks on <span> (x), close the modal
closeUnknownModal.addEventListener("click", () => {
    unknownItemModal.classList.add("hidden")
    TYPING_AUDIO.pause()
    CONFIRM_AUDIO.play()
})


// MODAL BOX FOR JUICE ITEM

let juiceItemText = document.querySelector(".juice-item-text")
let randomJuiceText = ["I love orange juice",
    "Orange juice it's my favorite",
    "Look up for the MorirSoñando recipe",
]

if (window.location.hash) {
    if (window.location.hash === "#es") {
        randomJuiceText = ["Me encanta el jugo de naranja",
    "El jugo de naranja es mi favorito",
    "Busca la receta del MorirSoñando",
]
    }
}

// Get the modal
let juiceItemModal = document.querySelector(".juice-item-modal")

// Get the button that opens the modal
let openJuiceModal = document.querySelector(".juice-item");

// Get the <span> element that closes the modal
let closeJuiceModal = document.querySelector(".close-juice-modal");

// When the user clicks the button, open the modal 
openJuiceModal.addEventListener("click", (event) => {
    event.stopPropagation()
    closeOpenModals();
    juiceItemModal.classList.remove("hidden")
    juiceItemText.innerHTML = "<p>" + '"' + randomJuiceText[Math.floor(Math.random() * randomJuiceText.length)] + '"' + "</p>";
    avatarImg.src = meHappy
    setTimeout(() => {
        avatarImg.src = meClosed
    }, 1500);
    TYPING_AUDIO.play()
    setTimeout(() => TYPING_AUDIO.pause(), 1300);
})

// When the user clicks on <span> (x), close the modal
closeJuiceModal.addEventListener("click", () => {
    juiceItemModal.classList.add("hidden")
    TYPING_AUDIO.pause()
    CONFIRM_AUDIO.play()
})


// MODAL BOX FOR RICE ITEM

let riceItemText = document.querySelector(".rice-item-text")
let randomRiceText = ["White rice with everything",
    "I love eating white rice",
]

if (window.location.hash) {
    if (window.location.hash === "#es") {
        randomRiceText = ["El arroz blanco con todo",
        "Me encanta comer arroz",
    ]
        }
    }

// Get the modal
let riceItemModal = document.querySelector(".rice-item-modal")

// Get the button that opens the modal
let openRiceModal = document.querySelector(".rice-item");

// Get the <span> element that closes the modal
let closeRiceModal = document.querySelector(".close-rice-modal");


// When the user clicks the button, open the modal 
openRiceModal.addEventListener("click", (event) => {
    event.stopPropagation()
    closeOpenModals();
    riceItemModal.classList.remove("hidden");
    riceItemText.innerHTML = "<p>" + '"' + randomRiceText[Math.floor(Math.random() * randomRiceText.length)] + '"' + "</p>";
    avatarImg.src = meHappy
    setTimeout(() => {
        avatarImg.src = meClosed
    }, 1500);
    TYPING_AUDIO.play()
    setTimeout(() => TYPING_AUDIO.pause(), 1300);
})

// When the user clicks on <span> (x), close the modal
closeRiceModal.addEventListener("click", () => {
    riceItemModal.classList.add("hidden");
    TYPING_AUDIO.pause()
    CONFIRM_AUDIO.play()
})

// MODAL BOX FOR LAPTOP ITEM

let laptopItemText1 = document.querySelector(".laptop-item-text1")
// let laptopItemText2 = document.querySelector(".laptop-item-text2")
let laptopItemText3 = document.querySelector(".laptop-item-text3")

// Get the modal
let laptopItemModal = document.querySelector(".laptop-item-modal")

// Get the button that opens the modal
let openLaptopModal = document.querySelector(".laptop-item");

// Get the <span> element that closes the modal
let closeLaptopModal = document.querySelector(".close-laptop-modal");


// When the user clicks the button, open the modal 
openLaptopModal.addEventListener("click", (event) => {
    event.stopPropagation()
    closeOpenModals();
    laptopItemModal.classList.remove("hidden")
    laptopItemText1.innerHTML = "My good friend and companion for this programming journey is a 'Toshiba Satellite' laptop"
    // laptopItemText2.innerHTML = "for this programación journey"
    // laptopItemText3.innerHTML = "is a 'Toshiba Satellite' laptop"
    if (window.location.hash) {
        if (window.location.hash === "#es") {
            laptopItemText1.innerHTML = "Mi buen amigo y compañero para este viaje de programación es una laptop 'Toshiba Satellite"
            // laptopItemText2.innerHTML = "para este viaje de programación"
            // laptopItemText3.innerHTML = "es una laptop 'Toshiba Satellite'"
        }
    }
    
    avatarImg.src = meHappy
    setTimeout(() => {
        avatarImg.src = meClosed
    }, 3000);
    TYPING_AUDIO.play()
    setTimeout(() => TYPING_AUDIO.pause(), 6000);
})

// When the user clicks on <span> (x), close the modal
closeLaptopModal.addEventListener("click", () => {
    laptopItemModal.classList.add("hidden")

    TYPING_AUDIO.pause()
    CONFIRM_AUDIO.play()
})


// MODAL BOX FOR BAG ITEM

let bagItemText1 = document.querySelector(".bag-item-text1")
// let bagItemText2 = document.querySelector(".bag-item-text2")

// Get the modal
let bagItemModal = document.querySelector(".bag-item-modal")

// Get the button that opens the modal
let openBagModal = document.querySelector(".bag-item");

// Get the <span> element that closes the modal
let closeBagModal = document.querySelector(".close-bag-modal");


// When the user clicks the button, open the modal 
openBagModal.addEventListener("click", (event) => {
    event.stopPropagation()
    closeOpenModals();
    bagItemModal.classList.remove("hidden")
    bagItemText1.innerHTML = "Actually I prefer backpacks, they are very practical"
    // bagItemText2.innerHTML = "they are very practical"
    if (window.location.hash) {
        if (window.location.hash === "#es") {
            bagItemText1.innerHTML = "En realidad prefiero las mochilas, son muy prácticas"
            // bagItemText2.innerHTML = "son muy prácticas"
            }
        }

    avatarImg.src = meHappy
    setTimeout(() => {
        avatarImg.src = meClosed
    }, 2500);
    TYPING_AUDIO.play()
    setTimeout(() => TYPING_AUDIO.pause(), 2800);
})

// When the user clicks on <span> (x), close the modal
closeBagModal.addEventListener("click", () => {
    bagItemModal.classList.add("hidden")
    TYPING_AUDIO.pause()
    CONFIRM_AUDIO.play()
})


// MODAL BOX FOR MUSIC ITEM

let musicItemText1 = document.querySelector(".music-item-text1")
// Get the modal
let musicItemModal = document.querySelector(".music-item-modal")

// Get the button that opens the modal
let openMusicModal = document.querySelector(".music-item");

// Get the <span> element that closes the modal
let closeMusicModal = document.querySelector(".close-music-modal");


// When the user clicks the button, open the modal 
openMusicModal.addEventListener("click", (event) => {
    event.stopPropagation()
    closeOpenModals();
    musicItemModal.classList.remove("hidden")
    musicItemText1.innerHTML = "I love 80's music, my favorite song is smooth criminal by Michael Jackson"

    if (window.location.hash) {
        if (window.location.hash === "#es") {
            musicItemText1.innerHTML = "Amo la música de los 80, mi canción favorita es Smooth Criminal de Michael Jackson"
        }
    }
    avatarImg.src = meHappy
    setTimeout(() => {
        avatarImg.src = meClosed
    }, 2500);
    TYPING_AUDIO.play()
    setTimeout(() => TYPING_AUDIO.pause(), 2800);
})

// When the user clicks on <span> (x), close the modal
closeMusicModal.addEventListener("click", () => {
    musicItemModal.style.display = "none";
    TYPING_AUDIO.pause()
    CONFIRM_AUDIO.play()
})




// Buttons for language options

let languageBtn = document.querySelector(".language-btn")
let languageContainer = document.querySelector(".language-container")
languageBtn.addEventListener("click", (event) => {
    event.stopPropagation()
    closeOpenModals();
    languageContainer.classList.remove("hidden")
})










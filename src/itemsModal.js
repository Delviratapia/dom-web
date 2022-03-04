let unknownItem = document.querySelector(".unknown-item")
let riceItem = document.querySelector(".rice-item")
let juiceItem = document.querySelector(".juice-item")
let avatarImg = document.querySelector(".avatar-img")


// MODAL BOX FOR BEER ITEM

let beerItemText = document.querySelector(".beer-item-text")
let randomBeerText = ["I'm afraid I can't.",
    "Sorry, I can't",
    "Not for me, thanks.",
    "I think I'll pass"
]
const TYPING_AUDIO = new Audio("src/assets/audio/textTypingIntro.mp3")
const CONFIRM_AUDIO = new Audio("src/assets/audio/rpg_confirm.wav")

// Get the modal
let beerItem = document.querySelector(".beer-item-modal")

// Get the button that opens the modal
let openBeerModal = document.querySelector(".beer-item");

// Get the <span> element that closes the modal
let closeBeerModal = document.querySelector(".close-beer-modal");

// function that changes image when hovering the items
openBeerModal.addEventListener("mouseover", mouseOverWorry);
unknownItem.addEventListener("mouseover", mouseOverWorry);
riceItem.addEventListener("mouseover", mouseOverHappy);
juiceItem.addEventListener("mouseover", mouseOverHappy);

function mouseOverWorry() {
    avatarImg.src="src/assets/images/midmouth-normal-eyesopen8.svg"
}
function mouseOverHappy() {
    avatarImg.src="src/assets/images/smile-teeth-eyesclosed7.svg"
}

// function that changes image when hovering outside the items
openBeerModal.addEventListener("mouseout", mouseOutWorry);
unknownItem.addEventListener("mouseout", mouseOutWorry);
riceItem.addEventListener("mouseout", mouseOutHappy);
juiceItem.addEventListener("mouseout", mouseOutHappy);

function mouseOutWorry() {
    avatarImg.src="src/assets/images/smile-normal-eyesopen6.svg"
}
function mouseOutHappy() {
    avatarImg.src="src/assets/images/smile-normal-eyesopen6.svg"
}

// When the user clicks the button, open the modal 
openBeerModal.addEventListener("click", () => {
    beerItem.style.display = "block";
    beerItemText.innerHTML = "<p>" + '"' + randomBeerText[Math.floor(Math.random() * randomBeerText.length)] + '"' + "</p>";
    avatarImg.src="src/assets/images/worry-brow-smile.gif"
    setTimeout(() => {avatarImg.src="src/assets/images/smile-brows-eyesopen1.svg"}, 1200);
    TYPING_AUDIO.play()
    setTimeout(() => TYPING_AUDIO.pause(), 1000);
})

// When the user clicks on <span> (x), close the modal
closeBeerModal.addEventListener("click", () => {
    beerItem.style.display = "none";
    TYPING_AUDIO.pause()
    CONFIRM_AUDIO.play()
})
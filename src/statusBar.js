// Functions and arguments for the ST status bar

let stCounter = 250
let STlife = document.querySelector(".stamina-life")
let unknownItem = document.querySelector(".unknown-item")
let riceItem = document.querySelector(".rice-item")

function modifyStBar(newValue) {
    STlife.classList.remove('w-36')
    STlife.classList.remove('w-28')
    STlife.classList.remove('w-7')
    STlife.classList.remove('w-0')
    STlife.classList.add(newValue)

}

// function that sustracts counter number
unknownItem.addEventListener("click", () => {
    stCounter = stCounter - 100
    if (stCounter >= 150) {
        modifyStBar('w-28')
    }
    if (stCounter >= 50 && stCounter < 150) {
        modifyStBar('w-7')
    }
    if (stCounter <= 0) {
        stCounter = 0
        modifyStBar('w-0')
    }
})

// function that adds counter number
riceItem.addEventListener("click", () => {
    stCounter = stCounter + 100
    if (stCounter >= 250) {
        stCounter = 250
        modifyStBar('w-36')
    }
    if (stCounter >= 150 && stCounter < 250) {
        modifyStBar('w-28')
    }
    if (stCounter >= 50 && stCounter < 150) {
        modifyStBar('w-7')
    }

})
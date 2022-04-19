// Functions and arguments for the ST status bar
//import gameover from "/gameover.html?url"
//const gameover = new URL('../gameover.html', import.meta.url).href
//console.log(gameover)
//let gameover = "/gameover.html"

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
let stNumber = document.querySelector(".st-number")

unknownItem.addEventListener("click", () => {
    stCounter = stCounter - 100
    if (stCounter >= 150) {
        modifyStBar('w-28')
        stNumber.innerHTML = "150/250"
    }
    if (stCounter >= 50 && stCounter < 150) {
        modifyStBar('w-7')
        stNumber.innerHTML = "50/250"

    }
    if (stCounter <= 0) {
        stCounter = 0
        modifyStBar('w-0')
        stNumber.innerHTML = "0/250"

        // poner aqui una promesa de imagen svg triste
        // setTimeout(() => modifyStBar('w-0'),6000)
        if (window.location.hash == "")
            window.location.href = window.location.origin + "/gameover.html"
        else
            window.location.href = window.location.origin + "/gameover.html" + window.location.hash

    }


})

// function that adds counter number
let mpNumber = document.querySelector(".mp-number")

riceItem.addEventListener("click", () => {
    stCounter = stCounter + 100
    if (stCounter >= 250) {
        stCounter = 250
        modifyStBar('w-36')
        stNumber.innerHTML = "250/250"
    }
    if (stCounter >= 150 && stCounter < 250) {
        modifyStBar('w-28')
        stNumber.innerHTML = "60/250"
    }
    if (stCounter >= 50 && stCounter < 150) {
        modifyStBar('w-7')
        stNumber.innerHTML = "10/250"
    }

})

// Functions and arguments for the MP status bar

let mpCounter = 110
let mpLife = document.querySelector(".mp-life")
let beerItem = document.querySelector(".beer-item")
let juiceItem = document.querySelector(".juice-item")

function modifyMpBar(newValue) {
    mpLife.classList.remove('w-36')
    mpLife.classList.remove('w-20')
    mpLife.classList.remove('w-4')
    mpLife.classList.remove('w-0')
    mpLife.classList.add(newValue)

}

// function that sustracts counter number
beerItem.addEventListener("click", () => {
    mpCounter = mpCounter - 50
    if (mpCounter >= 60) {
        modifyMpBar('w-20')
        mpNumber.innerHTML = "60/110"
    }
    if (mpCounter >= 10 && mpCounter < 60) {
        modifyMpBar('w-4')
        mpNumber.innerHTML = "10/110"

    }
    if (mpCounter <= 0) {
        mpCounter = 0
        modifyMpBar('w-0')
        mpNumber.innerHTML = "0/110"

        // poner aqui una promesa de imagen svg triste
    }
})

// function that adds counter number
juiceItem.addEventListener("click", () => {
    mpCounter = mpCounter + 50
    if (mpCounter >= 110) {
        mpCounter = 110
        modifyMpBar('w-36')
        mpNumber.innerHTML = "110/110"

    }
    if (mpCounter >= 60 && mpCounter < 110) {
        modifyMpBar('w-20')
        mpNumber.innerHTML = "60/110"

    }
    if (mpCounter >= 10 && mpCounter < 60) {
        modifyMpBar('w-4')
        mpNumber.innerHTML = "10/110"

    }

})
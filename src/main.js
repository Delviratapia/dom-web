const HOVERAUDIO = new Audio("src/assets/audio/rpg_hover-2.wav")
const USEITEMAUDIO = new Audio("src/assets/audio/rpg_useItem.wav")
const CONFIRMUDIO = new Audio("src/assets/audio/rpg_confirm.wav")
const DENIEDAUDIO = new Audio("src/assets/audio/rpg_denied.wav")
let menuTextAudio = document.querySelectorAll(".cursor-pointer.menu-text")
let items = document.querySelectorAll(".portfolio-item,.cv-item")


function showPreview (){
    item.addEventListener("click",() => {
        item.classList.remove("hidden");
    })
}



for (let btn of menuTextAudio) {
    btn.addEventListener("click", () => {
        HOVERAUDIO.play()
    })

}


for (let item of items) {
    item.addEventListener("click", () => {
        USEITEMAUDIO.play();
        showPreview();

    })

}








let myItems = document.querySelector(".my-items")
let portfTitle = document.querySelector(".portfolio-title")

portfTitle.addEventListener("click", () => {
    for (let item of myItems.children) {
        if (item.classList.contains("portfolio-item")) {
            item.classList.remove("hidden");
        }
        else {
            if (!item.classList.contains("hidden")){
                item.classList.add("hidden");
            }

        }
    }
})

let cvTitle = document.querySelector(".cv-title")

cvTitle.addEventListener("click", () => {
    for (let item of myItems.children) {
        if (item.classList.contains("cv-item")) {
            item.classList.remove("hidden");
        }
        else {
            if (!item.classList.contains("hidden")){
                item.classList.add("hidden");
            }

        }
    }
})

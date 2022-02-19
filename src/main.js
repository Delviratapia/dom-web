const HOVERAUDIO = new Audio("src/assets/audio/rpg_hover-2.wav")
let menuTextAudio = document.querySelectorAll(".cursor-pointer")
for (let btn of menuTextAudio) {
    btn.addEventListener("click", () => {
        HOVERAUDIO.play()
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

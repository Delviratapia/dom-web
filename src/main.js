const myTimeout = setTimeout(onloadModal, 2000);

// FUNCTION THAT STARTS TIMER 

let timeCounter = -1,
    intervalId;
window.addEventListener("load", function () {
    function incrementTime() {
        timeCounter++;
    }
    incrementTime();
    intervalId = setInterval(incrementTime, 1000);
});

// FUNCTION THAT LOAD INITIAL MODAL

let nameModalEN = document.querySelector("#helloEN");
let nameModalES = document.querySelector("#helloES");

function onloadModal() {
    window.onload = modalOnload.classList.remove("hidden")
    if (window.location.hash === "#es") {
        console.log("hey es")
        nameModalES.innerHTML = '"Hola' + " " + localStorage.getItem("name") + " " + 'gusto en conocerte, espero que te guste mi pagina web"'
        TYPING_AUDIO.play()
    }
    if (window.location.hash === "#eng") {
        nameModalEN.innerHTML = '"Hello' + " " + localStorage.getItem("name") + " " + 'nice to meet you, hope you like my web site"'
        TYPING_AUDIO.play()
        }

    

}


let timeLocale = new Date();
let dateLocale = new Date();
let toLocaleTS = timeLocale.toLocaleTimeString();
let toLocaleD = dateLocale.toLocaleDateString();
let time = document.querySelector(".time")

function timeStr() {
    time.innerHTML = toLocaleTS + " " + toLocaleD;
}

setInterval(timeStr, 1)


// SAVE GAME REGISTER DATE

let saveSlot = document.querySelectorAll(".save-slot");
for (let slot of saveSlot) {
    slot.addEventListener("click", () => {
        slot.innerHTML = localStorage.getItem('name') + " " + ("0" + Math.trunc(time / 60)).slice(-2) +
            ":" + ("0" + (time % 60)).slice(-2) + " " + String(toLocaleD) + " " + String(toLocaleTS)
        localStorage.setItem("savegame", slot.innerHTML)
    })
}


let menuTexts = document.querySelectorAll(".menu-text")

for (let menuText of menuTexts) {
    menuText.addEventListener("click", () => {
        for (let menuText of menuTexts) {
            if (menuText.classList.contains("active")) {
                menuText.classList.remove("active");
            }
        }
        menuText.classList.toggle("active")
    })

}



const HOVER_AUDIO = new Audio("src/assets/audio/rpg_hover-2.wav")
const USE_ITEM_AUDIO = new Audio("src/assets/audio/rpg_useItem.wav")
let menuText = document.querySelectorAll(".cursor-pointer.menu-text")
let menuItems = document.querySelectorAll(".cursor-pointer.menu-item")
let menuPreview = document.querySelectorAll(".preview-links")
let portfolioItem = document.querySelectorAll(".portfolio-item")


function showPreview() {
    item.addEventListener("click", () => {
        item.classList.remove("hidden");
    })
}

// Audio on click

for (let btn of menuText) {
    btn.addEventListener("click", () => {
        HOVER_AUDIO.play()
    })

}

for (let btn of menuItems) {
    btn.addEventListener("click", () => {
        USE_ITEM_AUDIO.play()
    })

}

for (let btn of menuPreview) {
    btn.addEventListener("click", () => {
        CONFIRM_AUDIO.play()
    })

}
for (let btn of portfolioItem) {
    btn.addEventListener("click", () => {
        USE_ITEM_AUDIO.play()
    })

}

// this variable contains all the items that are deployed when pressing a menu button
const myItems = document.querySelector(".my-items")

// portfolio 

let portfTitle = document.querySelector(".portfolio-title")
portfTitle.addEventListener("click", () => {
    for (let item of myItems.children) {
        if (item.classList.contains("portfolio-item")) {
            item.classList.remove("hidden");
        } else if (!item.classList.contains("hidden")) {
            item.classList.add("hidden");
        }
    }

})


// Portfolio PREVIEW

let myItemsPreview = document.querySelector(".my-items-preview")
let avistaloo = document.querySelector(".avistaloo")

avistaloo.addEventListener("click", () => {
    for (let item of myItemsPreview.children) {
        if (item.classList.contains("preview-links") && item.classList.contains("portfolio-preview")) {
            item.classList.remove("hidden");
        } else {
            if (!item.classList.contains("hidden")) {
                item.classList.add("hidden");
            }

        }
    }
})




// CV


let cvTitle = document.querySelector(".cv-title")
cvTitle.addEventListener("click", () => {
    for (let item of myItems.children) {
        if (item.classList.contains("cv-item")) {
            item.classList.remove("hidden");
        } else {
            if (!item.classList.contains("hidden")) {
                item.classList.add("hidden");
            }

        }
    }
})


// CV Preview
let cvItem = document.querySelector(".cv-item")

cvItem.addEventListener("click", () => {
    for (let item of myItemsPreview.children) {
        if (item.classList.contains("cv-preview") && item.classList.contains("preview-links")) {
            item.classList.remove("hidden");
        } else {
            if (!item.classList.contains("hidden")) {
                item.classList.add("hidden");
            }

        }
    }
    USE_ITEM_AUDIO.play()
})



// Items
let itemsTitle = document.querySelector(".items-title")

itemsTitle.addEventListener("click", () => {
    for (let item of myItems.children) {
        if (item.classList.contains("menu-item")) {
            item.classList.remove("hidden");
        } else {
            if (!item.classList.contains("hidden")) {
                item.classList.add("hidden");
            }

        }
    }
})

// Skills
let skillsTitle = document.querySelector(".skills-title")
skillsTitle.addEventListener("click", () => {
    for (let item of myItems.children) {
        if (item.classList.contains("skill-item")) {
            item.classList.remove("hidden");
        } else {
            if (!item.classList.contains("hidden")) {
                item.classList.add("hidden");
            }

        }
    }
})

// MODAL BOX

const TYPING_AUDIO = new Audio("src/assets/audio/TEXTtypingcut.mp3")
const DENIED_AUDIO = new Audio("src/assets/audio/rpg_denied.wav")
const CONFIRM_AUDIO = new Audio("src/assets/audio/rpg_confirm.wav")

// Get the modal
let emailModal = document.querySelector(".email-modal");

// Get the button that opens the modal
let openModal = document.querySelector(".email-open-modal");

// Get the <span> element that closes the modal
let closeModal = document.querySelector(".close-modal");

// When the user clicks the button, open the modal 
openModal.addEventListener("click", (event) => {
    event.stopPropagation()
    emailModal.classList.remove("hidden")
    TYPING_AUDIO.play()
})

// When the user clicks on <span> (x), close the modal
closeModal.addEventListener("click", (event) => {
    event.stopPropagation()
    emailModal.classList.add("hidden")

    TYPING_AUDIO.pause()
    CONFIRM_AUDIO.play()
})



// WINDOW ONLOAD MODAL BOX

// Get the modal
let modalOnload = document.querySelector(".modal-Onload");

// Get the <span> element that closes the modal
let closeModalOnload = document.querySelector(".close-modal-Onload");


// When the user clicks on <span> (x), close the modal
closeModalOnload.addEventListener("click", (event) => {
    event.stopPropagation()
    modalOnload.classList.add("hidden")
    TYPING_AUDIO.pause()
    CONFIRM_AUDIO.play()
})



// SAVE MODAL


let saveModal = document.querySelector(".modal-savegame");
let saveText = document.querySelector(".saveText");

let closeSaveModal = document.querySelector(".close-modal-savegame");

saveText.addEventListener("click", (event) => {
    event.stopPropagation()
    saveModal.classList.remove("hidden")

})

closeSaveModal.addEventListener("click", () => {
    saveModal.classList.add("hidden")
    CONFIRM_AUDIO.play()
})


// GENERAL MODAL CLOSES WHEN CLICKS OUTSIDE MODAL

let hiddenModal = document.querySelectorAll(".hidden-modal")
window.addEventListener("click", function (event) {
    for (let modal of hiddenModal) {
        if (event.target != modal && event.target.parentNode != modal) {
            if (!modal.classList.contains("hidden")) {
                modal.classList.add("hidden")
            }

        }
    }


})
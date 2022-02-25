const myTimeout = setTimeout(onloadModal, 2000);

function onloadModal() {
    window.onload = modalOnload.style.display = "block";
    TYPING_AUDIO.play()

}

function timeStr() {
    let t = new Date();
    let ltstr = t.toLocaleTimeString();
    document.querySelector(".time").innerHTML = ltstr;
}
setInterval(timeStr, 1)



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


// MODAL BOX

const TYPING_AUDIO = new Audio("src/assets/audio/TEXTtypingcut.mp3")
const DENIED_AUDIO = new Audio("src/assets/audio/rpg_denied.wav")
const CONFIRM_AUDIO = new Audio("src/assets/audio/rpg_confirm.wav")

// Get the modal
let modal = document.querySelector(".modal");

// Get the button that opens the modal
let openModal = document.querySelector(".email-modal");

// Get the <span> element that closes the modal
let closeModal = document.querySelector(".close-modal");

// When the user clicks the button, open the modal 
openModal.onclick = function () {
    modal.style.display = "block";
    TYPING_AUDIO.play()
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
    modal.style.display = "none";
    TYPING_AUDIO.pause()
    CONFIRM_AUDIO.play()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        CONFIRM_AUDIO.play()
    }
}


// WINDOW ONLOAD MODAL BOX

// Get the modal
let modalOnload = document.querySelector(".modal-Onload");

// Get the <span> element that closes the modal
let closeModalOnload = document.querySelector(".close-modal-Onload");

// When the user clicks on <span> (x), close the modal
closeModalOnload.onclick = function () {
    modalOnload.style.display = "none";
    TYPING_AUDIO.pause()
    CONFIRM_AUDIO.play()
}









const HOVER_AUDIO = new Audio("src/assets/audio/rpg_hover-2.wav")
const USE_ITEM_AUDIO = new Audio("src/assets/audio/rpg_useItem.wav")
let menuText = document.querySelectorAll(".cursor-pointer.menu-text")
let menuItems = document.querySelectorAll(".cursor-pointer.menu-item")
let menuPreview = document.querySelectorAll(".preview-links")








//General reusable function 


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


// for (let item of items) {
//     item.addEventListener("click", () => {
//         USEITEMAUDIO.play();

//     })

// }


// portfolio 

let myItems = document.querySelector(".my-items")
let portfTitle = document.querySelector(".portfolio-title")

portfTitle.addEventListener("click", () => {
    for (let item of myItems.children) {
        if (item.classList.contains("portfolio-item")) {
            item.classList.remove("hidden");
        } else {
            if (!item.classList.contains("hidden")) {
                item.classList.add("hidden");
            }

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
})


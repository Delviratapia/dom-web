function timeStr(){    
    var t=new Date();
    var ltstr=t.toLocaleTimeString();
    document.querySelector(".time").innerHTML=ltstr;
      }
   setInterval(timeStr,1)   


const HOVERAUDIO = new Audio("src/assets/audio/rpg_hover-2.wav")
const USEITEMAUDIO = new Audio("src/assets/audio/rpg_useItem.wav")
const CONFIRMAUDIO = new Audio("src/assets/audio/rpg_confirm.wav")
const DENIEDAUDIO = new Audio("src/assets/audio/rpg_denied.wav")
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
        HOVERAUDIO.play()
    })

}

for (let btn of menuItems) {
    btn.addEventListener("click", () => {
        USEITEMAUDIO.play()
    })

}

for (let btn of menuPreview) {
    btn.addEventListener("click", () => {
        CONFIRMAUDIO.play()
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


// Portfolio PREVIEW

let myItemsPreview = document.querySelector(".my-items-preview")
let avistaloo = document.querySelector(".avistaloo")

avistaloo.addEventListener("click", () => {
    for (let item of myItemsPreview.children) {
        if (item.classList.contains("preview-links")) {
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
        if (item.classList.contains("preview-links")) {
            item.classList.remove("hidden");
        } else {
            if (!item.classList.contains("hidden")) {
                item.classList.add("hidden");
            }

        }
    }
})













// Portfolio PREVIEW

// let avistaloo = document.querySelector(".avistaloo")
// let previewContainer = document.querySelectorAll(".preview-container > .preview-links")

// avistaloo.addEventListener("click", () => {
//         if (previewContainer.classList.contains("hidden")) {
//             previewContainer.classList.remove("hidden");
//         } else {
//             if (!previewContainer.classList.contains("hidden")) {
//                 previewContainer.classList.add("hidden");
//             }

//         }

// })



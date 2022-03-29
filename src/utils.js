

// Function that close the modals already open when clicking another one

function closeOpenModals() {
let hiddenModal = document.querySelectorAll(".hidden-modal")
    for (let modal of hiddenModal) {
        if (!modal.classList.contains("hidden")) {
            modal.classList.add("hidden");
        }
    }
}

// General modal that closes when clicks outside modal

function closeModalclickOutside() {
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
}

// Function that loads modal when the page loads

function onloadModal() {
let modalOnload = document.querySelector(".modal-Onload");
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



export {closeOpenModals,closeModalclickOutside, onloadModal};
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

function parentIsModal(event) {
    let node = event.target

    while (node.tagName != 'BODY') {
        if (node.classList.contains('hidden-modal')) {

            return true
        }

        node = node.parentNode
    }

    return false
}

function closeModalclickOutside() {
    let hiddenModal = document.querySelectorAll(".hidden-modal")
    window.addEventListener("click", function (event) {
        for (let modal of hiddenModal) {
            if (event.target != modal && !parentIsModal(event)) {
                if (!modal.classList.contains("hidden")) {
                    modal.classList.add("hidden")
                }

            }
        }
    })
}

// Function that loads modal when the page loads

function onloadModal() {
    let nameModalEs = document.querySelector(".helloEs");
    let nameModalEn = document.querySelector(".helloEn");
    const TYPING_AUDIO = new Audio("src/assets/audio/TEXTtypingcut.mp3")
    TYPING_AUDIO.play()
    let modalOnload = document.querySelector(".modal-Onload");
    window.onload = modalOnload.classList.remove("hidden")
    if (window.location.hash === "#es") {
        nameModalEs.innerHTML = '"Hola' + " " + localStorage.getItem("name") + " " + 'gusto en conocerte, espero que te guste mi pagina web"'
        TYPING_AUDIO.play()
    }
    if (window.location.hash === "#en" || window.location.hash === "") {
        nameModalEn.innerHTML = '"Hello' + " " + localStorage.getItem("name") + " " + 'nice to meet you, hope you like my web site"'
        TYPING_AUDIO.play()
    }

    let avatarImg = document.querySelector(".avatar-img")
    avatarImg.src = "src/assets/images/happy-smile.gif"
    setTimeout(() => {
        avatarImg.src = "src/assets/images/smile-eyesclosed4.svg"
    }, 4000);
}



export {
    closeOpenModals,
    closeModalclickOutside,
    onloadModal
};
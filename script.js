'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalOpenButton = document.querySelectorAll(".show-modal");
const modalCloseButton = document.querySelector(".close-modal");

for (let i = 0; i < modalOpenButton.length; i++) {
    modalOpenButton[i].addEventListener("click", function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        // console.log(`Button ${i + 1} clicked`);
    });
}

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

modalCloseButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
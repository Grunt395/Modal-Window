'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");

for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        // console.log(`Button ${i + 1} clicked`);
    });
}

closeModal.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});
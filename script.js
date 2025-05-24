'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalOpenButton = document.querySelectorAll(".show-modal");
const modalCloseButton = document.querySelector(".close-modal");

function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < modalOpenButton.length; i++) {
    modalOpenButton[i].addEventListener("click", openModal);
}

modalCloseButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

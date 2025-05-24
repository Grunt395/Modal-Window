'use strict';

const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".show-modal");
const closeModal = document.querySelector(".close-modal");

modalButton.addEventListener("click", function () {
    modal.classList.remove("hidden");
});

closeModal.addEventListener("click", function () {
    modal.classList.add("hidden");
});
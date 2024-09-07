const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

// Function for closing modal
function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// Function for opening modal
function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// Loop for selecting which button from querySelectorAll
for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener("click", openModal);
}

// Closing Modal by clicking surrounding overlay
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
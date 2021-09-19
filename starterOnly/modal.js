function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);


// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// close modal form
function closeModal() {
  modalBg.style.display = "none";
}

// close with 'Escape' key event 
document.addEventListener('keydown', escapeModal);


// close with 'Escape' key function
function escapeModal(e) {
  if (e.key === 'Escape' && modalBg.style.display === "block") {
    closeModal();
  }
}


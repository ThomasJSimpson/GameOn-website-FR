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
  formData.hidden = true;
  window.scrollTo(0, 0);
  modal.scrollTo(0, 0);
}

// close modal form
function closeModal() {
  modalBg.style.display = "none";
}

// close with 'Escape' key event
document.addEventListener("keydown", escapeModal);

// close with 'Escape' key function
function escapeModal(e) {
  if (e.key === "Escape" && modalBg.style.display === "block") {
    closeModal();
  }
}

// variables inputs modal form

const form = document.querySelector('[name="reserve"]');
const inputFirst = document.getElementById("first");
const inputLast = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputBirthdate = document.getElementById("birthdate");
const inputContest = document.getElementById("quantity");
const inputCity = document.querySelectorAll('[name="location"]');
const inputTerm = document.getElementById("checkbox1");
const btnThanks = document.getElementById("btn-thanks");
const thanksForm = document.querySelector(".thanks");

// RegExps

const nameRegEx = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/; 
const emailRegEx = /\S+@\S+\.\S+/;
const digitRegEx = /^[0-9]+$/;
const dateRegEx = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

// variables validation required true

let firstValid;
let lastValid;
let emailValid;
let birthdateValid;
let cityValid;
let contestValid;
let termValid;

// Eventslisteners all inputs

inputFirst.addEventListener("change", checkFirst);
inputLast.addEventListener("change", checkLast);
inputEmail.addEventListener("change", checkEmail);
inputBirthdate.addEventListener("change", checkBirthdate);
inputContest.addEventListener("change", checkContest);
inputCity.forEach((check) => {
  check.addEventListener("click", checkCity);
});
inputTerm.addEventListener("change", checkTerm);

// Functions verification First name

function checkFirst() {
  if (inputFirst.value.trim() !== "" && nameRegEx.test(inputFirst.value)) {
    firstValid = true;
    inputFirst.parentElement.setAttribute("data-error-visible", "false");
  } else {
    firstValid = false;
    inputFirst.parentElement.setAttribute("data-error-visible", "true");
  }
}

// Functions verification Last name

function checkLast() {
  if (inputLast.value.trim() !== "" && nameRegEx.test(inputLast.value)) {
    lastValid = true;
    inputLast.parentElement.setAttribute("data-error-visible", "false");
  } else {
    lastValid = false;
    inputLast.parentElement.setAttribute("data-error-visible", "true");
  }
}

// Functions verification Email

function checkEmail() {
  if (inputEmail.value.trim() !== "" && emailRegEx.test(inputEmail.value)) {
    emailValid = true;
    inputEmail.parentElement.setAttribute("data-error-visible", "false");
  } else {
    emailValid = false;
    inputEmail.parentElement.setAttribute("data-error-visible", "true");
  }
}
// Functions verification Birthdate

function checkBirthdate() {
  if (inputBirthdate.value !== "") {
    birthdateValid = true;
    inputBirthdate.parentElement.setAttribute("data-error-visible", "false");
  } else {
    birthdateValid = false;
    inputBirthdate.parentElement.setAttribute("data-error-visible", "true");
  }
}

// Functions verification number of contest

function checkContest() {
  if (inputContest.value.trim() !== "" && digitRegEx.test(inputContest.value)) {
    contestValid = true;
    inputContest.parentElement.setAttribute("data-error-visible", "false");
  } else {
    contestValid = false;
    inputContest.parentElement.setAttribute("data-error-visible", "true");
  }
}

// Functions verification City

function checkCity() {
  for (var city of inputCity) {
    if (cityValid !== true) {
      if (city.checked) {
        cityValid = true;
        city.parentElement.setAttribute("data-error-visible", "false");
      } else {
        cityValid = false;
        city.parentElement.setAttribute("data-error-visible", "true");
      }
    }
  }
}


// Functions verification Terms of service

function checkTerm() {
  if (inputTerm.checked) {
    termValid = true;
    inputTerm.parentElement.setAttribute("data-error-visible", "false");
  } else {
    termValid = false;
    inputTerm.parentElement.setAttribute("data-error-visible", "true");
  }
}

// Validation all input before submition

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (firstValid && lastValid && emailValid && birthdateValid && contestValid && termValid && cityValid) {
    form.style.display = "none";
    thanksForm.style.display = "flex";
  } else {
    checkFirst();
    checkLast();
    checkEmail();
    checkBirthdate();
    checkContest();
    checkTerm();
    checkCity();
  }
});

// Close button thanks modal

btnThanks.addEventListener("click", closeModal);

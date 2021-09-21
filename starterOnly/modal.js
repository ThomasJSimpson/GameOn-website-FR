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

// variables inputs modal form

/* var btnSubmit = document.querySelector('.btn-submit')
 */
var form = document.querySelector('.form');
var inputFirst = document.getElementById('first');
var inputLast = document.getElementById('last');
var inputEmail = document.getElementById('email');
var inputBirthdate = document.getElementById('birthdate');
var inputContest = document.getElementById('quantity')

// RegExps

var nameRegEx = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
var emailRegEx = /\S+@\S+\.\S+/;
var digitRegEx = /[0-9]+/;


var firstValid;
var lastValid;
var emailValid;
var birthdateValid;
var contestValid;

inputFirst.addEventListener("change", checkFirst);
inputLast.addEventListener("change", checkLast);
inputEmail.addEventListener("change", checkEmail);
inputBirthdate.addEventListener("change", checkBirthdate);
inputContest.addEventListener("change", checkContest);

function checkFirst() {
  if (inputFirst.value.trim() !== "" && nameRegEx.test(inputFirst.value)){
    firstValid = true;
    alert(firstValid);
  } else {
    firstValid = false;
    alert(firstValid);
  }
}

function checkLast() {
  if (inputLast.value.trim() !== "" && nameRegEx.test(inputLast.value)){
    lastValid = true;
    alert(lastValid);
  } else {
    lastValid = false;
    alert(lastValid);
  }
}

function checkEmail(){
  if (inputEmail.value.trim() !== "" && emailRegEx.test(inputEmail.value)){
    emailValid = true;
    alert(emailValid);
  } else {
    emailValid = false;
    alert(emailValid);
  }
}

function checkBirthdate(){
  if (inputBirthdate.value !== ""){
    birthdateValid = true;
    alert(birthdateValid);
  } else {
    birthdateValid = false;
    alert(birthdateValid);
  }
}

function checkContest(){
  if (inputContest.value.trim() !== "" && digitRegEx.test(inputContest.value)){
    contestValid = true;
    alert(contestValid);
  } else {
    contestValid = false;
    alert(contestValid);
  }
}







form.addEventListener('submit', function(e){
  
  if (firstValid && lastValid && emailValid && contestValid){
    SubmitEvent;
  } else {
    e.preventDefault();
    alert("Veuillez remplir correctement les champs nécessaires.")
  }
})
/* 
(4) Pour le nombre de concours, une valeur numérique est saisie.
(5) Un bouton radio est sélectionné.
(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation. */
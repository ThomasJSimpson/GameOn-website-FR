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

// Eventslisteners

inputFirst.addEventListener("change", checkFirst);
inputLast.addEventListener("change", checkLast);
inputEmail.addEventListener("change", checkEmail);
inputBirthdate.addEventListener("change", checkBirthdate);
inputContest.addEventListener("change", checkContest);


// Functions

function checkFirst() {
  if (inputFirst.value.trim() !== "" && nameRegEx.test(inputFirst.value)){
    firstValid = true;
  } else {
    firstValid = false;
  }
}

function checkLast() {
  if (inputLast.value.trim() !== "" && nameRegEx.test(inputLast.value)){
    lastValid = true;
  } else {
    lastValid = false;
  }
}

function checkEmail(){
  if (inputEmail.value.trim() !== "" && emailRegEx.test(inputEmail.value)){
    emailValid = true;
  } else {
    emailValid = false;
  }
}

function checkBirthdate(){
  if (inputBirthdate.value !== ""){
    birthdateValid = true;
  } else {
    birthdateValid = false;
  }
}

function checkContest(){
  if (inputContest.value.trim() !== "" && digitRegEx.test(inputContest.value)){
    contestValid = true;
  } else {
    contestValid = false;
  }
}

// Test de vérification Villes

var cityValid;

var inputCity1 = document.getElementById('location1');
inputCity1.addEventListener("change", checkCity);

var inputCity2 = document.getElementById('location2');
inputCity2.addEventListener("change", checkCity);

var inputCity3 = document.getElementById('location3');
inputCity3.addEventListener("change", checkCity);

var inputCity4 = document.getElementById('location4');
inputCity4.addEventListener("change", checkCity);

var inputCity5 = document.getElementById('location5');
inputCity5.addEventListener("change", checkCity);

var inputCity6 = document.getElementById('location6');
inputCity6.addEventListener("change", checkCity);

function checkCity (){
if (inputCity1.checked){

  cityValid = true;
  alert(cityValid);
  
} else if (inputCity2.checked){

  cityValid = true;
  alert(cityValid);
} else if (inputCity3.checked){

  cityValid = true;
  alert(cityValid);
} else if (inputCity4.checked){

  cityValid = true;
  alert(cityValid);
} else if (inputCity5.checked){

  cityValid = true;
  alert(cityValid);
} else if (inputCity6.checked){

  cityValid = true;
  alert(cityValid);
} else {

  cityValid = false;
  alert(cityValid);
}
}

// Terms validation

var termValid;
var inputTerm = document.getElementById('checkbox1');
inputTerm.addEventListener("change", checkTerm);

function checkTerm (){
  if (inputTerm.checked){
    termValid = true;
    alert(termValid);
  } else {
    termValid = false;
  }
}


//checkDate
dateRegEx = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/


function checkBirthdate(){
  if ((inputBirthdate.value !== "") && dateRegEx.test(inputBirthdate.value)) {
    birthdateValid = true;
  } else{
    birthdateValid = false;
  }
}



// Validation all input before submit

form.addEventListener('submit', function(e){
  
  if (firstValid && lastValid && emailValid &&  birthdateValid && contestValid && cityValid && termValid){
    SubmitEvent;
  } else {
    e.preventDefault();
    alert("Veuillez remplir correctement les champs nécessaires.")
  }
})

/* 
Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation. */
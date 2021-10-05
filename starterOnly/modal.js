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


let form = document.querySelector('[name="reserve"]');
let inputFirst = document.getElementById('first');
let inputLast = document.getElementById('last');
let inputEmail = document.getElementById('email');
let inputBirthdate = document.getElementById('birthdate');
let inputContest = document.getElementById('quantity')


// RegExps

const nameRegEx = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
const emailRegEx = /\S+@\S+\.\S+/;
const digitRegEx = /[0-9]+/;


let firstValid;
let lastValid;
let emailValid;
let birthdateValid;
let contestValid;

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
    inputFirst.parentElement.setAttribute("data-error-visible", "false");

  } else {
    firstValid = false;
    inputFirst.parentElement.setAttribute("data-error-visible", "true");
  }
}

function checkLast() {
  if (inputLast.value.trim() !== "" && nameRegEx.test(inputLast.value)){
    lastValid = true;
    inputLast.parentElement.setAttribute("data-error-visible", "false");

  } else {
    lastValid = false;
    inputLast.parentElement.setAttribute("data-error-visible", "true");

  }
}

function checkEmail(){
  if (inputEmail.value.trim() !== "" && emailRegEx.test(inputEmail.value)){
    emailValid = true;
    inputEmail.parentElement.setAttribute("data-error-visible", "false");

  } else {
    emailValid = false;
    inputEmail.parentElement.setAttribute("data-error-visible", "true");

  }
}

function checkBirthdate(){
  if (inputBirthdate.value !== ""){
    birthdateValid = true;
    inputBirthdate.parentElement.setAttribute("data-error-visible", "false");

  } else {
    birthdateValid = false;
    inputBirthdate.parentElement.setAttribute("data-error-visible", "true");

  }
}

function checkContest(){
  if (inputContest.value.trim() !== "" && digitRegEx.test(inputContest.value)){
    contestValid = true;
    inputContest.parentElement.setAttribute("data-error-visible", "false");

  } else {
    contestValid = false;
    inputContest.parentElement.setAttribute("data-error-visible", "true");

  }
}





// Test de vérification Villes

let cityValid;

let inputCity1 = document.getElementById('location1');
inputCity1.addEventListener("change", checkCity);

let inputCity2 = document.getElementById('location2');
inputCity2.addEventListener("change", checkCity);

let inputCity3 = document.getElementById('location3');
inputCity3.addEventListener("change", checkCity);

let inputCity4 = document.getElementById('location4');
inputCity4.addEventListener("change", checkCity);

let inputCity5 = document.getElementById('location5');
inputCity5.addEventListener("change", checkCity);

let inputCity6 = document.getElementById('location6');
inputCity6.addEventListener("change", checkCity);

function checkCity (){
if (inputCity1.checked){

  cityValid = true;
  inputCity1.parentElement.setAttribute("data-error-visible", "false");

  
  
} else if (inputCity2.checked){

  cityValid = true;
  inputCity2.parentElement.setAttribute("data-error-visible", "false");

  
} else if (inputCity3.checked){

  cityValid = true;
  inputCity3.parentElement.setAttribute("data-error-visible", "false");

  
} else if (inputCity4.checked){

  cityValid = true;
  inputCity4.parentElement.setAttribute("data-error-visible", "false");


} else if (inputCity5.checked){

  cityValid = true;
  inputCity5.parentElement.setAttribute("data-error-visible", "false");


} else if (inputCity6.checked){

  cityValid = true;
  inputCity6.parentElement.setAttribute("data-error-visible", "false");

} else {

  cityValid = false;
  inputCity1.parentElement.setAttribute("data-error-visible", "true");

}
}

// Terms validation

let termValid;
let inputTerm = document.getElementById('checkbox1');
inputTerm.addEventListener("change", checkTerm);

function checkTerm (){
  if (inputTerm.checked){
    termValid = true;
    inputTerm.parentElement.setAttribute("data-error-visible", "false");

  } else {
    termValid = false;
    inputTerm.parentElement.setAttribute("data-error-visible", "true");
  }
}


//checkDate
dateRegEx = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/


function checkBirthdate(){
  if ((inputBirthdate.value !== "") && dateRegEx.test(inputBirthdate.value)) {
    birthdateValid = true;
    inputBirthdate.parentElement.setAttribute("data-error-visible", "false");

  } else{
    birthdateValid = false;   
    inputBirthdate.parentElement.setAttribute("data-error-visible", "true");
   
  }
}



let btnForm = document.getElementById('btn-form');
let btnThanks = document.getElementById('btn-thanks');
let thanksForm = document.querySelector('.thanks');

// Validation all input before submit

form.addEventListener('submit', function(e){
  
  if (firstValid && lastValid && emailValid &&  birthdateValid && contestValid && cityValid && termValid){
    e.preventDefault();
    SubmitEvent;
    form.style.display = 'none';
    thanksForm.style.display ='flex';
    
    


  } else {
    e.preventDefault();
    checkFirst();
    checkLast();
    checkEmail();
    checkBirthdate();
    checkContest();
    checkCity();
    checkTerm();

    
    
  }
})




btnThanks.addEventListener('click', closeModal);

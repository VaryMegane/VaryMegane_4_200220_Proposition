function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelectorAll(".close"); /*span (x) fermeture formulaire */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtnClose.forEach((span) => span.addEventListener("click", Modalclose));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function Modalclose() {
  modalbg.style.display = "none";
}


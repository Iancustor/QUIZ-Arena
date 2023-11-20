import Typed from "typed.js";

const typed = new Typed("#welcome", {
  strings: [
    "<i>Your Welcome To The Quiz Arena ,</i>  Insert in your Name and Password .",
    ". . . Enjoy the Ultimate power of The Brain ! ",
    ". . .  sign In to continue to the Next Page !!",
    "!! THE QUIZ ARENA !!",
  ],

  typeSpeed: 55,
});
const SectionContainer = document.querySelector(".home-section");
// console.log(SectionContainer

// signing

const InputElms = document.querySelectorAll(".todoInput");

const QuizForm = document.getElementById("QuizForm");
// console.log(InputElms, QuizForm);

// EVENT LISTENERS
QuizForm.addEventListener("submit", function submitForm(e) {
  e.preventDefault();
  const InputValues = InputElms.values;
  // console.log(InputValues);

  if (!InputElms.values > 0) {
    // console.log("Failled");
  } else {
    // console.log("logged in");
    InputElms.values = ``;
    displaySection2();
  }
});

function displaySection2() {
  window.location = "subjects.html";
}

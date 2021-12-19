console.warn("connected");

// DOM SETUP
let html = document.getElementById("html-main");
console.log(html);

// change HTML background tint to darkgray color rgb(54,54,54)
html.style.background =
  "linear - gradient(rgba(54,54,54,.45),rgba(54,54,54,.45))";

// consider creating a class w/ these styles in CSS file and add className to HTML element when main cta button is clicked"

// console.log(html.style.background);

// button click event
let button = document.getElementById("main-cta");
console.log(button);

button.addEventListener("click", myFunction);

function myFunction() {
  console.log("button clicked");
  html.classList.add("modal-overlay");
}

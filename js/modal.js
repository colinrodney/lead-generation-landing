// console.warn("connected");

// DOM SETUP
let html = document.getElementById("html-main");
console.log(html);

let modal_Window = document.querySelector(".modal");
console.log(modal_Window);

// change HTML background tint to darkgray color rgb(54,54,54)
html.style.background =
  "linear - gradient(rgba(54,54,54,.45),rgba(54,54,54,.45))";

let modal_Overlay = document.getElementById("modal-overlay");
console.log("modal-overlay");

let close_Button = document.getElementById("close-button");
console.log(close_Button);

// consider creating a class w/ these styles in CSS file and add className to HTML element when main cta button is clicked"

// console.log(html.style.background);

// button click event
let button = document.getElementById("main-cta");
console.log(button);

button.addEventListener("click", myFunction);

function myFunction() {
  console.log("button clicked");
  modal_Overlay.classList.add("modal-overlay");

  modal_Window.style.display = "block";
}

close_Button.addEventListener("click", closeModal);
function closeModal() {
  console.log("close button clicked");
  modal_Overlay.classList.remove("modal-overlay");
  modal_Window.style.display = "none";
}

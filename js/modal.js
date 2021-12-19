console.warn("connected");

// DOM SETUP
let html = document.querySelector("html");
console.log(html);

// change HTML background tint to darkgray color rgb(54,54,54)
// html.style.background =
//   "linear - gradient(rgba(54,54,54,.45),rgba(54,54,54,.45))";

// button click event
let button = document.getElementsByClassName("main-content__cta");
console.log(button);

button[0].addEventListener("click", myFunction);

function myFunction() {
  console.log("button clicked");
}

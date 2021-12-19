console.warn("connected");

// DOM SETUP
let html = document.getElementById("html-main");
console.log(html);

// change HTML background tint to darkgray color rgb(54,54,54)
let testStyle;
testStyle.background =
  "linear - gradient(rgba(54,54,54,.45),rgba(54,54,54,.45))";

// button click event
let button = document.getElementById("main-cta");
console.log(button);

button.addEventListener("click", myFunction);

function myFunction() {
  console.log("button clicked");
}

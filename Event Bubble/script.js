// // lokesh vasnik

// // Event Bubbling in Js
// // Event Simulation
// // Event Deligation

// // e.stopPropagation()

// // Ep.65

// // Browser Object Modal

// const button = document.querySelector(".btn");
// const urlButton = document.querySelector(".urlButton");
// const heading = document.querySelector(".heading");

// // function greeting() {
// //   console.log("Hello lokesh vasnik");
// // }

// // button.addEventListener("click", greeting);

// // Higher order function ko use karte hai arrow function mein

// button.addEventListener("click", () => {
//   window.location.reload();
// });

// urlButton.addEventListener("click", () => {
//   let url = window.location.href;

//   heading.innerHTML = url;
// });

// Event Bubbling in javascript
// Event Capturing is not used muchf

const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");

pink.addEventListener(
  "click",
  (e) => {
    console.log("1. Pink");
  },
  true
);

blue.addEventListener(
  "click",
  () => {
    console.log("2. Blue");
  },
  true
);

green.addEventListener(
  "click",
  () => {
    console.log("3. Green");
  },
  true
);

document.addEventListener(
  "click",
  () => {
    console.log("4. Document");
  },
  true
);

// Event Captureing

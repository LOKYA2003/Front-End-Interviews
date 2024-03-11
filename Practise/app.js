// Variables and keywords

// let nameOfMe = "Lokesh";

// const cpu = "Intel Inside";

// nameOfMe = "Vasnik";

// cpu = "Vasnik";

// console.log(nameOfMe);

// console.log(cpu);

// Scope Hoisting

// // debugger;
// console.log(calender);
// // const calender = "March";
// var calender = "March";

// console.log(helloMyName());

// function helloMyName(params) {
//   console.log("Helo world");
// }

// In depth of scopes in javascript
//    a. Block
//    b. Function
//    c. Lexical Scope
//    d. Global

// Block scope

// if (true) {
//   if (true) {
//     let blockVar = "lokesh";
//   }
//   console.log(blockVar);
// }

// Function Scope
// function myName(params) {
//   if (true) {
//     var bablu = "Lokesh";
//   }

//   console.log(bablu);
// }

// myName();

// Functions

// 1.  High order function
// 2. Expression function
// 3. Declartion function

// Declartion function

// console.log(add(12, 12));
function add(a, b) {
  return a + b;
}

// Expression function
const sub = function (a, b) {
  return a - b;
};

// console.log(sub(12, 1));

// Expression arrow function

const mul = (a, b) => a * b;

// console.log(mul(12, 12));

// High Order Function

// setInterval(() => {
//   console.log(mul(12, 12));
// }, 2000);

// const arr = [23, 12, 45, 121];

// arr.map((item) => console.log(item));

const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const reloadEventHandler = () => {
  window.location.reload();
};

// Ajax javascript

// Json object

// setInterval(() => {
//   console.log("I am not disturbing your code");
// }, 2000);

// console.log("helo world");

const imageUrlGenerator = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      image.src = data.message;
    });
};

button.addEventListener("click", imageUrlGenerator);

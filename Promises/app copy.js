// Promise is special type of a object

// New function returns object when we use new keyword

// Promise has 3 states
//  a. pending
//  a. fulfilled
//  a. reject

// const resolveBtn = document.querySelector(".btn");

// const p = new Promise((resolve, reject) => {
//   resolveBtn.addEventListener("click", () => {
//     resolve("Promise Resovled");
//   });

//   resolveBtn.addEventListener("click", () => {
//     reject("Giving error");
//   });
// });

// Then se hume pata chalta hai ki resolve hua hai
// inshort fullfill hua hai ki nahi

// p.then((data) => {
//   console.log(data);
// }).catch((error) => {
//   console.log(error);
// });

// Micro task que has high priority to execute

// then keyword returns what you return and display the output

// Lets fix callback hell using promises [Promise]

let response;
const output = fetch("https://dog.ceo/api/breeds/image/random")
  .then((data) => data.json())
  .then((data) => (response = data.message))
  .catch((error) => console.log(error));

// Ajax

// setTimeout(() => {
//   console.log("Helo world this is em");
// }, 2000);

// setInterval(() => {
//   console.log("Helo world");
// }, 2000);

const url = "https://dog.ceo/api/breeds/image/random";
// let output = fetch("https://dog.ceo/api/breeds/image/random")
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));

// async function fetchDogApi(url) {
//   const resp = await fetch(url);

//   const data = await resp.json();

//   console.log(data);
// }

// fetchDogApi(url);

// // console.log(output);
// console.log("Helo world");

// console.log("Hleo lokesh");

// Execution context api

// 1. Memory exe phase

// 2. Code exe

// Functions var = code, undefined

// value dekhti hai

// Sceninaroi 1
// console.log(myName);

var myName = "Lokesh";

// Secnario 2

// console.log(myName);

// let myName = "Lokesh";
// hello();

// // Declaartion function
// function hello(params) {
//   console.log("Helo world");
// }

// // Expression functions

// const hellworld = function () {
//   console.log("Helo word from exp function");
// };

// High order functions

const button = document.querySelector(".btn");

function onClickFn(params) {
  console.log("hleo button");
}
button.addEventListener("click", onClickFn);

const maleUsersData = [
  {
    name: "Tom Cruise",
    age: 56,
    "Born At": "Syracuse, NY",
    Birthdate: "July 3, 1962",
    photo: "https://jsonformatter.org/img/tom-cruise.jpg",
  },
  {
    name: "Robert Downey Jr.",
    age: 53,
    "Born At": "New York City, NY",
    Birthdate: "April 4, 1965",
    photo: "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
  },
];

// maleUsersData.map((item) => {
//   console.log("Give me age", item.Birthdate);
// });

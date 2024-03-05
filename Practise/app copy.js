//

// console.log("Server Started");

// Javascript bts

// 1. Global Execution Context 👇

// a. Memory Ex Phase
// var keyword is hoisted 🤚
// let and const are restricted 😠

// In function Local scope gets created
//  a. Memory Ex phase
//  b. Code Ex phase

// b. Code   Ex Phase

debugger;

console.log(name);
myName();

var name = "Lokesh";
const surname = "Vasnik";

// Functions
// a. Declartion 🤚

function myName() {
  const free = "Bablu";
}

// b. Expression 😠

const myFullName = function () {
  console.log("Lokesh Vasnik");
};

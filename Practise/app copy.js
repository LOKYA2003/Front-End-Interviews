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

// ----------------------------------------------------

// Hoisting In Javascript

// console.log("Script");

// 1. Lexcial
// 2. Block
// 3. Global
// 4. Local

// Javascript bts

// 1. Global Execution Context 👇

// a. Memory Ex Phase
// var keyword is hoisted 🤚
// let and const are restricted 😠

// In function Local scope gets created
//  a. Memory Ex phase
//  b. Code Ex phase

// b. Code   Ex Phase

// Lexical Scope

// function parent() {
//   const parentName = "Lokesh";

//   function child() {
//     const childName = "Bablu";

//     console.log("My father name is", parentName);
//   }

//   child();
// }

// parent();

// Block Scope

// Var key is function scoped
// Let & const is a blocked scope

// function myFullName() {
//   console.log("My name is something");
//   personName = "Lokesh";
//   if (true) {
//     console.log(personName);
//   }
// }

// function myFullName() {
//   console.log("My name is something");
//   personName = "Lokesh";
//   if (true) {
//     console.log(personName);
//   }
// }

// myFullName();

// myFullName();

// SetTimeOut & SetInterval

function say() {
  console.log("Greeting");
}

setTimeout(say, 3000);

setTimeout(() => {
  console.log("Greeting from arrow function");
}, 4000);

console.log("Script completed");

// Revision of all what i have learned in javascript

// Global Execution
// Memory Phase Execution
// Code Phase Execution

// Memory Phase Execution
// a. var works fine
// b. Function prints the code
// c. Variables are undefined
// d. let and const are restricted

console.log(nameOfMe); // undefined

// let nameOfMe = "Lokesh Vasnik";
var nameOfMe = "Lokesh Vasnik";

console.log(nameOfMe); // Lokesh Vasnik

// Functions
// a. Declartion
nameMe();

function nameMe() {
  console.log("Helo from function");
}

nameMe();

// b. Expressions
// nameMeee();
const nameMeee = () => {
  console.log("helo world me from function");
};

nameMeee();

// Lexical Scope
// Global scope
// Block scope

// Code example using Binary Search

const arr = [1, 2, 3, 4, 5, 6, 7];
const start = 0;
const end = arr.length - 1;
const target = 7;

function binarySearch(arr, start, end, target) {
  // console.log(mid);
  while (start <= end) {
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

const output = binarySearch(arr, start, end, target);

console.log(output);

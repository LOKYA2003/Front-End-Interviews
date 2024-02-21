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

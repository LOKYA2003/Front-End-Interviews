// console.log("High Order Function");

// Functions

// 1. Declartion

// What is high order functions

function myFunction(value) {
  value();
}

function simple() {
  console.log("Simple Function");
}

// What is callback function

myFunction(simple);

// This is called as callback function with anon function
myFunction(() => console.log("helo"));

// Set time out  🥈

// 1. Its a high order function
// 2. It takes call back as first argu
// 3. It takes time
// 4. Its async

function sayingHello() {
  console.log("Hello lokesh vasnik");
}

setTimeout(sayingHello, 3000);

// clearTimeout('id')

const firstInterval = setInterval(() => {
  console.log("helo");
}, 1000);

clearInterval(firstInterval);

console.log("code printed");

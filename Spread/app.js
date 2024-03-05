// Spread Operator is always used in Arrays and Objects

const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];

const joinedArr = num1.concat(num2);

// Doing the same thing but using spread opertor
// Spread means spreading your legs on floor

const esJoinedArr = [...num1, ...num2];
const testing = [12, ...num2];

console.log(esJoinedArr);
console.log(testing);

// function getUserNames(firstname,lastnaem) {
//     console.log(params);
//   }

function getUserNames(...params) {
  console.log(typeof params);
  console.log(params);
}

getUserNames(12, 12);

// Array string function calling and object

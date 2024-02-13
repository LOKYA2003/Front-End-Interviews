/* 

Video number 1 2 3 are important

Video number 7 are important
Video number 8 are important [ Objects ]

*/

// how to see variable address

// const name = "Askah";
// const age = 18;
// const isGraudate = false;

// Non Primitive Data Type In Js

// Object Literals & Arrays & Functions

// const user = {} // Empty Object

// Ignore Prototype

const user = {
  firstName: "Lokesh",
  lastName: "Vasnik",
  age: 21,
  address: {
    city: "Banglore",
    pincode: "401201",
  },
};

const user2 = {
  firstName: "Lokesh",
  lastName: "Vasnik",
  age: 21,
};

const user3 = {
  "first-Name": "Lokesh",
  "last-Name": "Vasnik",
};

// console.log(user3["last-Name"]);

user3.age = 21;
user3.surname = "Bablu Supari";

// Square bracket are very powerfull

console.log(user);

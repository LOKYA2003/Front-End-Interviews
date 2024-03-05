// Spread Rest Default Paramters

// Spread

// The spread operator (...) unpacks the elements of an iterable object.
// The rest parameter (...) packs the elements into an array.

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

const femaleUsersData = [
  {
    name: "Sonali Cruise",
    age: 56,
    "Born At": "Syracuse, NY",
    Birthdate: "July 3, 1962",
    photo: "https://jsonformatter.org/img/tom-cruise.jpg",
  },
  {
    name: "Minashi  Jr.",
    age: 53,
    "Born At": "New York City, NY",
    Birthdate: "April 4, 1965",
    photo: "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
  },
];

const randomNumbers = [1, 2, 3, 4, 5];

const output = maleUsersData.concat(femaleUsersData);

// console.log(output);

// Spread operator works with Arrays, Objects

const combinedUsers = [...maleUsersData, ...femaleUsersData, ...randomNumbers];

// console.log(combinedUsers);

// Rest Operator & Default parameters

function add(a, b = 1, ...argu) {
  console.log("The length of other arugments are ", argu.length);

  const output = argu.map((item) => item + 1);
  return output;
}

function multiy(a, b = 1) {
  return a + b;
}

// add(12, 12);
// console.log(add(12, 12, 12, 12, 12));

console.log(multiy(2));

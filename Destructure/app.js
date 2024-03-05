const arr = ["Lokesh", "Vasnik", "Bablu"];

const [name, surname] = arr;

function printMyName(name, surname) {
  console.log(` Hello ${name} ${surname}`);
}

printMyName(name, surname);

const femaleUsersData = {
  name: "Sonali Cruise",
  age: 56,
  "Born At": "Syracuse, NY",
  Birthdate: "July 3, 1962",
  photo: "https://jsonformatter.org/img/tom-cruise.jpg",
};

const { name: femaleName, age, photo } = femaleUsersData;

console.log("Your age is:", age);
console.log("Your name is:", femaleName);

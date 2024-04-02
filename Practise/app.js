// Js

// async function getDogs() {
//   const response = await fetch("https://dog.ceo/api/breeds/image/random");

//   const data = await response.json();

//   console.log(data);
// }

// getDogs();

let outut = fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log(outut);

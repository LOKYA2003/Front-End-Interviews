// Fetch api

// fetch("https://dummyjson.com/products/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

fetch("https://dummyjson.com/products/add", {
  method: "POST",
  body: JSON.stringify({
    title: "Bmw",
    categody: "Stationary",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

//  Async & Await & Throw

// Call stack k bahar jaa k wait karta  hai taaki
// hum log dusre functions bhe use kar sakte hai call stack mein
async function makeRequest(params) {
  try {
    const response = await fetch("https://dummyjson.com/products/1");

    const newData = await (
      await fetch("https://dummyjson.com/products/1")
    ).json();
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function add() {
  return 5 + 5;
}

makeRequest();
console.log("helo");
console.log(add());

// agar tumko tunmahar browser freeze karna hai toh sync code use karo

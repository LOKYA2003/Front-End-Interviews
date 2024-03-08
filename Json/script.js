console.log("Server Started ");

// JavaScript Object Notation.

// It is a text-based data interchange format to maintain the structure of the data. JSON is the replacement of the XML data exchange format in JSON

// It is a Javascript Object
// fetch("https://dummyjson.com/products/1")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("Data");
//     console.log(data.brand);
//   });

// Dog api request

const button = document.getElementById("btn");
let imageDiv = document.querySelector(".image");

const dogApi = function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      imageDiv.src = data.message;
    });
};

button.addEventListener("click", dogApi);

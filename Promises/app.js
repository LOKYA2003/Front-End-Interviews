// Promise
// Empty object or we can say a special type of object that is created. It either returns or it either resolves something or it either rejects something. For example, making an HTTPS request. Either the data comes or whether the data gets rejected due to some technical issue over there. So in order to handle this,
//  we use promises. Now let's learn how are those`ere

// Creating Promise

// const resolveBtn = document.querySelector(".btn");

// const p = new Promise((res, rej) => {
//   resolveBtn.addEventListener("click", () => {
//     res("Promise Resolved");
//   });

//   fetch('helo world this is me and welcomd df')
// });

// Fetch function returns a promise so lets use that promise

// fetch("")
//   .then((data) => data.json())
//   .then((data) => console.log(data));

// A new way of handling data instead of promises

async function apiHandler(url) {
  const response = await fetch(url);

  const data = await response.json();

  console.log(data);
}

apiHandler("https://dummyjson.com/products/1");

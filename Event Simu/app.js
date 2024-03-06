const addCardBtn = document.querySelector(".btn");

const container = document.querySelector(".card");

const num = document.querySelector(".count");

let count = 1;

addCardBtn.addEventListener("click", () => {
  const newCard = document.createElement("div");

  newCard.classList.add("card");

  newCard.innerText = count++;

  newCard.addEventListener("click", () => {
    newCard.remove();
  });

  container.append(newCard);
});

const intervalId = setInterval(() => {
  if (count > 10) {
    clearInterval(intervalId);
  }
  addCardBtn.click();
}, 2000);

const countryName = new URLSearchParams(window.location.search).get("name");

const flagImg = document.querySelector(".country-details img");
const countryHeading = document.querySelector(".country-details h1");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    flagImg.src = country.flags.svg;
    countryHeading.innerHTML = country.name.common;

    if (country.name.nativeName) {
      console.log(Object.values(country));
    }
  });

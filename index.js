let searchInput = document.getElementById("country_search");
let search_button = document.getElementById("search");
let result = document.getElementById("result");

search_button.addEventListener("click", () => {
  let countryInput = searchInput.value;
  let countryUrl =` https://restcountries.com/v3.1/name/${countryInput}?fullText=true`;

  data();
  async function data() {
    await fetch(countryUrl)
      .then((res) => res.json())
      .then((data) => {
        result.innerHTML = ` <img src="${data[0].flags.svg}" class="result_img" />
        <h1>${data[0].capital}</h1>
        <span>Region: ${data[0].region}</span>`
      });
  }
});

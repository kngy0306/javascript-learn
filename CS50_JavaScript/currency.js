document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.exchangeratesapi.io/latest?base=USD")
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rates.EUR;
      document.querySelector("body").innerHTML = `1 USD は ${rate.toFixed(
        3
      )} EURです。`;
    });
});

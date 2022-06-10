// console.log('Olá mundo2!');
// fetchCurrencies();
/* Seguir Passos;
1- Recuperar a ul
2- Iterar pelo objeto rates
3- Transformar o objeto em uma array
4- Criar e renderizar a li com os valores */

let rates;
let base;

function renderRater(currency, rate) {
  const ul = document.querySelector("#courency-list");

  const li = document.createElement('li');
  li.innerHTML = `<b>${currency}:</b> ${rate.toFixed(2)}`

  ul.appendChild(li);
}

  function handleRates(rates) {
    const ratesEntries = Object.entries(rates);

   ratesEntries.forEach((entry) => {
    const [currency, rate] = entry;
    renderRater(currency, rate);
    });
  }

  function renderBase(base) {
    const baseTitle = document.querySelector("#base");

    baseTitle.innerText = `Valores referentes a 1 ${base}`;
  }

  function clearCurrencyList(){
    const ul = document.querySelector('#courency-list');
    ul.innerText = '';
  }

  async function handleSearchEvent() {
    const currencyInput = document.querySelector('#currency-input');
    const value = currencyInput.value.toUpperCase();
    const data = await fetchCurrencies(value);

    rates = data.rates;
    base = data.base;

    clearCurrencyList();
    handleRates(rates)
    renderBase(base);
  }

function getCurrency() {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', handleSearchEvent);
}

function saveCurrencyListLocalStorage() {
  const saveBtn = document.querySelector('#save-localStorage-button');

  saveBtn.addEventListener('click', () => {
    // console.log(rates);
    const ratesStringfy = JSON.stringify(rates); // converte os dados para uma string
    localStorage.setItem('currencyList', ratesStringfy);
    // console.log(ratesStringfy);
  })
}

function getCurrenciesInLocalStorage() {
  const ratesStringfy = localStorage.getItem('currencyList');
  if(ratesStringfy) {

    const ratesInLocalStorage = JSON.parse(ratesStringfy);
    handleRates(ratesInLocalStorage);
  // console.log(ratesInLocalStorage);
  }
}

async function start() {
  getCurrency();
  saveCurrencyListLocalStorage();
  getCurrenciesInLocalStorage();
}

window.onload = start;


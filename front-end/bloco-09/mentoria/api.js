async function fetchCurrencies(currency) {
  const ENDPOINT = `https://api.exchangerate.host/latest?base=${currency}`;

  const response = await fetch(ENDPOINT);
  const { base, rates } = await response.json();

  return {
    base,
    rates
   };
  //  console.log(base,rates);
};

// window.onload = fetchCurrencies;

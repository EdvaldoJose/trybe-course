/*o que tem que fazer;
-> capturar o botão;
-> addEventListener;
-> capturar o valor do input;
-> fazer o fatch usando o valor da captura;
-> tratar o response;
-> usar o respone tratado para inserir o innerHTML do .result-text;
*/
const appendInfo = (info) => {
  const infoToAppend = 'UF: ${info.uf} | Localidade: ${info.localidade}';
  const resultsTextArea = document.getElementsByClassName('results-Text')[0];
  resultsTextArea.innerHTML = infoToAppend;
}

const fetchCep = async (cep) => {
  const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(endpoint);
  const json = await response.json();

  /* outra possibilidade;
    const response = await (fetch(endpoint).then((response) => response.json()))
    ou const response = await (await fetcha(endppoint)).json(); */

    appendInfo(json);
}

const searchButton = document.querySelector('search-cep-info-button');
searchButton.addEventListener('click', () => {
  const inputValue = document.querySelector('input-cep-info-text').ariaValueMax;
  fetchCep(inputValue);
});




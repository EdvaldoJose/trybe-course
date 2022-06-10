// ex-1 como uma uma callback
const resultadoFinal = (resultado) => {
  console.log(resultado);
}
const funcSoma = (num1, num2) => {
  let soma = num1 + num2;
  resultadoFinal(soma);
}
funcSoma(10, 8);

// // ex-2 usando uma callbacks chamando uma function dentro de outra function
const resultadoFinal = (resultado) => {
  console.log(resultado);
}
const funcSoma = (num1, num2, callbacks) => {
  let soma = num1 + num2;
  resultadoFinal(soma);
}
funcSoma(10, 8, resultadoFinal);

// Deficição da função userFullName
const userFullName = ({ firstName, lastName }) => `Hello! my name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} ${nationality}`;

 // Denifição da função getUser
 const getUser = (param, callback) => {
    const userToReturn = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Rssian'
    };
    // retornamos nosso parametro que vai ser uma callbacks getUser
    return param(userToReturn, callback);
  };
  // chamada execusão da função getUser, que vai receber como parametro nossa função userFullName.
  // getUser(userFullName);
  console.log(getUser(userFullName));
  console.log(getUser(userNationality));

// usando o setTimeout.
const userFullName = ({ firstName, lastName }) => `Hello! my name is ${firstName} ${lastName}`;
  const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

  const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

    const getUser = () => {
      setTimeout(() => {
        const user = {
        firstName: 'Ivan',
        lastName: 'Ivanovich',
        nationality: 'Russian',
      };
      // retorna a callback passada como parametro na funcion getUser
       console.log(user);
      }, delay());
    };
    console.log(getUser(userFullName));
    console.log(getUser(userNationality));

// Lidando com erros em operações assícronas.

const countryName= ({ name }) => console.log(`returned countriy is ${name}`);
const countryCurrent = ({ name, currency }) => console.log(`${name} currency is ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error get count: ${error}`);

const getCountry = (onSucesso) => {
  setTimeout(() => {
    const diOperationSucesso = Math.random() >= 0.5;
      if (diOperationSucesso) {
        const contry = {
          name: 'brasil',
          hdi: 0.759,
          currency: 'Real',
        };
        onSucesso(contry);
      } else {
        const errorMessage = "Country could not be found";
      }
  }, delay());
};

getCountry(countryName, printErrorMessage);
getCountry(countryCurrent, printErrorMessage);

// Utilizando uma funções callbacks
const despesas = [
  { luz: 155, }, { mercado: 160, },
  { celular: 65, }, { internet: 119, },
  { barbearia: 21, }, { academia: 120, },
];
const rendaSalario = 1524;

const despesaMensal = (rendaSalario, despesas, callback) => {
  const despesaTotal = callback(despesas);
  const saldoFinal = rendaSalario - despesaTotal;

 console.log(`Balanço do mês:
  recebido: ${rendaSalario},00
  Gasto: ${despesaTotal},00
  Saldo: ${saldoFinal},00`);
};

const somaDespesas = (despesas) => {
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
  return despesaTotal;
};

despesaMensal(rendaSalario, despesas, somaDespesas);

//// test assíncrono com falso positivo.
test('Não devera passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falar!');
  }, 500);
});






const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);







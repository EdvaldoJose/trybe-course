// crie uma função que some todos os numeros pares de uma array.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54, 7];

const getEven = (numbers) => numbers % 2 === 0;
const sumPair = (currentValue, numbers) => currentValue + numbers
const sumNumbers = (array) => array.filter(getEven).reduce(sumPair);

console.log(sumNumbers(numbers)); 

// usando apenas o reduce().

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54, 22, 7];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);
const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers));

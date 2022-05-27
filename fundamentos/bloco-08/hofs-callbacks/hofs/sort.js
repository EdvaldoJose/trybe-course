// a hof sort() retorna o array original ordenado de acordo com a callback, onde é chamada a callback.

const numbers = [9,8,3,4,5,1];
const letters = ['b', 'n', 'h', 'z', 'a', 'r'];
const word = ['Fulano', 'Beltrano', 'Ciclano', 'Adriano'];
const dev = [
  { name: 'Fulano', age: 20 },
  { name: 'Ciclano', age: 30 },
  { name: 'Adriano', age: 40 },
  { name: 'Beltrano', age: 29 },
];

numbers.sort((a, b) => a - b);
console.log(numbers);

const check = (a, b) => (a < b ? -1 : 0);
letters.sort((a, b) => (a > b ? 1 : check(a, b)));
console.log(letters);

word.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
console.log(word);

dev.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
console.log(dev);

dev.sort((a, b) => (a.age > b.age ? 1 : a.age < b.age ? -1 : 0));
console.log(dev);
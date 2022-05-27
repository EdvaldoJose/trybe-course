var numbers = [1, 2, 3, 4, 5];
numbers.sort(function(a, b) {
  return a + b;
});
console.log(numbers);

function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
console.log(isBiggerThan10());

[12, 5, 8, 1, 4].some(element => element > 10);
[2, 5, 8, 1, 4].some(element => element > 10);

console.log([2, 5, 8, 1, 4].some(element => element > 10));

const frutas = [
  { nome: 'maça', quantidade: 2 },
  { nome: 'banana', quantidade: 3 },
  { nome: 'manga', quantidade: 4 },
  { nome: 'pera', quantidade: 5 },
];

const inventario = (frut) => {
  return frut.nome === 'banana';
};
console.log(frutas.find(inventario));

const number = [19,21,30,3,45,22,15];

const verifyEven = (number) => number % 2 === 0;

const isEven = number.filter(verifyEven);

console.log(isEven);

const isEven2 = number.filter((number) => number % 2 === 0);

console.log(isEven2);







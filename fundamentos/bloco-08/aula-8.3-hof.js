// usando o filter()

const number = [1, 2, 3, 4, 5, 6];

const filterOdd = (array) => {
  const addNumbers = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 !== 0) {
      addNumbers.push(array[index]);
    }
  }
  return addNumbers;
}

const filterOdd = (array) => array.filter(number => number % 2 !== 0);

const user = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
];

const findNonDriver = user.fid(element => element.firsName.charAt(1) === 'x');
 console.log(findNonDriver());

 module.exports = filterOdd(findNonDriver); // linkada ao filter.test.js

 const filterOdd = require('./filter');

 deccribe('The filterOdd function', () => {
   it('is é func', () => {
     expect(typeof filterOdd).toBe('function');
   });
   it('retorna uma array apenas com numeros impares', () => {
     expect(filterOdd([1, 2, ,3 ,4 ,5])).toEqual([1, 3, 5]);
     expect(filterOdd([10, 20, -5, 13, 12, 11])).toEqual([-5, 13, 12, 11]);
   });
 });

 // usando o filter() e o mar()

 const user = [
   { name: 'Homer', lestName: 'Simpson', isDriver: true},
   { name: 'Marge', lestName: 'Simpson', isDriver: true},
   { name: 'Bart', lestName: 'Simpson', isDriver: false},
   { name: 'lisa', lestName: 'Simpson', isDriver: false},
   { name: 'Maggie', lastName: 'Simpson', isDriver: false}
 ];

 const nonDrivers = user.filter((element) => element.isDriver === false).map((element) => `${element.name} ${element.lastName}`);

 console.log(nonDrivers);

 // usando a function hof map()

 const users = [
  { name: 'Homer', lestName: 'Simpson', isDriver: true},
  { name: 'Marge', lestName: 'Simpson', isDriver: true},
  { name: 'Bart', lestName: 'Simpson', isDriver: false},
  { name: 'lisa', lestName: 'Simpson', isDriver: false},
  { name: 'Maggie', lastName: 'Simpson', isDriver: false}
];

// forma convencional

const primeirosNomes = [];
for (let index = 0; index < user.length; index += 1) {
  primeirosNomes.push(user[index].name);
}

// usando a function map()

const primeirosNomes = user.map((element) => `${element.name} ${element.lastName}`);

console.log(primeirosNomes);

// usando o forEach() map() filter()

const numbers = [1, 2, 3, 4, 5, 6,];

console.log('Números: ', numbers);
console.log('O dobro dos números: ', numbers.map((numero => numero * 2)));

const paresMenoresDoQueCinco = [];
numbers.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresDoQueCinco.push(numero);
  }
});
// if com ternarios (?)
// condicao ? retorna se for verdadeiro: retorna se for falseExpression

const paresMenoresDoQueCinco = numbers.filter((numero) => numero < 5 && numero % 2 === 0);

const paresMenoresDoQueCinco = numbers.map((numero) => numero < 5 && numero % 2 === 0);

console.log(paresMenoresDoQueCinco);

// outro exemplo usando map()

const birds = [
  { ID: 'DV8', Name: 'Eurasian Collared-Dove', Type: 'Dove' },
  { ID: 'HK12', Name: 'Bald Eagle', Type: 'Hawk' },
  { ID: 'HK6', Name: 'Red-Tailed Hawk', Type: 'Hawk' },
  { ID: 'SP11', Name: 'Old World Sparrow', Type: 'Sparrow' },
  { ID: 'DV2', Name: 'Mourning Dove', Type: 'Dove' },
];

const birdNames = birds.map(bird => bird.Name.toLowerCase());

console.log(birdNames);



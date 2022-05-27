// usando o find()

const user = [
  {firstName: 'Homer', lastName: 'Simpson', isDriver: true},
  {firstName: 'Marge', lastName: 'Simpson', isDriver: true},
  {firstName: 'Bart', lastName: 'Simpson', isDriver: false},
  {firstName: 'Maggie', lastName: 'Simpson', isDriver: false},
  {firstName: 'Lisa', lastName: 'Simpson', isDriver: false},
];

// // usando o for normal

const findAnoDriver = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].isDriver === false) {
      return array[i];
    }
  }
  return undefined;
}
console.log(findAnoDriver(user));

// // usando o find()

const findAnoDriver = (array) => {
  return array.find((element) => {
    return element.isDriver === false;
  });
};
console.log(findAnoDriver(user));

// usando apenas uma linha.

const findAnoDriver = (array) => array.find((element) => element.isDriver === false);

console.log('Não motorista', findAnoDriver(user));

// usando o forEach()

const number = [1,2,3,4,5,6,7,8,9,10];

function multiplyByThree(array) {
  const newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(array[index]);
  }
  array.forEach(element => newArray.push(element * 3));
  return newArray;
}
console.log(multiplyByThree(number));

module.exports = multiplyBy; // realize test com essa função

const multiplyByThree = require('./aula-8.2-hot.js');

describe('a função multiplyBy', () => {
  it('é uma função', () => {
    expect(typeof multiplyByThree).toBe('function');
  });
});
  it('multiplica todos os números do array por 3', () => {
    expect(multiplyByThree([1,2,3])).toEqual([3,6,9]);
    expect(multiplyByThree([1,2,3,4,5,6,7,8,9,10])).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
    expect(multiplyByThree([])).toEqual([]);
  });

// usando o some()

const ages = [23, 32,17, 16,34];
const moreAges = [23, 32,34];

function lessThan18(age) {
  return age < 18;
}

function anyLessThan18(array) {
  return array.some((element) => element < 18);
}

const everyoneLessThan18 = (array) => array.every(lessThan18);

const lessThan18 = age => age < 18;
const anyLessThan18 = (array) => array.some(lessThan18);
const everyoneLessThan18 = (array) => array.every(lessThan18);

const greaterThan18 = (age) => age > 18;
const anyGreaterThan18 = (array) => array.some(lessThan18);
const everyoneGreaterThan18 = (array) => array.every(lessThan18);

console.log('Alguem menor de 18 em ages:', anyLessThan18(ages));
console.log('Alguem menor de 18 em moreAges:', anyLessThan18(moreAges));
console.log('Todo mundo menor de 18 em ages:', everyoneLessThan18(ages));
console.log('Todo mundo menor de 18 em moreAges:', everyoneLessThan18(moreAges));
console.log('Todo mundo maior de 18 em ages:', everyoneGreaterThan18(ages));
console.log('Todo mundo maior de 18 em moreAges:', everyoneGreaterThan18(moreAges));

// usando o sort()

const number = [1, 20, 10,2, 40];

console.log(number.sort((a, b) => a - b));

const compara = (a, b) => {
  if (a < b) {
    return -1
  } 
  if (a > b) {
    return 1;
  }
  return 0;  
}
 console.log(compara);
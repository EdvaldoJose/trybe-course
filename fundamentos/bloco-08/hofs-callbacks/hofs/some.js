// a hof some() retorna um booleano true ou false, onde é chamada a callback dentro do if.

function isEven(array) {
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if (item % 2 === 0) return true;
  }
  return false;
}

const array1 = [1,3,5,6,7,9];
const array2 = [1,3,5,7,9,10];

const cb = (item) => item % 2 === 0;

function mySome(array, callback) {
  let result = false;
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if (callback(item)) {
      result = true;
    }
  }
  return result;
}

console.log(mySome(array1, cb));
console.log(mySome(array2, cb));

console.log(array1.some(cb));
console.log(array2.some(cb));

console.log(array1.some((n) => n));
console.log([0,0,0,1].some((n) => n));
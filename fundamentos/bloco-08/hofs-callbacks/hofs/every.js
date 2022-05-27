// o every() retorna um boolean, onde a chamada a callbacks, dentro do if a callback é esperada.
//----------------------------------------------------------
const array1 = [1, 3, 5, 6, 7, 9];
const array2 = [1, 3, 5, 7, 9];
// esse é o for dentro de uma hof function every().
function myEvery(array, callback) {
  let result = true;
  for (let index = 0; index < array.length; index += 1) {
    const item = array[index];
    if (callback(item)) {
      result = false;
    }
  }
  return result;
}
//----------------------------------------------------------
console.log([].every(() => false));

const cb = (item) => item % 2 !== 0;

console.log(myEvery(array1, cb));
console.log(myEvery(array2, cb));

console.log(array1.every(cb));
console.log(array2.every(cb));
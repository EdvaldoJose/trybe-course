// o find() retorna o primeiro item do array que satisfaça a condição passada na callback,
// onde é chamda a callback, a callback espera uma condição.
//----------------------------------------------------------
function myFind(array, callback) {
  let findEd;
  for (let index = 0; index < array.length; index += 1) {
    let item = array[index];
    if (callback(item) && !findEd && findEd !== 0 && findEd !== '') {
      findEd = item;
    }
  }
  return findEd;
}
//----------------------------------------------------------
const numbers = [1, 3, 5, 6, 7, 8];

const cb = (item) => item % 2 === 0;

const result = myFind(numbers, cb);

console.log(result);
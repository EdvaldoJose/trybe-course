// o filter() retorna um novo array filtrado de acordo com a condição passada em uma callback,
// onde é chamda a callbacks dentro de um if() que faz um push onde a callback espera uma condição.
//----------------------------------------------------------
function myFilter(array, callback) {
  const newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    let item = array[index];
    if (callback(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}
//----------------------------------------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const cb = (item) => item % 2 !== 0;
const add = myFilter(numbers, cb);
console.log(add);

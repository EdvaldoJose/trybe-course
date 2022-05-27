// map retorna um novo array com a mesma quantidade de item do array passado, 
// onde é chamada a callback dando push do nonovo array, a callback espera a modificação para cada item do array.
//----------------------------------------------------------
function myMap(array, callback) {
  let newMap = [];
  for (let index = 0; index < array.length; index += 1) {
    let item = array[index];
      newMap.push(callback(item));
    }
  return newMap;
}
//----------------------------------------------------------
const numbers = [2,5,6,3,4];

const cb = (item) => item * 2;

console.log(myMap(numbers, cb));
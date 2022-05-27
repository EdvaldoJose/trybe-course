// o forEach() não retorna nada, onde é chamada a callback dentro do for, a callback espera o que você quiser.
//----------------------------------------------------------
const array1 = [1,3,5,6,7,9];

function myforEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    let item = array[index];
    (callback(index));
  }
}
//----------------------------------------------------------
const mult = [];

array1.forEach((n) => {
  mult.push(n*2);
});

console.log(mult);

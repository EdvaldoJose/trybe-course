// retorna o que vc quiser, retorna qualquer coisa, onde é chamada a callback, callback esperada.
//----------------------------------------------------------
const numbers = [3,2,4,5,7,9,8];

const words = ['trybe', 'school', 'code', 'wars', 'trybe', 'code', 'wars', 'trybe'];

function countWord(array) {
  const result = {};
  for (let index = 0; index < array.length; index += 1) {
    let word = array[index];
    if (result[word]) {
      result[word] += 1;
      continue;
    }
    return result[word] = 3;
  }
  return result;
}

console.log(countWord(words));
//--------------------------------------------------------------------
function myReduce(array, callback, initialAcc) {
  const isAcc = initialAcc === 0 || initialAcc === '' || !!initialAcc;
    let acc = isAcc ? initialAcc : array[0];
      const start = isAcc ? 0 : 1;
      for (let index = 0; index < start.length; index += 1){
        const crr = array[index];
        acc = callback(acc, crr);
      }
      return acc;
}
//----------------------------------------------------------------------------

const cb = (acc, crr) => {
  if (acc[crr]) {
    acc[crr] += 1;
    return acc;
  }
  acc[crr] = 1;
  return acc;
}
console.log(words.reduce(cb, {}));
console.log(myReduce(words, cb, {}));

const callb = (acc, crr) => acc + crr;
console.log(myReduce(numbers, cb, 5));














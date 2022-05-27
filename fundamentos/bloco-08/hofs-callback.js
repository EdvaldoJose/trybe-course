// retorna novo array filtrado de acordo com a condição passada na callback.
// onde é chamada a callback no if que faz um push.
// a callback espera uma condição.

function myFilter(array, callbacks) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (callbacks(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}

  const numbers = [1,2,3,4,5,6,7,8];

  const cb = (item) => item % 2 !== 0;

  const odd = myFilter(numbers, cb);

console.log(odd);

//

// const [a, b, ...rest] = arr;

// console.log([a, b, rest]);

const [result] = [{ Response: 'value' }];

const obj = { key1: { keyInt: 2 }, key2: 'b', key3: 'c' };

const { key1: { keyInt } } = obj;

console.log(keyInt);

const func = ({ firstName, lastName }) => {
  console.log(`Olá, ${firstName} ${lastName}`);
};

func({ firstName: 'Fulano', lastName: 'da Silva'});

// teste
function multiply(a, b){
  return a * b;
}
console.log(multiply(2, 4));

//












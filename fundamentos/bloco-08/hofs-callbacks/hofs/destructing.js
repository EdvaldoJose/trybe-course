const arr = [1, 2, 3, 4, 5];

const [a, b, ...rest] = arr;

console.log({ a, b, ...rest });

const [result] = [{  Response: 'value' }];

const obj = { key1: { keyInt: 2 }, key2: 'b', key3: 'c' };

const { key1: { keyInt } } = obj;

console.log(keyInt);

const func = ({ firstName, lastName }) => {
  console.log(`Olá ${firstName} ${lastName}`);
};

func ({ firstName: 'Fulano', lastName: 'da Silva' });

const arrayOfValues = ['josé', 50, 35, 0.25, {comida: 'chocolate'}];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array', element);
});

arrayOfValues.forEach((element) => console.log('Cada elemento do array: ', element));

//  verifique se cad elemento do meu array é multiplo de 2.

meuArray.forEach((element) => {
  if (element % 2 === 0) {
    console.log(`${element} é divisível por 2!`);
  }
});
  
// passando mais parametros para as hofs.

const arrayOfValues = ['josé', 50, 35, 0.25, {comida: 'chocolate'}];
arrayOfValues.forEach((element, indexOfftheArray, theEntireArray) => {
  console.log('Cada elemento do array: ', element);
  console.log("Cada elemento do array: ", indexOfftheArray);
  console.log("Cada elemento do array: ", theEntireArray);
});

// exemplo forEach com Caio Noleto.

let listaDePessoasAprovados = [
    'ana.lacerda@trybe.com',
    'edvaldo.jose@gmail.com',
    'monica.faria@gmail.com',
    'dinaldo.jose@gmail.com'
];

const enviarLista = (email) => {
  console.log(`email para ${email} foi enviado com sucesso!`);
};

listaDePessoasAprovados.forEach((item, posicao, array) => {
  enviarLista(item);
  console.log(`Sua posição e a de: ${posicao}!`);
  console.log(`A quantidade de pessoas no processo seletivo e: ${array.length}!`);
});

// usando o forEach para fazer uma tabuada de 2.

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multiploFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};
 numbers.forEach(multiploFor2);

 // utilizando dois parametros no forEach.

 const names = ['Bianca', 'Fernanda', 'Mônica', 'Fernando'];

 const converttoUpperCase = (name, index) => {
   names[index] = name.toUpperCase();
 };

 names.forEach(converttoUpperCase);
 console.log(names);

// retorne a segunda posição do array.

const numbers = [19,21,30,3,45,22,15];

const verifyEven = (number) => number % 2 == 0;

const isEven = numbers.find(verifyEven);

console.log(verifyEven(9));
console.log(verifyEven(14));

// outra forma de realizar sem a necessiade de criar uma nova função.

const isEven2 = numbers.find((number) => number % 2 == 0);

console.log(isEven2);

// utilize o find() para retornar o primeiro num do array que é divisível por 3 e 5.

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}

console.log(findDivisibleBy3And5());

// utilize o find() para encontar o primeiro nome com cinco letras.

const names = ['joão', 'irene', 'fernado', 'maria'];

findNamewinthFiveLetters = () => {
  return names.find((name) => name.length === 5);
};

console.log(findNamewinthFiveLetters());

// utilize o find() para encontar a música com id igual a 310331685.

const musicas = [
  { id: '31031685', title: 'Patita in cal voll dwv 997'},
  { id: '31031686', title: 'Tocata and fugue, bwn 565'},
  { id: '31031687', title: 'Chaconne, Partita no. 2 bwv 1004'},
];

function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
};
console.log(findMusic('31031685'));

// escreva uma função que dado o array de nomes e um nome retorne true se ele estiver contido caso contrario retorne false, use o some().

const names = ['mateus', 'josé', 'claudio', 'bruna'];

const hasName = (arr, name) => {
  return arr.some((currentName) => currentName === name);
};
console.log(hasName(names, 'bruna'));

// escreva uma função que dado uma array de pessoas e uma idade minima retorne true se todas tiverem a idade maior ou igual a minima e caso contarrio false, use every();

const people = [
  {name: 'mateus', age: 18},
  {name: 'josé', age: 16},
  {name: 'ana', age: 23},
  {name: 'claudio', age: 20},
  {name: 'bruna', age: 22},
];

const verifyages = (arr, minimuAge) => {
  return arr.every((person) => person.age >= minimuAge);
}; 
console.log(verifyages(people, 18));

// utilize o sort() para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  {name: 'mateus', age: 18},
  {name: 'josé', age: 16},
  {name: 'ana', age: 23},
  {name: 'claudio', age: 20},
  {name: 'bruna', age: 22},
];

people.sort((personB, personA) => personA.age - personB.age);
// people.sort((personB, personA) => personB.age - personA.age);

console.log(people);

// outros exemplos usando o sort() usando nomes.

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);

// outros exemplos usando o sort() usando numeros.

const number = [1,2,3,4,5,6,7,8,9,10];
number.sort();
console.log(number);

// em ordem numerica.

const numberOrdem = [1,2,3,40,25,90,10];
numberOrdem.sort((a, b) => a - b);
console.log(numberOrdem);
[1,2,3,10,25,40,90]

const numberOrdem = [1,2,3,40,25,90,10];
numberOrdem.sort((a, b) => a + b);
console.log(numberOrdem);
[1,2,3,40,25,90,10]




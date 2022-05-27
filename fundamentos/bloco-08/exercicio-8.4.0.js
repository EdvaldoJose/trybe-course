const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

// função que soma todos os valores do array.

const numbers = [32, 15, ,3, 2, -5, 56, 10];
let sumNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
} 
console.log(sumNumbers);

// usando o reduce()

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number);
console.log(sumNumbers);

// usando reduce()

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers);

//

const collection = [1, 2, 3, 4, 5];
const getSum = (acumulator, number) => {
  console.log(acumulator); // 1 3 6 10
  return acumulator + number;
};
const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers);

// sem adicionar parametros

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
     };

  const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 32 47 50 52 47 103 113

// adicionando parametros

const number = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};
const sumNumbers = number.reduce(getSum, 10);
console.log(sumNumbers); // 10 42 57 60 62 57 113 123

// busque o maior valor em uma array usando for
 const numbers = [50, 85, -30, 3, 15];
 let guarda = 0;

 for (let index = 0; index < numbers.length; index++) {
   guarda += numbers[index];
  //  return guarda;
 }
console.log(guarda);

// busque o maior valor em uma array usando reduce()

const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger: number)

const bigger = numbers.reduce(getBigger, 10);
console.log(bigger);

// some todos os numeros pares do array 

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numPar = (num) => num % 2 === 0;
const sumPar = (valor, num) => valor + num;
const sumNum = (array) => array.filter(numPar).reduce(sumPar);

console.log(sumNum(numbers));

// outro exemplo usando ternário

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (correntValues, number) => (
  (number % 2 === 0) ? correntValues + number : correntValues);

const sumNumbers = (array) => array.reduce(sumPair, 10);
console.log(sumNumbers(numbers));


// crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!

const estudantes = require('./aula-8.4.temp.js');

const matEstudant = (conta, materia) => {
  if (conta.nota > materia.nota) return conta;
    return materia;
};

const relatorio = (students) => students.map((student) => ({ 
  name: student.nome, materia: student.materias.reduce(matEstudant).name }));

console.log(relatorio(estudantes));

// exercicio do course

const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome, materia: student.materias.reduce(getBestClass).name}));

console.log(reportBetter(estudantes));

// função soma array

const numbers = [2,3,4,5,6,7,8,9];

const sum = (array) => {
  let accumulador = array[0];

  for (let i = 1; i < array.length; i++) {
    accumulador = accumulador + array[i];
  }
  return accumulador;
};
console.log(sum(numbers));

// 🚀 ===IMPORTANTE=== 🚀 exercicios do course 🚀

//🚀 1 - Dada a matrix transforme em uma array.
const books = require('./aula-8.4.temp.js');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  arrays.reduce((result, number) => result + number);
  return arrays;
}
console.log(flatten(arrays));


//🚀 2 - Crie uma string com os nomes de todas as pessoas autoras.🚀

const books = require('./aula-8.4.temp.js');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// `${acc} ${curr.author.name}`, '')
function reduceNames() {
   return books.reduce((acc, curr) => {
  if (index === books.length - 1) {
    return `${acc} ${curr.author.name}`
    return `${acc} ${curr.author.name}.`
  }
});
console.log(reduceNames(books));

// 🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const { books } = require('./aula-8.4.temp');

const expectedResult = 43;

function averageAge() {
  const idades = books.map((obj) => obj.releaseYear - obj.author.birthYear).reduce((acc, idade) => acc + idade) / books.length; 
    // return idades;
  console.log(idades);
};
  averageAge();


// 🚀 4 - Encontre o livro com o maior nome.

const { books } = require('./aula-8.4.temp');
// console.log(books);
function longesNamedBook() {
  
  return books.reduce((acc, currValue) => {
    if (acc.name.length > currValue.name.length) {
      return acc;
    } 
    return currValue;
      
    
  }).name;
  //  ? acc.name : currValue.name);
}
  //   if (currValue.name.length > acc.name.length) {
  //     maiorNome = currValue;
  //     // return maior;
  //     // console.log(maior);  
  //   } else {
  //     maiorNome = acc;
  //   }
  //   return acc;
    
  // });

  console.log(longesNamedBook());
  


  // 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

  const { books } = require('./aula-8.4.temp');

  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
  }






  // 🚀 6.**- Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

  const { books } = require('./aula-8.4.temp');

  const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
  const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
  
  function studentAverage() {
    // escreva seu código aqui
  }


  
  const expected = [
    { name: 'Pedro Henrique', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
  ];


  // exercicios da academia de lógica.
  // Dado um arquivo com dados de regiões, estados e cidades crie uma função (mapCities) que retorna um objeto no qual a chave são as siglas das regiões (N, NE, CW, SE e S) e os valores são arrays compostas por objetos com o nome da cidades e o nome dos estados.

  const { regions } = require('./aula-8.4.temp')

const mapCities = () => {
  const objeto = cities.reduce((acc, currentValue) => {
    if (!acc[currentValue.region]) {
      acc[currentValue.region] = [];
    }
    acc[teste] = [];

    const estado = states.fin((estado) => estado.short === currentValue.states);

    const resultado = {
      city: currentValue.name, 
      state: estado.name,
    }

    acc[currentValue.region].push(resultado);
  
    return acc;
    // console.log(objeto)
  }, {});
}
  console.log(mapCities());

console.log(objeto);



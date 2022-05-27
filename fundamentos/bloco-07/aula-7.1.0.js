function userInfo() {
  const userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
 }
console.log(userEmail);

userInfo();

// Usando var, let e const

function minhaIdade() {
  for (var idade = 78; idade <= 100; idade += 1){
  console.log(idade);
  }
  console.log('Fora do for', idade);

  if (true) {
    var nome = 'Trybe';
  }
  console.log('Fora do if', nome);
}

minhaIdade();

// Forma de manipular uma const mexendo na propiedade do objeto.
const estudante = {
  nome: 'Maria',
  idade: 23,
}
estudante.idade = 24;
console.log(estudante);

Exemplos;

const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!');

const myName = 'Isabella';
console.log(`Welcome ${myName}!`);

Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

arrow function
const printName = function(){
  const myName = 'Edvaldo';
  return myName;
};
console.log(printName());

function soma(num1, num2) {
  return num1 + num2;
}
console.log(soma(2,24));

const soma = (num1, num2) => {
  return num1 + num2;
}
console.log(soma(2,24));

const soma = (num1, num2) => num1 + num2;

console.log(soma(2,24));

function contaPalavra(frase) {
  return frase.split('').length;
}
console.log(contaPalavra('Fala tribo, beleza'));

const contaPalavra = (frase) => frase.split('').length;

console.log('Fala tribo, beleza');

function objetoPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade
  }
}
console.log(objetoPessoa('Joaquim', 25));

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});

console.log(objetoPessoa('Joaquim', 25));

const areaDoTriangura = (base, altura) => (base * altura)/2;

console.log(areaDoTriangulo(2, 4));

const botao = document.getElementById('botao');
botao.addEventListener('click', () => {}) // completar o código

const printName = () => {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

const printName = () => 'Lucas';
console.log(printName());

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

// Operador ternário
`expressão verdadeira ou falsa` ? `retorno se verdadeiro` : `retorno falso`;

const trueExpression = (1+1 === 2) ? `isso é verdadeiro` : `isso falso`;
console.log(trueExpression);

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
  if (age >= 18) {
    return `Você tem idade para dirigir!`;
  } else {
    return `Você ainda não tem idade para dirigir...`;
  }
};

const checkTernary = (age) => (
  age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`;
);

// ------------------------

// Situação em que usar o operador ternário não faz muito sentido:
const checkIfElse = (fruit) => {
  if (fruit === `maçã`) {
    return `Essa fruta é vermelha`;
  } else if (fruit === `banana`) {
    return `Esta fruta é amarela`;
  } else {
    return `Não sei a cor`;
  }
};

const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha`
  : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
// pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
// operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
// no futuro!

const heckIfElse = (age) => {
  if (age => 18) {
  return `Você tem idade para dirigir`;
} else {
  return `Você ainda não idade para dirigir...`;
}
};

const checkTernary = (age) => ( 
  age => 18 ? `Você tem idade para dirigir` : `Você não tem idade para dirigir...`
);

const chechIfElse = (fruits) => {
  if (fruits === `maçã`) {
    return `Essa fruit é vermelha`;
  } else if(fruit === `banana`) {
    return `Essa fruta é amarela`;
  } else {
    return `não sei a cor`;
  }
};
 
const checkTernary = (fruits === `maçã`) ? `Essa fruit é vermelha` : ((fruit === `banana`) ? `Está fruta é amarela` : `Não sei a cor`);

const nome = 'Trybe';
const lema = 'VQV';

console.log(`${nome}, melhor escola de tecnologia! ${lema}!`);

function soma(a, b) {
  return a + b;
}
const soma = (a, b) => a + b;

console.log(soma(2, 3));

const heckIfElse = (age) => {
  if (age => 18) {
  return `Você tem idade para dirigir`;
} else {
  return `Você ainda não idade para dirigir...`;
}
};

const checkTernary = (age) => ( 
  age => 18 ? `Você tem idade para dirigir` : `Você não tem idade para dirigir...`
);

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}
testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvents = () => {
  oddsAndEvents[0] = 2;
  oddsAndEvents[1] = 3;
  oddsAndEvents[2] = 4;
  oddsAndEvents[3] = 7;
  oddsAndEvents[4] = 10;
  oddsAndEvents[5] = 13;

  return oddsAndEvens;

}

const sortedArray = sortOddsAndEvents();

console.log(`Os números ${sortedArray} Se encontram de forma crescente!`); // será necessário alterar essa linha 😉


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

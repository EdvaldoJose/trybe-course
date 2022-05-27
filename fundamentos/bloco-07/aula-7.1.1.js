// função normal

function aeroDoTriangulo(base, altura) {
  return (base * altura) / 2; 
}

// arrrow function

const aeroDoTriangulo = (base, altura) => (base * altura) / 2;
  console.log(aeroDoTriangulo(2, 6));

const botao = document.createElementById('botaozinho');
botao.addEventListener('click', () => {
  // escreve a função aqui
});

// hoisting

function func(variavel) {
  if (variavel) {
    var x = 48;
  }
  return x;
}
  console.log(func(true));
  console.log(func(false));

  // template literals

  // const mensagem = 'essa é a minha \n' + '\'primeira\' mensagem!';

  const mensagem = `Essa é inha 'primeira' mensagem!`;
    console.log(mensagem);

    const base = 3;
    const altura = 4;

  console.log(`Altura do triângulo da base ${base} e altura ${altura} é ${(base * altura)/2}`);  
  
  const dinheiro = 345;
    console.log(`O meu saldo na conta é ${dinheiro},00`);

    // explos de function e arrow fanction

const soma = function (num1, num2) {
  return num1 + num2;
}
console.log(soma(2, 2));

const soma = (num1, num2) => num1 + num2;
  // return num1 + num2;
console.log(soma(22, 22));

const contaPalavra = function(frase) {
  return frase.split(' ').length;
}
console.log(contaPalavra('fala tribo, beleza'));

const contaPalavra = (frase) => {
  return frase.split(' ').length;
}
console.log(contaPalavra('fala tribo, beleza'));

const contaPalavra = (frase) => frase.split(' ').length;

console.log(contaPalavra('fala tribo, beleza'));

const tipoObjeto = function (nome, idade) {
  return {
    nome: nome,
    idade: idade,
  }
}
console.log(tipoObjeto('edvaldo', 49));

const tipoObjeto = (nome, idade, sexo) => {
  return {
    nome: nome,
    idade: idade,
    sexo: sexo,
  }
}
console.log(tipoObjeto('edvaldo,',48 , 'M'));

const tipoObjeto = (nome, idade, sexo) => ({nome: nome, idade: idade, sexo: sexo});

console.log(tipoObjeto('edvaldo,', 49, 'M'));

// ---------------function-----------------------------------
function sum(number) {
  let summation = 0;
    for (let index = 1; index <= number; index += 1) {
      summation += index;
  }
    return summation;
}
  console.log(sum(3));

// ---------function arrow------------------------------

  const sum = (number) => {
    let summation = 0;
      for (let index = 0; index <= number; index += 1) {
        summation += index;
  }
    return summation;
};
  console.log(sum(3));
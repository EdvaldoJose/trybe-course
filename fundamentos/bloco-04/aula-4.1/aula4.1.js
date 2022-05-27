//console.log('O JS é supimpa!');
//Tipos primitivos
let cohort = 22; //number
let company = 'Trybe'; //string

console.log(cohort);
console.log(company);
console.log(company, cohort);
console.log('Empresa: ', company, cohort);

let myBox = null;
let numero = 0;
console.log(myBox);
console.log(numero);
console.log(myBox == numero);

// = > Atribuição
// == > comparação de valores
// === > comparação estrita (tipo e valor)

let number1 = 23;
let number2 = 45;

if (number1 < number2) {
    console.log('number1 é menor que number2');
} else if (number1 > number2) {
    console.log('number1 é maior que number2');
} else {
    console.log('number1 é igual a number2');
}

let idade = 17;

if (idade > 18) {
    console.log('pode dirigir');
} else {
    console.log('não pode dirigir');
}

let mes = 3;

switch (mes) {
    case 1:
        console.log('31 dias');
        break;
}

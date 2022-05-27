console.log('O JS é supimpa!');
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

if(number1 < number2) {
   console.log('number1 é menor que number2');
} else if(number1 > number2) {
    console.log('number1 é maior que number2');
} else {
    console.log('number1 é igual a number2');
}

if(idade > 18) {
    console.log('pode dirigir');
} else {
    console.log('não pode dirigir');
}

let mes = 3;

switch(mes) {
    case 1:
    console.log('31 dias');
    break;
}

let trybe = 20.40;

if (trybe >= 14 && trybe < 14.40) {
    console.log('Esquenta');
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log('Aula ao vivo');
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log('Fechamento');
}
else {
    console.log('Fora do momento sincrono');
}
*/

const nota = 50;

if (nota == 80) {
    console.log('Parabéns, você foi aprovado!')
}
else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera')
}
else if (nota < 60) {
    console.log('Você foi reprovado, "Estude mais!"')
}

const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida == 'cafezinho' && comida == 'pão na chapa') {
    console.log('Muito obrigado pela refeição');
}
else {
    console.log('Acho que houve um engano com o meu pedido');
}

const conditionOne = true;
const conditionTwo = false;

    console.log(conditionOne && conditionTwo);

// exercícios Op/Log - tirar essa dúvida com Nat?  
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijão;

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


const currentHour;
let message = "";

if (horario >= 22) {
    message = 'Não deveriamos comer nada, é hora de dormir';
}
else if (horario >= 15 && horario < 22) {
    message = 'Rango da noite, vamos janta :D';
}
else if (horario >= 14 && horario < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
}
else if (horario == 11 && horario == 14) {
    message = 'Hora do almoço';
}
else if (horario == 4 && horario == 11) {
    message = 'Hmmm cheiro de café recém passado';
}
*/
const bebidaPrincipal = 'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
    console.log('Obrigado por me atender :D');
} else {
    console.log('Ei, eu não pedi isso');
}

let weekDay = 'sabado';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na trybe >;D.');
} else {
    console.log('FINALMENTE, DESCANSO MERECIDO UWU');
}

console.log((2 + 2) === 4);
console.log(!(2 +2) === 4);
    
const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

let trafficLight = "verde";

switch (trafficLight) {
    case "vermelho":
        console.log("pare");
        break;

    case "amarelo":
        console.log("atenção");
        break;

    case "verde":
        console.log("siga");
        break;

    default:
        console.log("valor não encontrado");
}

let resultado = "aprovado";

switch (resultado) {
    case "aprovado":
        console.log("Você passou no processo seletiva da trybe");
    break;
    case "lista":
        console.log("Você entrou para nossa lista de cadastro reserva");
    break;
    case "reprovado":
        console.log("Você foi reprovado no processo seletivo da trybe");
    break;
default:
    console.log("não se aplica")
}
// ex-1 javaScript - primeiros passos.
const a = 5;
const b = 7;
console.log(a + b);

const a = 2;
const b = 1;
console.log(a - b);

const a = 4;
const b = 3;
console.log(a * b);

const a = 15;
const b = 3;
console.log(a / b);

const a = 25;
const b = 3;
console.log(a % b);

const a = 50;
const b = 3;

// ex-2
const primeiroNumber = 20;
const segundoNumber = 30;

if (primeiroNumber > segundoNumber) {
    console.log("primeiroNumber");    
} else {
    console.log("segundoNumber");
}

// ex-3
const primeiroNumber = 25;
const segundoNumber = 30;
const terceiroNumber = 40;

if (primeiroNumber > segundoNumber && primeiroNumber > terceiroNumber) {
    console.log("primeiroNumber");
}
else if (segundoNumber > primeiroNumber && segundoNumber > terceiroNumber) {
    console.log("segundoNumber");
} else {
    console.log("terceiroNumber");
}

// ex-4
const valor = -2;

if (valor + valor) {
    console.log("positivo");
}
else if (valor - valor) {
    console.log("negativo");
} 
else if (valor % valor) {
    console.log("zero")
}






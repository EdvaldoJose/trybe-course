// Revisão dee funções e objeto

function resultado(boolean) {
    
    let num1 = 30;
    let num2 = 20;
    let soma = num1 + num2;
    //let invet = -1
    //let negat = -30

    if(soma < num1 || num2) {
        return false;
    } else if (soma > num1 || num2) {
        return true;
    } else {
        return soma;
    }
}
console.log(resultado(30, 20));

function testeNumber(numero) {
    let elementoMaisDois = [];
    for (let index = 0; index < numero.length; index++) {
        elementoMaisDois.push(numero[index] * 2);
        
    }
    console.log(elementoMaisDois);
}
testeNumber([1,2,3,4,5,6,7,8,9,10]);

'unction numImpar(arr) {

    let sumOdds = 0;

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 !== 0) {
            sumOdds += arr[index];
        }
    }
    return sumOdds;
}
    console.log(numImpar([1,2,3,4,5,6,7]));


const arr = [1,2,3,4,5,6,7,8,9,10];
//     //console.table(arr);
for (let index = 0; index < arr.length; index += 1) {
    //console.log(arr[index]);
}
for (let index = arr.length - 1; index >= 0; index -= 1) {
    //console.log(arr[index]);
}

let num = [1,2,3,4,5];
//for (let index in arr) {
    //console.log(arr[index]);
//}
for (let value of num) {
    console.log(value);
}

const arrString = ['Daniel', 'Carlos', 'Claudia'];
    for (let value2 of arrString) {
        if(value2 === 'Daniel') {
            console.log(value2.length);
            break;
        }
        console.log('roda novamente');
    }

const numbers = [];
    let count = 1;
        while(numbers.length < 50) {
            numbers.push(count);
            count++;
        }
    console.log(numbers);

/* ex - Incluír no arrays - escreva um algoritimo que irá receber dois array  a e b, retorne um novo valor array com os elementos que see reeepetm em a e b, se nãoo houver elementoo repetidos retorne um array vazuio.entradas: a = [1,2,3], b = [4,2,4] - Saída: [2] - utilize dois for.*/
function includesArrays(a, b) {
    let result = [];
    for (let valueA of a) {
        for (let valueB of b) {
            if (valueA === valueB) {
                result.push(valueA);
            }
        }
    }
    return result;
}
console.log(includesArrays(a =[1,2,3], b = [4,2,4]));

/* exc - eve = identificador de quem critou PAR sendo: 1 para Lucio e 0 para anna.*/
function odOreEven(lucioFingers, anaFingers, even) {
    let result = (lucioFingers + anaFingers) % 2;
        if (result === 0 && even === 1) {
            return 'Lucio venceu';
        }
        if (result !== 0 && even === 1) {
            return 'Lucio venceu';
        }
        else {
            return 'Ana venceu';
        }
}
    console.log(odOreEven(1,3,2));

function sumNumberOddarray(arr) {
    let sumPrimes = 0;

    for (let index = 0; index < arr.length; index += 1) {
        if (arr[index] % 2 !== 0) {
            sumPrimes = sumPrimes + arr[index];
        }
    }
    return sumPrimes;
}
    console.log(sumNumberOddarray([1,2,3,4,5,6,7,8]));

// Objetos

const aluno = {
    nome: 'edvaldo',
    endereeco: 'eddson saldanha',
    celular: '71985572721',
    idade: '49'
}
aluno.nome = 'edvaldo josé' // altera o nome
aluno.sexo = {} // cria uma novo objeeto

console.log(aluno);

let obj = {
    name: 'Edvaldo',
}

console.log(obj);

let obj2 = {
    nome: 'edvaldojose',
    log: () => console.log('lá mundo!')
};
obj2.log();
console.log(obj2);















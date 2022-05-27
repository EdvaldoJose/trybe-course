const { grep } = require("cypress/types/jquery");

let age = 49;
const nome = 'edvaldo';
age = 48;
console.log(nome, '-', age);

let movie = 'Avengers' // string 
let score = 10.90 //number
let inValid = true //false // boolean
let name; //undefined
let color; null //para ser redefinida

//operadores lógigicos if/else

let variavel = minha condicao;

if (condicao) {
    //execute esse código
}
else if (outra condicao) {
    //execute esse código
}
else {
    //execute esse código
}

//switch - case

let trafficLight = 'vermelho';

switch (trafficLight) {
    case 'vermelho':
        console.log('pare');
        break;
    
    case 'amarelo':
        console.log('atenção')
        break;
        
    case 'verde':
        console.log('siga')
        break;

    default:
        console.log('nenhum dos valores definidos');
}

//array - for

let variavel = 'strings' //simples
let variavel = [array]; //compostas

let pizzas = ['4 queijo', 'frango', 'margarita', 'palmito'];

pizzas.push('peito peru', 'calabresa', 'lombinho', 'chocolate');

//console.log(pizzas.sort());

for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]);
}

//tabuada de 9

let number = 9;

for (let contador = 0; contador <= number; contador += 1){
    console.log('**');
    console.log(number * [contador]);
}

//imprimir uma lista de nomes para os aprovados com uma mensagem de boas vindas!

let listaDeNomes = ['edvaldo', 'ana', 'edleuson', 'wilian', 'joão'];

for (let index = 0; index < listaDeNomes.length; index += 1) {
    // let mensagem = 'Boas vindas!';
    // console.log(listaDeNomes[index] + mensagem);
    let mensagem = 'Boas vinas, ' + listaDeNomes[index] + '!';
    console.log(mensagem);
}

//for/of

let numeros = [1,2,3,4,5,6,7];
    for (let num of numeros) {
        console.log(num);
    }

let nome = 'edvaldo';
    for (let eu of nome) {
        console.log(eu);
    }

let valor = [1,2,3,4,5,5];
    for (let soma of valor) {
        soma += 1;
        console.log(soma);
    }    

//objeto

let singer = {
    name: 'edvaldo',
    lastName: 'santos',
    nickName: 'vua',
    age: 49,
    bestAlbum: ['travessia', 'minas'],
    bornInfo: {
        city: 'Salvador',
        state: 'bahia'
    }
};

console.log('o cantor' + singer.name + '' + singer.lastName + 'possui' + singer.age + 'anos.');

console.log('o cantor' + singer['name'] + '' + singer['lastName'] + 'possui' + singer['age'] + 'anos.');

singer['fullName'] = singer.name + '' + singer.lastName;

console.table(singer);

//pedido pizza'

let pizzas = {
    sabor: 'palmito',
    preco: 39.99,
    bordaCatupiry: true,
};

    for (let key in pizzas) {
        //console.log(pizzas[key]);
        console.log(pizzas.preco);
    }

let pizzasDoce = ['chocolate','banaba','morango'];

for (let key in pizzasDoce) {
    // console.log(key);
    // console.log(pizzasDoce[key]);
    console.log(key, pizzasDoce[key]);
}
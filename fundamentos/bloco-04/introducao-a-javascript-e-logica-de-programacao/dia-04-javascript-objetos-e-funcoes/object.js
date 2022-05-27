// Exemplos

let name = 'Milton';
let lastName = 'Nascimento';
let nickName = 'Bituca';
let age = 77;
let bestAlbuns = ['Travessia', 'Clube da esquina', 'Minas'];

// Objetos

let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    mickname: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
};

console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos');

singer['fullName'] = singer.name + ' ' + singer.lastName;

console.table(singer);

console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state);

//
let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado'
    
}
console.log(diasDaSemana['3']);

let usuario = {
    id: 99,
    email: 'edvaldojose003@gmail.com',
    infoPessoal: {
        nome: 'Jake',
        sobrenome: 'Peralta',
        endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
        }
    }
}
console.log(usuario['id']);
console.log(usuario.email);
console.log(usuario.infoPessoal.endereco.rua);
console.log(usuario['infoPessoal']['endereco']['cidade']);

//delete(usuario.email) apaga uma propiedade ou um objeto.

// for / in - Pedidos pizzas.

let pizzas = {
    sabor: 'Palmito',
    preco: '39.90',
    bordaCatupiry: 'true'
};

for (let key in pizzas) {
    //console.log(pizzas);
    
    // for (let key of pizzas) { // o for of só pode ser usado em array
        //console.log(pizzas);
        //console.log(key);

    console.log(key, pizzas[key]);
    //console.log(pizzas.sabor);
    //console.log(pizzas['bordaCatupiry']);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces ) {
    //console.log(pizzasDoces);
    //console.log(key, pizzasDoces[key]);
    console.log(key);
}    

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

let food = ['hambruguer', 'bife', 'acarajé'];

for (let position in food) {
    console.log(position);
    
}

// for/of

for (let value of food) {
    console.log(value);
}

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
}

for (let frase in names) { // dúvida alterando para of ele só funciona com array ou colocando a propiedade entre [frase]
    console.log('Olá ' + frase, names[frase]);
    // console.log('Olá ' + frase, names[frase]);

}

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal do pato donald dos quadrinhos',
    recorrente: 'Sim'
};
//console.log('Boas vindas, ' + info.personagem)
//console.log(info.recorrente);

for (let objeto in info) {
    //console.log(objeto, info[objeto]);
    //console.log(objeto)  
    console.log(objeto); 
}


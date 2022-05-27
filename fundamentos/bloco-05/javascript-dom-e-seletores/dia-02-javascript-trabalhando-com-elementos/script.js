//document.write("This is written from JavaScript");
// Criando um elemento com .js para o html.
/*
let container = document.getElementById('frist');
console.log(container);

let newDiv1 = document.createElement('div');
newDiv.className = 'red small circle';

let newDiv2 = document.createElement('div');
newDiv.className = 'red small square';

let newDiv3 = document.createElement('div');
newDiv.className = 'green small circle';

console.log('newDiv');

function createElement(classes) {
    let newDiv = document.createElement('div');
    newDiv.className = classes;
    return newDiv;
}

container.appendChild(createElement('red small circle'));
container.appendChild(createElement('green small circle'));
container.appendChild(createElement('yellow small circle'));

const cores = ['green, red, yellow'];

for (let index = 0; index < 10; index += 1) {
    const umaDiv = createDivElement('green, red , yellow');
    container.appendChild(umaDiv);
}
// ou outro for 

for (let index = 0; index < 30; index += 1) {
    const posicao = math.foor(math.random() * cores.length);
    const cor = cores[posicao];
    const umaDiv = createDivElement(cor = ' small circle ');
    container.appendChild(umaDiv);
}
// Tarefa para brincar com o for acima fazer;
// 1- colocar as formas aleatorias
// 2- colocar tamanhos aleatosios
// Funções vistas hoje, revisar
/* 
Funções vistas na aula de hoje;
1- createElement
2- appendchild
3- removeChild
4- parentNode
5- childNodes
6- children
7- firstChild
8- fistElementChild
9- lastChild
10-nextSibling
11-nextElementSibling
12-previousSibling
13-previousElementSibling
*/
// console.log(document.getElementById('start').nextSibling) // nó
// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>



let ingredientsItems = [
    '500g de feijão carioquinha cozido',
    '500g de feijão carioca cozido',
    '200g de toucinho',
    '1 concha de óleo',
    '1 cebola média picada',
    '4 dentes de alho',
    '5 ovos',
    '1 colher de sopa de sal com alho',
    'cheiro verde a gosto',
    '200g de farinha de mandioca'
];

let ingredientList = document.querySelector('.ingredients-list');

for (let index = 0; index < ingredientsItems.length; index += 1) {
    let ingredient = ingredientsItems[index];

    let ingredientListItem = document.createElement('li');
    ingredientListItem.innerText = ingredient;
    ingredientListItem.className = 'ingredients-list-item';
    console.log(ingredientListItem);

    ingredientList.appendChild(ingredientListItem);
}

let ingredientListItems = document.querySelectorAll('.ingredients-list-item');
// console.log(ingredientListItems);

for (let index = 0; index < ingredientListItems.length; index += 1) {
    let element = ingredientListItems[index];

    if (element.innerText.includes('carioquinha')) {
        ingredientList.removeChild(element);
    }
}


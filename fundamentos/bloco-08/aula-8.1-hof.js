function oiVoceDigaAlgo(quem, oque) {
  console.log(`${quem} diz: ${oque}`);
}
oiVoceDigaAlgo('Inacio', 'eai galera');
oiVoceDigaAlgo('Bispo', 'oi gente');

function gePessoa() {
  return 'Inácio';
}
console.log(gePessoa());

// exemplo de quando usar uma HOF
// retirar pessoas que comecem com a letra 'S'

const pessoas = ['Chaves', 'Chiquinha', 'Kiko', 'Seu Madruga', 'Bruxa do 71', 'Seu Barriga', 'Seu Girafales', 'Pópis', 'Nhonho'];

function filtrarComecandoComS(arrayPessoas) {
  const arrayFiltardos = [];

  for (let pessoa of arrayPessoas) {
    if (pessoa[0] !== 'S') {
      arrayFiltardos.push(pessoa);
    }
  }
  return arrayFiltardos;
}

let pessoasFiltradas = filtrarComecandoComS(pessoas);

console.log(filtrarComecandoComS(pessoas));

// retirar pessoas que comecem com a letra 'S'C'P'

const pessoas = ['Chaves', 'Chiquinha', 'Kiko', 'Seu Madruga', 'Bruxa do 71', 'Seu Barriga', 'Seu Girafales', 'Pópis', 'Nhonho'];

function filtrarComecandoCom(arrayPessoas, letraInicial) {
  const arrayFiltardos = [];

  for (let pessoa of arrayPessoas) {
    if (pessoa[0] !== letraInicial) {
      arrayFiltardos.push(pessoa);
    }
  }
  return arrayFiltardos;
}

let pessoasFiltradas = filtrarComecandoCom(pessoas, 'S');
pessoasFiltradas = filtrarComecandoCom(pessoasFiltradas, 'C')
pessoasFiltradas = filtrarComecandoCom(pessoasFiltradas, 'P')

console.log(filtrarComecandoCom(pessoas, 'S'));
console.log(filtrarComecandoCom(pessoas, 'C'));
console.log(filtrarComecandoCom(pessoas, 'P'));

// retire todos os nomes que tem mais de 5 caracteres 

const pessoas = ['Chaves', 'Chiquinha', 'Kiko', 'Seu Madruga', 'Bruxa do 71', 'Seu Barriga', 'Seu Girafales', 'Pópis', 'Nhonho'];

function filtrarMaiorQue(arrayPessoas, maxLetras) {
  const arrayFiltrado = [];

  for (let pessoa of arrayPessoas) {
    if (pessoa.length <= maxLetras) {
      arrayFiltrado.push(pessoa);
    }
  }
  return arrayFiltrado;
}

// pessoasFiltradas = filtrarMaiorQue(pessoasFiltradas, 5);

console.log(filtrarMaiorQue(pessoas, 5));

// usando as funções HOF

const pessoas = ['Chaves', 'Chiquinha', 'Kiko', 'Seu Madruga', 'Bruxa do 71', 'Seu Barriga', 'Seu Girafales', 'Pópis', 'Nhonho'];

function filtrar(arrayPessoas, filtro) {
  const arrayFiltrado = [];

  for (let pessoa of arrayPessoas) {
    if (filtro(pessoa)) {
      arrayFiltrado.push(pessoa);
    }
  }
  return arrayFiltrado;
}

let pessoasFiltradas = filtrar(pessoas, (pessoa) => pessoa[0] !== 'S');
pessoasFiltradas = filtrar(pessoasFiltradas, (pessoa) => pessoa[0] !== 'C');
pessoasFiltradas = filtrar(pessoasFiltradas, (pessoa) => pessoa[0] !== 'P')
pessoasFiltradas = filtrar(pessoasFiltradas, (pessoa) => pessoa.length <= 5);

console.log(filtrar(pessoas, 'S'));
console.log(filtrar(pessoas, 'C'));
console.log(filtrar(pessoas, 'P'));
console.log(filtrar(pessoas, 5));

console.log('ooi');









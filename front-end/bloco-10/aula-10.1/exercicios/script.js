// com o JSX
const element = <h1>Hello, world!</h1>;

// sem o JSX
const element = React.createElement("h1", null, "Hello, world")

// incorporando expressoões no JSX

const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>;

// chamndo uma função na nossa const element

function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

// incorporar a nossa constante element na função helloWorld, retornar um código JSX e encapsulá-la em uma div

function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = helloWorld("Jorge", "Maravilha");
const container = <div>{element}</div>;

// substituição de class por className em JSX

const nome = 'Jorge Maravilha';
const classe = 'hello-classe';
const element = <h1 className={classe}>Hello, {nome}</h1>;

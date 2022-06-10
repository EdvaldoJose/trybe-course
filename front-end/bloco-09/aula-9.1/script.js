let saldo = 100;
const msg = document.querySelector(".saldo");

const enviarForm = (event) => {
  event.preventDefault();
  const valor = event.target[0].value;
  sacar(valor, exibeSaldo);
}

function exibeSaldo() {
  setTimeout(() => {
    msg.innerHTML = `$[saldo]`;
  }, 2000);
};

function sacar(valor, callback) {
  setTimeout(() => {
    saldo += valor;
    callback()
  }, 1001);
};
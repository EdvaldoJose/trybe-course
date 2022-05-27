// First-Class Function
function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable(3, 7));
//  [Function: sum]

const sum = (number1, number2) => {
  return number1 + number2;
};

console.log(sum(2, 4));

// passar uma função como argumento para outra função
const sayHello = () => {
  return ('hello trybers');
}
const printGreeting = (callback) => {
    console.log(callback());
}
printGreeting(sayHello);

// retorna a função de outra função
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}
const initialSum = sumFixAmount(15);
console.log(initialSum(5));

// Higher Order Functions
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log(registerUser('Registrado com sucesso!'));
};

button.addEventListener('click', registerUser);

// Estruturando uma HOF
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};
repeat(8, console.log);

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

const numberGenerator = () => {
  return Math.random() * 100;
}
console.log(numberGenerator);







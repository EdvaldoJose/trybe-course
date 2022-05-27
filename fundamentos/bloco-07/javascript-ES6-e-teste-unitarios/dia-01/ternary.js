const firstNum = 3;
const secondNum = 2;
let message;

// if (firstNum > secondNum) {
//   message = 'uhuuu!!';
// } else {
//   message = 'oh no!';
// }

message = firstNum > secondNum ? 'uhuu!' : 'oh no!';

// const cor = `rgb(${red}, ${green}, ${blue})`;

console.log(message);

const maior = (a, b, c) => a > b ? a > c ? a : c : b > c ? b : c;

console.log(maior(7, 3, 2));
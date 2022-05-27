const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

// console.log(sum(10, 5));
// console.log(sub(10, 5));
// console.log(mult(10, 5));
// console.log(div(10, 5));

const calculator = (func) => func(10, 5);

console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(mult));
console.log(calculator(div));




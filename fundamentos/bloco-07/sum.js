
// let salarioBase = 1490.00;
// let gratifSalario = 510.00;

// function salario(salarioBase, gratifSalario) {
//   let totalSalario = salarioBase + gratifSalario;
//     for (let total of totalSalario ){
//       totalSalario = total + salario;
//     }
//     // return totalSalario;
//   }
//   console.log(totalSalario());

let number = 5;
function fatNamber(fatorial) {
  for (let index = 0; index < number; index += 1) {
    fatorial = fatorial * number;
  }
    if (number < 0) {
    console.log("digite apenas números positivos");
      fotorial = 1;
    }
    if (number < number -1) {
      return fatoral * number;
    }
  return fatorial;
}
console.log(fatNamber(number));

// soma de todas as idades

let idades = [15, 46, 75, 34, 23];
let total = 0;
function idade() {
  for (let index = 0; index < idades; index += 1) {
    total = total + idades[index];
  }
  console.log(total);
  return total;
}
// idade();


















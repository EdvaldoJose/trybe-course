
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

// let number = 5;
// function fatNamber(fatorial) {
//   for (let index = 0; index < number; index += 1) {
//     fatorial = fatorial * number;
//   }
//     if (number < 0) {
//     console.log("digite apenas números positivos");
//       fotorial = 1;
//     }
//     if (number < number -1) {
//       return fatoral * number;
//     }
//   return fatorial;
// }
// console.log(fatNamber(number));

// // soma de todas as idades

// let idades = [15, 46, 75, 34, 23];
// let total = 0;
// function idade() {
//   for (let index = 0; index < idades; index += 1) {
//     total = total + idades[index];
//   }
//   console.log(total);
//   return total;
// }
// idade();
// console.log(total);


const arrowFunctions = (arr1, arr2) => {
  const arrayNumber = [1, 2, 33, 4, 15, 6, 7,];
    const arrayNames = ['Edvaldo', 'Carlos', 'Antônio', 'Bel', 'Daniel'];

  for (let index = 0; index < arrayNumber.length; index += 1) {
    arr1 += arrayNumber.sort()[index];
      console.log(arrayNumber);

    for (let index2 = 0; index2 < arrayNames.length; index2 += 1) {
        arr2 += arrayNames.sort()[index2];
          console.log(arrayNames);
    }
    return arrayNames;
  }
  return arrayNumber;
};
arrowFunctions();
// console.log(arrowFunctions());








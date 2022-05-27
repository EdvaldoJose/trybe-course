// Você receberá um array de objetos (arrays associativos em PHP) representando dados sobre
// desenvolvedores que se inscreveram para participar do próximo encontro de codificação que
// você está organizando.

// Sua tarefa é retornar:

// true se pelo menos um desenvolvedor Ruby se inscreveu; ou
// false se não houver desenvolvedores Ruby.
// Por exemplo, dado o seguinte array de entrada:

const list1 = [
  {
    firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby',
  },
  {
    firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript',
  },
  {
    firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript',
  },
];
// dentro da holf some()
// function isRubyComing(list) {
//   let result = false;
//     for ( let index = 0; index < list.length; index += 1) {
//       const item = list[index];
//       if (callback(item)) {
//         result = true;
//       }
//     }
//     return result;
// }
// código da Questão

const isRubyComing = (list) => list.some((item) => item.language === 'Ruby');

console.log(isRubyComing(list1));



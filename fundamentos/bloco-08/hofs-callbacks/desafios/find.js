// Você receberá um array de objetos (arrays associativos em PHP) representando dados sobre
// desenvolvedores que se inscreveram para participar do próximo encontro de codificação que você
//  está organizando. A lista é ordenada de acordo com quem se inscreveu primeiro.

// Sua tarefa é retornar uma das seguintes strings:

// < firstName here >, < country here > do primeiro desenvolvedor Python que se inscreveu; ou
// There will be no Python developersse nenhum desenvolvedor Python se inscreveu.

// function getFirstPython(list) {
//   const cb = (dev) => dev.language === 'Python'
//   const devPython = list.find(cb)

//   return devPython ? `${devPython.firstName}, ${devPython.country}` : 'There will be no Python developers'
// }

// function getFirstPython(list) {
//   const devPython = list.find((dev) => dev.language === 'Python');
//   const location = `${devPython.firstName}, ${devPython.country}`;

//   return devPython ? location : 'There will be no Python developers';
// }
const list1 = [
  {
    firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby',
  },
  {
    firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript',
  },
  {
    firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'Python',
  },
];

function getFirstPython(list) {
  const { firstName, country } = list.find(({ language }) => language === 'Python');
  const location = `${firstName} ${country}`;
  // console.log(location);
  return devPython ? location : 'There will be no Python developers'
}

console.log(getFirstPython(list1));
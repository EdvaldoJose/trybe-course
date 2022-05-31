const data = require('../data/zoo_data');
// Q-11 (revisar função)

// function getEmployeesCoverage(funcValue) {
// // digite aqui seu código
// const localEmploye = (employee) => employee.responsibleFor
//   .map((animalID) => data.species.find(({ id }) => animalID === id).location);

//   const specieEmploye = (employee) => employee.responsibleFor
//   .map((animalID) => data.species.find(({ id }) => animalID === id).name);

//   const constKey = (key, employee) => {
//   const { id, firstName, lastName } = employee;
//   console.log(key, employee);

// if (key === id) return id;
// if (key === 'fullName') return `${firstName} ${lastName}`;
// if (key === 'species') return specieEmploye(employee);
// if (key === 'locations') return localEmploye(employee);
// };

const pegaSpecie = (empregado) => {
  // monta a lógica para retornar o nome dos animais que o empregado  é responsável que eu já tenho.
  const animais = empregado.responsibleFor;
  const nomesAnimais = animais.filter((id) => data.species
    .find((elem) => id === elem.id).name);
  // console.log(nomesAnimais);

  return nomesAnimais;
};
const result = () => {
  const constKey2 = [];
  // const constKey3 = [];

  data.employees.forEach((element) => {
    constKey2.push({
      id:  element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: pegaSpecie(element),
      location: element.responsibleFor // montar um arrow func fora para pegar esse element
    });
  });
//   data.species.find((element3) => {
//     constKey3.push({
//       location: element3.location,
//     });
//   });
  console.log(constKey2);
//   return (constKey2, constKey3);
};
// result();

const constObj = (empreg) => {
  // console.log(empreg);
  const obj3 = {
    id: empreg.id,
    fullName: `${empreg.firstName} ${empreg.lastName}`,
    // species:
    // locations:
  // cria uma function fora para identificar o animal em species atravez do id e uma outra function para o locations retornado para o constObj esses valores e essas func vão retornar uma array
  };
  console.log(obj3);
};

function getEmployeesCoverage(obj) {
  if (obj.name !== undefined) {
    const empreg = data.employees
      .find((objEmp) => objEmp.firstName === obj.name || objEmp.lastName === obj.name);
    return constObj(empreg);
  }
  const empregId = data.employees.find((objEmp) => objEmp.id === obj.id);
  return constObj(empregId);
}

getEmployeesCoverage({ name: 'Sharonda' });

module.exports = getEmployeesCoverage;

// =====================================================================================

const data = require('../data/zoo_data');
// // Q-11 (Edvaldo/Ortega)

// // function getEmployeesCoverage(funcValue) {
// // // digite aqui seu código
// // const localEmploye = (employee) => employee.responsibleFor
// //   .map((animalID) => data.species.find(({ id }) => animalID === id).location);

// //   const specieEmploye = (employee) => employee.responsibleFor
// //   .map((animalID) => data.species.find(({ id }) => animalID === id).name);

// //   const constKey = (key, employee) => {
// //   const { id, firstName, lastName } = employee;
// //   console.log(key, employee);

// // if (key === id) return id;
// // if (key === 'fullName') return `${firstName} ${lastName}`;
// // if (key === 'species') return specieEmploye(employee);
// // if (key === 'locations') return localEmploye(employee);
// // };

const pegaSpecie = (empregado) => {
  // monta a lógica para retornar o nome dos animais que o empregado  é responsável que eu já tenho.
  const animais = empregado.responsibleFor;
  const nomesAnimais = animais.filter((id) => data.species
    .find((elem) => id === elem.id).name);
  console.log(nomesAnimais);

  return nomesAnimais;
};
// const result = () => {
//   const constKey2 = [];
//   // const constKey3 = [];

// data.employees.forEach((element) => {
//   constKey2.push({
//     id:  element.id,
//     fullName: `${element.firstName} ${element.lastName}`,
//       species: pegaSpecie(element),
//       location: element.responsibleFor // montar um arrow func fora para pegar esse element
//   });
// });
// //   data.species.find((element3) => {
// //     constKey3.push({
// //       location: element3.location,
// //     });
// //   });
//   console.log(constKey2);
// //   return (constKey2, constKey3);
// };
// // result();

const constObj = (empreg) => {
  console.log(empreg);
  const obj3 = {
    id: empreg.id,
    fullName: `${empreg.firstName} ${empreg.lastName}`,
    species: empreg.species,
  // locations:
  // cria uma function fora para identificar o animal em species atravez do id e uma outra function para o locations retornado para o constObj esses valores e essas func vão retornar uma array
  };
  console.log(obj3);
};
function getEmployeesCoverage(obj) {
  if (obj.name !== undefined) {
    const empreg = data.employees
      .find((objEmp) => objEmp.firstName === obj.name || objEmp.lastName === obj.name);
    return constObj(empreg);
  }

  const empregId = data.employees.find((objEmp) => objEmp.id === obj.id);
  return constObj(empregId);

}
  const responsiId = data.species.find((objEmp2) => objEmp2
    .species === obj.species);
  return constObj(responsiId);
}
// console.log({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });
// console.log({ responsibleFor: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae' });
// getEmployeesCoverage();
getEmployeesCoverage({ name: 'Sharonda' });
getEmployeesCoverage({ name: 'Spry' });
getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });

module.exports = getEmployeesCoverage;

///////////////////////////////////////////////////////////////////////////////////////////////
const data = require('../data/zoo_data');
// // Q-11 (revisar função)
const locationByEmploye = (employe) => employe.responsibleFor.map((animalID) => data.species.find(({ id }) => animalID === id).location);

const speciesByEmploye = (employe) => employe.responsibleFor.map((animalID) => data.species.find(({ id }) => animalID === id).name);

const createValueOfKey = (key, employe) => { const { id, firstName, lastName, } = employe;
if (key === 'id') return id;
if (key === 'fullName') return `${firstName} ${lastName}`;
if (key === 'species') return speciesByEmploye(employe);
if (key === 'locations') return locationByEmploye(employe);
};

const createObjEmploye = (employe) => {
const keysOfObj = ['id', 'fullName', 'species', 'locations'];
return keysOfObj.reduce((obj, key) => ({ ...obj, [key]: createValueOfKey(key, employe) }), {});
};

function getEmployeesCoverage(info) {
const coverageAll = data.employees.map((employe) => createObjEmploye(employe));

if (info === undefined) return coverageAll;

const { name, id: idInfo } = info

const resultSearch = coverageAll.find(({ fullName, id }) => fullName.split(' ').includes(name) || id === idInfo);

try {
if (resultSearch) return resultSearch;
throw new Error('Informações inválidas');
} catch (error) {
throw error.message;
}
}
console.log(getEmployeesCoverage());
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
console.log(getEmployeesCoverage({ name: 'Spry' }));
console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;

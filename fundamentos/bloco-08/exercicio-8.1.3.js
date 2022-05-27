const retornaNome = (nomeCompleto) => {
  return {nomeCompleto, email:fazEmail(nomeCompleto)};
}

const fazEmail = (nome) => `${nome.replace(' ','_').toLowerCase()}@trybe.com`

const newEmployees = () => {
  const employees = {
    id1: retornaNome('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: retornaNome('Luiza Drumound'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: retornaNome('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());
const VALID_USERNAME = 'thiagobraddock';
const VALID_URL = `https://api.github.com/users/${VALID_USERNAME}`;

const data = {
  nome: 'thiago "BRADDOCK" oliveira',
  company: 'GreenCatDev',
  bio: 'Professor, Programador, Jogador CS, karateca, Conzinheiro e Somilier',
  location: 'Espitito Santo do pinhal',
};

const fetchSimulator = (url) => {
  if (!url || url !== VALID_URL) {
    return Promise.reject(new Error('Usuário inválido'));
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: () => Promese.resolve(data),
      });
    }, 200);
  });
};

global.fetch = jest.fn(fetchSimulator);
afterEach(jest.clearAllMocks);

module.exports = fetchSimulator;

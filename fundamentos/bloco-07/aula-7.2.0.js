// Object.keys(Object.keys())
// Object.values(Object.keys())
// Object.entries(Object.entries())
// Object.assign(Object.assign())

const quadrinho = {
  collection: 'Supermen',
  title: 'A morte do super-homem',
};
    console.log(Object.keys(quadrinho1).includes('numPags'));

  quadrinho1.numPags = 200;
  qudrinho1[editora] = 'Abril';

    console.log(quadrinho1.numPags);

  const outraRevista = {editora: 'Panini', ano: 1985};
    Object.assign(quadrinho1, outraRevista);
    console.log(quadrinho1);

  const quadrinho2 = Object.assign({}, quadrinho1);

  const quadrinho2 = {};
    Object.assign(quadrinho2, quadrinho1);

    const coolestTvShow = {
      name: "BoJack Horseman",
      genre: "adult animation",
      author: "Raphael Bob-Waksberg",
      favoriteCharacter: "Princess Carolyn",
      quote: "Princess Carolyn always lands on her feet.",
      seasons: 6,
    };
    
    for (const property in coolestTvShow) {
      console.log(property);
    }
    
    // name
    // genre
    // author
    // favoriteCharacter
    // quote
    // seasons

    const coolestTvShow = {
      name: "BoJack Horseman",
      genre: "adult animation",
      createdBy: "Raphael Bob-Waksberg",
      favoriteCharacter: "Princess Carolyn",
      quote: "Princess Carolyn always lands on her feet.",
      seasons: 6,
    };
    
    // for (const property in coolestTvShow) {
    //   console.log(property);
    // }
    
    console.log(Object.keys(coolestTvShow));
    
    // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

    const student1 = {
      Html: 'Muito Bom',
      Css: 'Bom',
      JavaScript: 'Ótimo',
      SoftSkills: 'Ótimo',
    };
    
    const student2 = {
      Html: 'Bom',
      Css: 'Ótimo',
      JavaScript: 'Ruim',
      SoftSkills: 'Ótimo',
      Git: 'Bom', // chave adicionada
    };
    
    const listSkills = (student) => {
      const arrayOfSkills = Object.keys(student);
      for (const index in arrayOfSkills) {
        console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
      }
    };
    
    console.log('Estudante 1');
    listSkills(student1);
    
    console.log('Estudante 2');
    listSkills(student2);

    // Object.entries

    const coolestTvShow = {
      name: "BoJack Horseman",
      genre: "adult animation",
      createdBy: "Raphael Bob-Waksberg",
      favoriteCharacter: "Princess Carolyn",
      quote: "Princess Carolyn always lands on her feet.",
      seasons: 6,
    };
    
    console.log(Object.entries(coolestTvShow));
    
    // [
    //   [ 'name', 'BoJack Horseman' ],
    //   [ 'genre', 'adult animation' ],
    //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
    //   [ 'favoriteCharacter', 'Princess Carolyn' ],
    //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
    //   [ 'seasons', 6 ]
    // ]

    const países = {
      França: 'Paris',
      Brasil: 'Brasília',
      Espanha: 'Madrid',
      Portugal: 'Lisboa',
    };
    const pairKeyValue = Object.entries(países);
    console.log(pairKeyValue);

    for(index in pairKeyValue) {
      console.log('--------');
      console.log('País:', pairKeyValue[index][0]);
      console.log('Capital:', pairKeyValue[index][1]);
    };

    const person = {
      name: 'Alberto',
      lastName: 'Gomes',
      age: 20,
    };
    
    const info = {
      age: 23,
      job: 'engenheiro',
    };
    
    const family = {
      children: ['Maria', 'João'],
      wife: 'Ana',
    };
    
    Object.assign(person, info, family)
    console.log(person)
    
    /* Output
      { name: 'Alberto',
      lastName: 'Gomes',
      age: 23,
      job: 'engenheiro',
      children: [ 'Maria', 'João' ],
      wife: 'Ana'
      } */


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
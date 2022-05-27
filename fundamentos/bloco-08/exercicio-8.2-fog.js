const books = require('./exercicio-8.2-fog.temp');

// encontre o nome da primeira pessoa autora nascido livro da no ano de 1946.

function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}
console.log(authorBornIn1947());

// retorne o nome do livro de menos nome use o forEach.

function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (!namebook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}
console.log(smallerName());

// escreva o primeiro livro cujo nome possua 26 caracteres.




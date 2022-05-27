// 2 - Retorne o nome do livro de menor nome, usando o forEach

const books = require('../data');

const smallerName = () => {

};

const smaller2 = () => {
  let book = book[0].name;

  books.forEach((element) => {
    if (element.name.length < book.length) {
      book = element.name;
    }
  });
  return book;
};

console.log(smaller2());
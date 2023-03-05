// // // Parte II: 
// Exercício 01: Organizando uma biblioteca:
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// a) Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947:
const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947).author.name;
console.log(authorBornIn1947(books));

// b) Retorne o nome do livro de menor nome:
const smallerName = () => {
  let nameBook; // aqui a variável está vazia - portanto retornaria false; mas se negar que é false ela retorna verdadeiro.
  // escreva aqui o seu código
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
};
console.log(smallerName(books));
// c: Encontre o primeiro livro cujo nome possua 26 caracteres:
const getNamedBook = () => books.find((livro) => livro.name.length === 26);
console.log(getNamedBook(books));

// d: Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário:

const everyoneWasBornOnSecXX = () => {
  return books.every((book) => (
    book.author.birthYear >= 1901 && book.author.birthYear <= 2000
  ));
}
console.log(everyoneWasBornOnSecXX(books));

// e) Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário:

const someBookWasReleaseOnThe80s = (array) => array.some((livro) => livro.releaseYear >= 1980 && livro.releaseYear <= 1989);
console.log(someBookWasReleaseOnThe80s(books));


// f) Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário

const authorUnique = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
};
books: [
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


// Requisito 1
const fantasyOrScienceFiction = () =>
  books.filter(
    (objLIvro) => objLIvro.genre === 'Fantasia' || objLIvro.genre === 'Ficção Científica',
  );
// console.log(fantasyOrScienceFiction());

const oldBooksOrdered = (year) =>
  books.filter((objLivro) => year - objLivro.releaseYear >= 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);
// console.log(oldBooksOrdered(2020));

const booksByAuthorBirthYear = (birthYear) => books
  .filter((element) => element.author.birthYear === birthYear)
  .map((element) => element.name);
// console.log(booksByAuthorBirthYear(1920));

const fantasyOrScienceFictionAuthors = () =>
  books.filter((obj) => obj.genre === 'Fantasia' || obj.genre === 'Ficção Científica')
    .map((element) => element.author.name).sort();

// console.log(fantasyOrScienceFictionAuthors());

const oldBooks = (year) => books.filter((livroAno) => year - livroAno.releaseYear >= 60)
  .map((element) => element.name);

// console.log(oldBooks(2020));

const authorWith3DotsOnName = () =>
  books.find((livro) => (
    livro.author.name.split(' ')
      .filter((palavra) => palavra.endsWith('.')).length === 3 // visitei o gabarito: esse método indica se uma string termina com certos caracteres - retorna true/false.
  )).name;
// console.log(authorWith3DotsOnName());
// Exercício 01:
// Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3). 
// O código deve retornar em sequência 2, 15 e 54.
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];
const funcao = rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // spread operator
});
console.log(funcao);

//Exercício 02:
// Crie uma função sum que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros. 


const sum = (...numbers) => numbers.reduce(((acc, curr) => acc + curr), 0);  //rest parâmetro 
console.log(sum(1, 2, 3));


// Exercício 03:
// Escreva a função personLikes, que recebe como parâmetro os objetos alex ou gunnar. 
// Cada objeto representa uma pessoa, e a função deve retornar todos os gostos daquela pessoa, conforme mostrado abaixo:
// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};
const personLikes = ({ name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`; // object destructuring
console.log(personLikes(alex)); 
console.log(personLikes(gunnar)); 

// Exercício 04:
// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (arrayObj) => 
  arrayObj.filter(( {bornIn,  nationality }) =>
   nationality === 'Australian' && bornIn > 1900 & bornIn <= 2000);

  console.log(filterPeople(people));
  arrayObj.filter(( {bornIn,  nationality }) =>
   nationality === 'Australian' && bornIn > 1900 & bornIn <= 2000);

  console.log(filterPeople(people));



// Exercício 5
// Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida:
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
  // measurementUnit: unidade de medida
];

// escreva shipLength abaixo

// retorno esperado
console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'


// Exercício 6
// O objeto yearSeasons representa as estações do ano. Cada chave do objeto é uma estação, e o valor de cada chave é um array de strings que representa os meses daquela estação. 
// A partir desse objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.

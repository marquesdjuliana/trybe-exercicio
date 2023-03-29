// Exercícios de fixação:

// 01(Array Destructurin): Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const primeNumbers = [17, 23, 37]
const [firstPrime, secondPrime, thirdPrime] = primeNumbers;

const sum = (a, b) => {
  console.log(a + b);
}
console.log(sum(firstPrime, thirdPrime));

//02(Array Destructurin): A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água


// 03(Array Destructurin): O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); 

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); 
// ----------------------------------------------------------------------------------------------------------------------------------

// Exercício de fixação:

// 01(Default destructuring):Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson));
console.log(getNationality(person));

// ----------------------------------------------------------------------------------------------------------------
// Exercício de FIxação:

// 01(property shorthand): altere a função getPosition com property shorthand:
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

// ----------------------------------------------------------------------------------------------------------------
// Exercício de FIxação:

// 01(default parâmetro):
const multiply = (number, value = 1) => number * value;

console.log(multiply(8));

const adult = [
  {
    weight: 100,
    height: 1.85,
  },
  {
    weight: 90,
    height: 1.72,
  },
  {
    weight: 79,
    height: 1.99,
  },
];


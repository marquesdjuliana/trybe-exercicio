//faça uma função que some todos os números pares do array:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numerosPares = (item) => item % 2 === 0;
const somar = (acc, curr) => acc + curr;

const somarPares = (array) => array.filter(numerosPares).reduce(somar);
console.log(somarPares(numbers));
// Usando apenas recude:
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sum = (accumulator, number) => (
//   (number % 2 === 0) ? accumulator + number : accumulator
// );

// const sumNumbers = (array) => array.reduce(sum, 0);

// console.log(sumNumbers(numbers)); 
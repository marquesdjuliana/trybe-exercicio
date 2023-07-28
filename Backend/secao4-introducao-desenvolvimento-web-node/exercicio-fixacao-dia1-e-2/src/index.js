// Parte IB - exemplo módulo externo do Node:
// const readline = require('readline-sync');
// Por ser externo não precisa definir caminho no require
// const a = readline.questionInt('Insira um valor: ');
// const b = readline.questionInt('Insira outro valor: ');

// Parte II - exemplo módulo interno/nativo do Node:
// const OS = require('os'); //por ser nativo não precisa definir caminho no require
// console.log(OS.cpus());

// Parte IA e III - exemplo módulo local:

// const sum = (a, b) => a + b;

// Se quiser importar para outro arquivo, era necessário definir o caminho
// exportar com: module.exports = sum;
// importar com const nome = require('./sum');

// console.log(sum(1, 1));
// console.log(sum(2, 2));
// console.log(sum(3, 3));
// console.log(sum(a, b));

// ASSINCRONICIDADE
// I - o fetch só existe no browser; por isso é necessário usar uma biblioteca fetch-node p/fazer a requisição:
const fetch = require('node-fetch');

// fetch('https://random-data-api.com/api/v2/users')
//  .then((data) => data.json())
//  .then((data) => console.log(data));

// II - o fetch com axios

// const axios = require('axios').default;

// axios.get('https://random-data-api.com/api/v2/users')
//  .then((response) => console.log(response));

// III 
const getUser = async () => {
  try {
    const response = await fetch('https://random-data-api.com/api/v2/users');
    const data = await response.json();
    return data;
} catch (error) {
  console.error(error);
}
};

const main = async () => {
  const result = await Promise.all([
    getUser(),
  ]);
  console.log(result);
};
main();
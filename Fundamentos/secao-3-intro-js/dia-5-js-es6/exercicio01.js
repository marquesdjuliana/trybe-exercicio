//01 - Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.
function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log("Idade dentro do for:", idade);
  }
}
imprimeIdade();

//02 - Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const:
const pessoas = {
  nome: "Henri",
  idade: 20,
  segundaPessoa: {
    nome: "Luna",
    idade: 19,
  },
};
console.log("Nome:", pessoas.nome);
console.log("Idade:", pessoas.idade);
// 03 - Modifique a variável para que não ocorra Erro:
let favoriteFood = "Lasanha";
favoriteFood = "Hamburguer";
console.log(favoriteFood);

// 04 - Modifique as concatenações para template literals:
const name = "Adriana";
const lastName = "Soares";
console.log(`Olá, ${name} ${lastName}!`);

function soma(a, b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado de ${a} + ${b} é ${soma(a, b)}`);

// 05 - Modifique a estrutura das funções a seguir para que elas sejam arrow functions:
const numeroAleatorio = () => Math.random;
console.log(numeroAleatorio());

// 06 - Transforme a função hello em uma arrow function:
const hello = (nome) => `Olá, ${nome}!`;
let nome = "Ivan";
console.log(hello(nome));

// 07 - Transforme a função nomeCompleto em uma arrow function:
const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
let nome = "Ivan";
let sobrenome = "Pires";
console.log(nomeCompleto(nome, sobrenome));

// 08 Altere a expressão if/else utilizando ternary operator:
let speed = 90;
const speedCar = (speed) =>
  speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
console.log(speedCar(speed));

// 01: Analisando forEach:
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index) => {
  console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

// 02: Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!.
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
});

// 03: Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verificaNumDivisivel = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(verificaNumDivisivel);

//04: Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((fivecharacters) => fivecharacters.length === 5);
};

console.log(findNameWithFiveLetters());

//05 : Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const findId = musicas.find((idQueQuero) => idQueQuero.id === '31031685' ); // dica:  é necessário acessar a propriedade a ser verificada.
console.log(findId);

// 06: Usando .some
// Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. Caso contrário, deve ser false.
const listGuests = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nomeNaLIsta) => nomeNaLIsta === name); // dois parametros: array e o nome que quero receber
};

console.log(hasName(listGuests, 'Ana')); // true, pois Ana está na lista de convidados.
console.log(hasName(listGuests, 'Pedro')); // false, pois Pedro não está na lista de convidados.

// 07: Usando .some
// Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;
// Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, idadeMinima) => {
  return arr.every((pessoa) => pessoa.age >= idadeMinima);
};

console.log(verifyAges(people, 18)); // false
console.log(verifyAges(people, 14)); // true
const personagens = [
  {
    classe: 'Guerreiro',
    status: {
      hp: 150,
      atk: 10,
      def: 30,
    },
    habilidades: ['Pular', 'Bloquear', 'Ataque Rapido'],
  },
  {
    classe: 'Arqueiro',
    status: {
      hp: 100,
      atk: 20,
      def: 15,
    },
    habilidades: ['Desviar', 'Precisão', 'Tiro Flamejante'],
  },
  {
    classe: 'Mago',
    status: {
      hp: 85,
      atk: 40,
      def: 10,
    },
    habilidades: ['Teleportar', 'Bola de Fogo', 'Nevasca'],
  },
];

// Encontre o personagem que utiliza a habilidade Teleportar
// Saida Esperada: Mago

const habilidadeTelepor = personagens.find((personagem) => {
  return personagem.habilidades.find((teleportar) => teleportar === 'Teleportar')}).classe;
console.log(habilidadeTelepor);



// Verifique se todas as classes tem 3 habilidades
//Saida Esperada: true

const confereHabilidades = personagens.every((personagem) =>  personagem.habilidades.length === 3);
console.log(confereHabilidades);
// Verifique se pelo menos uma classe tem o hp maior que 150 e retorne um valor booleano.
// Saida Esperada: false

const verifyHp = personagens.some((personagem) =>  personagem.status.hp > 150)
console.log(verifyHp);

// Crie uma função que liste todas as habilidades do Arqueiro
// Saida Esperada: ['Desviar', 'Precisão', 'Tiro Flamejante']
const habilidadesArqueiro = () => {
  const arqueiroHabilidade = personagens.find(
    (classeQueProcuro) => classeQueProcuro.classe === 'Arqueiro',
  );
  return arqueiroHabilidade.habilidades;
};

console.log(habilidadesArqueiro());

// Crie uma função que ordene as classes pelo maior ataque e imprima o nome da classe e o ataque:
// Esperado: ["O ataque do mago é 40", "O ataque do Arqueiro é 20", "O ataque do Guerreiro é 10"]
const ordenarAtaque = (array) => {
  const ataqueOrdenado = array.sort(
    (objA, objB) => objB.status.atk - objA.status.atk, // (b - a) decrescente
  );
  let finalArray = [];
  ataqueOrdenado.forEach((personagem) =>
    finalArray.push(
      `O ataque do ${personagem.classe} é ${personagem.status.atk}`,
    ),
  );
  return finalArray;
};
console.log(ordenarAtaque(personagens));

// Faça uma função que retorne a somatoria de todos os ataques
// Esperado: "O ataque total é 70"
// const totalAtk = () => {
//   let total = 0;
//   personagens.forEach((classe) => (total += classe.status.atk));
//   return `O Ataque total é ${total}`;
// };
// console.log(totalAtk());

const totalAtak = (() => personagens.reduce((acc, curr) => acc + curr.status.atk, 0)
);
console.log(totalAtak());

// Tentativa de reduce:
// const totalAtak = (array) => {
//   const sumAtak = (acc, curr) => acc + curr;
//   return array.status.atk.reduce((sumAtak), 0);
// }
// console.log(totalAtak(personagens));

//Faça uma função que retorne um novo array com todas as habilidades ordenadas
// saida esperada: 
// [
//   'Ataque Rapido',
//   'Bloquear',
//   'Bola de fogo',
//   'Desviar',
//   'Nevasca',
//   'Precisão',
//   'Pular',
//   'Teleportar',
//   'Tiro flamejante'
// ]
const imprimirHabilidades = () => {
  const arrayHabilidades = [];
  personagens.forEach((classes) =>
    classes.habilidades.forEach((poder) => arrayHabilidades.push(poder)),
  );
  arrayHabilidades.sort();
  return arrayHabilidades;
};
console.log(imprimirHabilidades());

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

// const habilidadeTelepor = personagens.find((personagem) => {
//   return personagem.habilidades.find((teleportar) => teleportar === 'Teleportar')}).classe;
// console.log(habilidadeTelepor);



// Verifique se todas as classes tem 3 habilidades
//Saida Esperada: true

// const confereHabilidades = personagens.every((personagem) =>  personagem.habilidades.length === 3);
// console.log(confereHabilidades);
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


// Faça uma função que retorne a somatoria de todos os ataques
// Esperado: "O ataque total é 70"


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
// // // Parte I: 
// Exercício O1: organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada;
//crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

const geraEmailPessoaContratada = (name) => {
  const email = name.toLowerCase().reaplce(' ', '_');
  return { name, email: `${email}@trybe.com`};
}; 

const novosContratados = (callback) => {
  const contratados = {
    id1: callback('Pedro Guerra'), 
    id2: callback('Luiza Drumond'), 
    id3: callback('Carla Paiva'), 
  }
  return contratados;
};
console.log(novosContratados(geraEmailPessoaContratada));

//Exercício 02: Desenvolva uma HOF que retorne o resultado de um sorteio. 
//HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
// O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const confereNumero = (meuNumero, numeroSorteado) => meuNumero === numeroSorteado;

const resultadoLoteria = (meuNumero, callback) => {
  const numeroSorteado = Math.floor((Math.random() * 5) + 1);

  return callback(meuNumero, numeroSorteado) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(resultadoLoteria(2, confereNumero));

// // Exercício 03: Corretor automático de exame:

// const respostasCertas = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const respostasAluno = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const geraPontos = (gabarito, respostas) => {
//   let pontuacaoFinal = 0;
//   gabarito.forEach((item, index) => {
//     if (item === respostas[index]) {
//       pontuacaoFinal += 1;
//     };

//     if ( (item !== respostas[index]) && (respostas[index] !== 'N.A') ) {
//       pontuacaoFinal -= 0.5;
//     }
    
//   });
//   return pontuacaoFinal;
// };

// const totalDePontos = (a, b, geraPontos) => {
//   return geraPontos(a, b);
// };
// console.log(totalDePontos(respostasCertas,respostasAluno, geraPontos ));

const respostaCorretas = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostaAluno = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const comparaRespostas = (gabarito, respostaDada) => {
  if (gabarito === respostaDada) {
    return 1;
  } if (respostaDada === 'N.A') {
    return 0;
  }
  return -0.5;
};

const geraPontucao = (gabarito, respostaDada, acao) => {
  let contador = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    const retornoAcao = acao(gabarito[index], respostaDada[index]);
    contador += retornoAcao;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(geraPontucao(respostaCorretas, respostaAluno, comparaRespostas));

// Primeiro passo: Crie uma função que receba os dois valores dos inputs por parâmetro.

// Segundo passo: Verifique se foi inserido algum valor nos inputs (lance um Error caso um dos campos não tenha sido preenchido).

// Terceiro passo: Verifique se os valores inseridos são numéricos (lance um Error caso um dos valores não seja numérico).

// Quarto passo: Adicione o bloco try/catch na função calculateSum.

// Quinto passo: Execute a função inputIsValid passando os valores recuperados dos inputs.

// Sexto passo: Some os valores armazenados nas variáveis value1 e value2.
// Transforme os valores em números através do método Number;
// Armazene o resultado em uma variável.

const verifyIsNumber = (value1, value2) => {

  if (!value1 || !value2) {
    throw new Error('Preencha os campos para realizar a soma');
  }
if (Number.isNaN(Number(value1)) || Number.isNaN(Number(value2))) {
    throw new Error('Informe dois números para realizar a soma');
  }
}
const sum = () => {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyIsNumber(value1, value2);
    const result = Number(value1) + Number(value2); // Somando value1 + value2
  } catch (error) {
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}

// Sétimo passo: Exiba uma mensagem com o resultado da soma e faça a função displayResult exibir os resultados na tela e limpar os inputs.
// Exiba uma mensagem com o resultado no elemento com o id = result.

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
}

// Oitavo passo: Faça com que a função sum exiba o resultado se o retorno da função calculateSum for true
function sum() {
  const result = calculateSum();
  if (result) displayResult(result);
}
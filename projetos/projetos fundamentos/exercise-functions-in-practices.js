// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.
const ligarDesligar = (statusCarro) => {
  statusCarro =
    statusCarro === "desligado"
      ? statusCarro = "ligado"
      : statusCarro = "desligado";
  console.log(`O motor está ${statusCarro}`);
  return statusCarro;
};

// 2 - Crie a função circleArea, que calcule a área de um círculo.
const circleArea = (radius) => {
  const pi = 3.14;
  let mensagem = "";
  let area = pi * radius ** 2;
  mensagem =
    typeof radius !== "number"
      ? mensagem = "O parâmetro radius deve ser um número"
      : mensagem = `Essa é a área do círculo: ${area}`;
  return mensagem;
};

// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.
const longestWord = (frase) => {
  let arrayFrase = frase.split(" ");
  let maiorPalavra = "";

  for (let index of arrayFrase) {
    if (index.length > maiorPalavra.length) {
      maiorPalavra = index;
    }
  }

  return maiorPalavra;
};

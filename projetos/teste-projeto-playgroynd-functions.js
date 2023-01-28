// 1- Crie uma função usando o operador &&

// 2- Crie uma função que divida uma frase

// 3- Crie uma função que use concatenação de strings

// 4- Crie uma função que calcula a quantidade de pontos em um campeonato de futebol

// 5- Crie uma função que calcula o número de repetições do maior número

// 6- Crie funções para calcular as áreas de um triângulo e de um retângulo


 const calcTriangleArea = (base, height) => base * height / 2;
 const calcRectangArea = (base, height) => base * height;


 const calcAllAreas = (base, height, form) => {
  let message = '';
 
  if (form === 'triângulo') {
    message = `O valor da área do trinâgulo é de: ${calcTriangleArea(base,height)}`;
  } else if ( form === 'retângulo') {
    message = `O valor da área do retângulo é de: ${calcRectangArea(base, height)}`;
  } else {
    message = 'Não foi possível fazer o cálculo, insina uma forma geométrica válida';
  }

  return message;
};




// 7- Crie uma função de Caça ao Rato

// 8- Crie uma função FizzBuzz

// 9- Crie uma função que Codifique e Decodifique

// 10- Crie uma função de Lista de Tecnologias

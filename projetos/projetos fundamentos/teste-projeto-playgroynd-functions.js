// 1- Crie uma função usando o operador &&
const compareTrue = (a, b) => (a && b ? true : false);

// 2- Crie uma função que divida uma frase

const splitSentence = (a) => a.split(" ");

// 3- Crie uma função que use concatenação de strings

const concatName = (a) => `${a[a.length - 1]}, ${a[0]}`;

// 4- Crie uma função que calcula a quantidade de pontos em um campeonato de futebol

const footballPoints = (wins, ties) => {
  let result;
  result = wins * 3 + ties;
  return result;
};
// 5- Crie uma função que calcula o número de repetições do maior número

const highestCount = (a) => {
  let higherNumber = 0;
  for (let index = 0; index < a.length; index += 1) {
    if (a[index] > higherNumber) {
      higherNumber = a[index];
    }
  }
  let quatity = 0;
  for (let index = 0; index < a.length; index += 1) {
    if (a[index] === higherNumber) {
      quatity = quatity + 1;
    }
  }
  return quatity;
};

// 6- Crie funções para calcular as áreas de um triângulo e de um retângulo

const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  let message = "";

  if (form === "triângulo") {
    message = `O valor da área do trinâgulo é de: ${calcTriangleArea(
      base,
      height
    )}`;
  } else if (form === "retângulo") {
    message = `O valor da área do retângulo é de: ${calcRectangArea(
      base,
      height
    )}`;
  } else {
    message =
      "Não foi possível fazer o cálculo, insina uma forma geométrica válida";
  }

  return message;
};

// 7- Crie uma função de Caça ao Rato
const catAndMouse = (mouse, cat1, cat2) => {
  let result = "";

  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    result = "cat1";
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    result = "os gatos trombam e o rato foge";
  } else {
    result = "cat 2";
  }
  return result;
};

// 8- Crie uma função FizzBuzz
const fizzBuzz = (a) => {
  let result = [];
  for (let index = 0; index < a.length; index += 1) {
    if (a[index] % 3 === 0 && a[index] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (a[index] % 3 === 0) {
      result.push("fizz");
    } else if (a[index] % 5 === 0) {
      result.push("buzz");
    } else {
      result.push("bug!");
    }
  }
  return result;
};
console.log(fizzBuzz([2, 5, 20, 15, 2, 17]));

// 9- Crie uma função que Codifique e Decodifique
const encode = (trocaPorNum) => {
  let result = "";

  for (let index = 0; index < trocaPorNum.length; index += 1) {
    if (trocaPorNum[index] === "a") {
      result = result + "1";
    } else if (trocaPorNum[index] === "e") {
      result = result + "2";
    } else if (trocaPorNum[index] === "i") {
      result = result + "3";
    } else if (trocaPorNum[index] === "o") {
      result = result + "4";
    } else if (trocaPorNum[index] === "u") {
      result = result + "5";
    } else {
      result = result + trocaPorNum[index];
    }
  }
  return result;
};

const decode = (trocaPorVog) => {
  let result = "";

  for (let index = 0; index < trocaPorVog.length; index += 1) {
    if (trocaPorVog[index] === "1") {
      result = result + "a";
    } else if (trocaPorVog[index] === "2") {
      result = result + "e";
    } else if (trocaPorVog[index] === "3") {
      result = result + "i";
    } else if (trocaPorVog[index] === "4") {
      result = result + "o";
    } else if (trocaPorVog[index] === "5") {
      result = result + "u";
    } else {
      result = result + trocaPorVog[index];
    }
  }
  return result;
};

// 10- Crie uma função de Lista de Tecnologias

const techList = (arr, pessoa) => {
  let result = [];

  if (arr && pessoa) {
    for (let index = 0; index < arr.length; index += 1) {
      let obj = {
        tech: arr[index],
        name: pessoa,
      };
      result.push(obj);
    }
  }

  return result;
};
console.log(techList('Bebelu'));
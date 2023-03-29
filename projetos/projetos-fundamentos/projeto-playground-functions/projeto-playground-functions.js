// Desafio 1 - Crie a função compareTrue
const compareTrue = (a, b) => a && b;
// Desafio 2 - Crie a função splitSentence
const splitSentence = (a) => a.split(' ');
// Desafio 3 - Crie a função concatName
const concatName = (a) => `${a[a.length - 1]}, ${a[0]}`;
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => {
  let result;
  result = wins * 3 + ties;
  return result;
};
// Desafio 5 - Crie a função highestCount
const highestCount = (numbers) => {
  const higherNumber = Math.max(...numbers);
  let quantity = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === higherNumber) {
      quantity += 1;
    }
  }
  return quantity;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  let message = '';
  switch (form) {
    case 'triângulo':
      message += `O valor da área do triângulo é de: ${calcTriangleArea(
        base,
        height
      )}`;
      break;
    case 'retângulo':
      message = `O valor da área do retângulo é de: ${calcRectangleArea(
        base,
        height
      )}`;
      break;
    default:
      message =
        'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
      break;
  }
  return message;
};
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let result;

  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
  if (distanceCat1 < 0) distanceCat1 *= -1;
  if (distanceCat2 < 0) distanceCat2 *= -1;
  if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
};
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (a) => {
  let result = [];
  for (let index = 0; index < a.length; index += 1) {
    if (a[index] % 3 === 0 && a[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (a[index] % 3 === 0) {
      result.push('fizz');
    } else if (a[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
};
// Desafio 9 - Crie a função encode e a função decode
const encode = (trocaPorNum) => {
  let result = '';

  for (let index = 0; index < trocaPorNum.length; index += 1) {
    if (trocaPorNum[index] === 'a') {
      result = result + '1';
    } else if (trocaPorNum[index] === 'e') {
      result = result + '2';
    } else if (trocaPorNum[index] === 'i') {
      result = result + '3';
    } else if (trocaPorNum[index] === 'o') {
      result = result + '4';
    } else if (trocaPorNum[index] === 'u') {
      result = result + '5';
    } else {
      result = result + trocaPorNum[index];
    }
  }
  return result;
};
const decode = (trocaPorVog) => {
  let result = '';

  for (let index = 0; index < trocaPorVog.length; index += 1) {
    if (trocaPorVog[index] === '1') {
      result = result + 'a';
    } else if (trocaPorVog[index] === '2') {
      result = result + 'e';
    } else if (trocaPorVog[index] === '3') {
      result = result + 'i';
    } else if (trocaPorVog[index] === '4') {
      result = result + 'o';
    } else if (trocaPorVog[index] === '5') {
      result = result + 'u';
    } else {
      result = result + trocaPorVog[index];
    }
  }
  return result;
};
// Desafio 10 - Crie a função techList
const techList = (arr, pessoa) => {
  let result = [];
  arr.sort();
  
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

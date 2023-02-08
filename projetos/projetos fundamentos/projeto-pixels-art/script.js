window.onload = () => {
  // Requisito 04: a) gerando cores aleatórias:
  // Referência: trecho de código de cores aleatórias retirado de Luiz Henrique, @Zigzag "https://www.youtube.com/watch?v=E5qWEY1GVQ0":
  const changeColorBtn = () => {
    const chars = '0123456789ABCDF'
    let color = '#'

    for (let index = 0; index < 6; index += 1) {
      color += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return color;
  };
  //Requisito 04: b) uma função para recuperar o valor da função changeColorBtn e adicinar cor aleatória as divs; 
  //Requisito 05: a) salvando no localStorage:
  document.getElementById('button-random-color').addEventListener('click', () => {
    let colorObj = {
      color2: '',
      color3: '',
      color4: '',
    };
    for (let index = 1; index < 4; index += 1) {
      let color = changeColorBtn();
      let colorDiv = document.getElementById(`color-${index + 1}`)
      colorDiv.style.backgroundColor = color;
      colorObj[`color${index + 1}`] = color;

    }
    localStorage.setItem('colorPalette', JSON.stringify(colorObj));
  });
// Requisiyo 05: b) função caso tenha informações em localStorage ou não:

  const verifyLocalStorage = () => {
    let savedColorPalette = JSON.parse(localStorage.getItem('colorPalette'));
    if (savedColorPalette) {
      let square2 = document.getElementById('color-2');
      let square3 = document.getElementById('color-3');
      let square4 = document.getElementById('color-4');
    
      square2.style.backgroundColor = savedColorPalette['color2'];
      square3.style.backgroundColor = savedColorPalette['color3'];
      square4.style.backgroundColor = savedColorPalette['color4'];
    }
  }

  verifyLocalStorage();

// Requisito 06: uma função para criar boardPixels:

const boardPixels = () => {
  for (let indexDiv = 1; indexDiv <= 5; indexDiv += 1) {
    const elementFather = document.getElementById('pixel-board');
    const elementDiv = document.createElement('div');
    elementDiv.setAttribute("class", "line-pixel");
    elementDiv.setAttribute("id", `${indexDiv}`);
    elementFather.appendChild(elementDiv);
    
    for (let indexChildDiv = 1; indexChildDiv <= 5; indexChildDiv += 1) {
      const elementFatherDiv = document.getElementById(`${indexDiv}`);
      const elementChildDiv = document.createElement('div');
      elementChildDiv.setAttribute("class", "pixel");
      elementFatherDiv.appendChild(elementChildDiv);
    }
  }
}

boardPixels();

// Requisito 08: atribuindo selected color1:
const color1 = document.getElementById('color-1');
color1.className += "selected";


// // Requisito 09: alternando selected

const alternatingSelected = (event) => {
  const getSelect = document.getElementsByClassName('selected')[0];
  getSelect.classList.remove('selected');
  event.target.className += " selected";
  // console.log(event.target)
 } 
 
color1.addEventListener('click', alternatingSelected); 

const color2 = document.getElementById('color-2');
color2.addEventListener('click', alternatingSelected); 

const color3 = document.getElementById('color-3');
color3.addEventListener('click', alternatingSelected); 

const color4 = document.getElementById('color-4');
color4.addEventListener('click', alternatingSelected); 

// Requisito 10: 

for ( let index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
  document.getElementsByClassName('pixel')[index].addEventListener('click',  assignColors = () =>{
    console.log(document.querySelector('.selected').style.backgroundColor);
    document.getElementsByClassName('pixel')[index].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
  })
}
// Requisito 11: retornando cor branca:
document.getElementById("clear-board").addEventListener('click', clean = () =>{
  for ( let index = 0; index < 25; index += 1) {
    const pixelSquare = document.getElementsByClassName('pixel')[index];
    pixelSquare.style.backgroundColor = 'white';
  }
});

// const pixelSalvo = []; outra opção para pensar:

// /* 10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores. */
// const selectedPixels = document.getElementsByClassName('pixel');
// const clickChangeColor = () => {
//   for (let i = 0; i < selectedPixels.length; i += 1) {
//     selectedPixels[i].addEventListener('click', () => {
//       const corParaPreencher = document.getElementsByClassName('color selected')[0];
//       selectedPixels[i].style.backgroundColor = corParaPreencher.style.backgroundColor;
//       pixelSalvo[i] = corParaPreencher.style.backgroundColor;
//       localStorage.setItem('pixelBoard', JSON.stringify(pixelSalvo));
//     });
//   }
// };
// clickChangeColor();

// /* 11 - Crie um botão que retorne a cor do quadro para a cor inicial. */
// const botaoClear = document.getElementById('clear-board');
// botaoClear.addEventListener('click', () => {
//   for (let i = 0; i < selectedPixels.length; i += 1) {
//     selectedPixels[i].style.backgroundColor = 'white';
//     pixelSalvo[i] = 'white';
//     localStorage.setItem('pixelBoard', JSON.stringify(pixelSalvo));
//   }
// });

// /* 12 - Crie uma função para salvar e recuperar o seu desenho atual no localStorage */
// const recoveredColor = JSON.parse(localStorage.getItem('pixelBoard'));
// if (recoveredColor !== null) {
//   for (let i = 0; i < recoveredColor.length; i += 1) {
//     if (recoveredColor[i] !== null) {
//       selectedPixels[i].style.backgroundColor = recoveredColor[i];
//     }
//   }
// }
};
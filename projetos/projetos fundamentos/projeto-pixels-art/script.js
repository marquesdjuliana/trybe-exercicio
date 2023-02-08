window.onload = () => {
  // Requisito 04: a) função gerando cores aleatórias:
  // Referência: trecho de código de cores aleatórias retirado de Luiz Henrique, @Zigzag "https://www.youtube.com/watch?v=E5qWEY1GVQ0":
  const changeColorBtn = () => {
    const chars = '0123456789ABCDF';
    let color = '#';

    for (let index = 0; index < 6; index += 1) {
      color += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return color;
  };
  // Requisito 04: b) função para recuperar o valor da função changeColorBtn e adicinar cor aleatória as divs;
  // Requisito 05: a) e salvando no localStorage:
  document.getElementById('button-random-color').addEventListener('click', () => {
    const colorObj = {
      color2: '',
      color3: '',
      color4: '',
    };
    for (let index = 1; index < 4; index += 1) {
      const color = changeColorBtn();
      const colorDiv = document.getElementById(`color-${index + 1}`);
      colorDiv.style.backgroundColor = color;
      colorObj[`color${index + 1}`] = color;
    }
    localStorage.setItem('colorPalette', JSON.stringify(colorObj));
  });
  // Requisiyo 05: b) função caso tenha informações em localStorage:

  const verifyLocalStorage = () => {
    const savedColorPalette = JSON.parse(localStorage.getItem('colorPalette'));
    if (savedColorPalette) {
      const square2 = document.getElementById('color-2');
      const square3 = document.getElementById('color-3');
      const square4 = document.getElementById('color-4');

      square2.style.backgroundColor = savedColorPalette.color2;
      square3.style.backgroundColor = savedColorPalette.color3;
      square4.style.backgroundColor = savedColorPalette.color4;
    }
  };

  verifyLocalStorage();

  // Requisito 06: função para criar boardPixels:

  const boardPixels = () => {
    for (let indexDiv = 1; indexDiv <= 5; indexDiv += 1) {
      const elementFather = document.getElementById('pixel-board');
      const elementDiv = document.createElement('div');
      elementDiv.setAttribute('class', 'line-pixel');
      elementDiv.setAttribute('id', `${indexDiv}`);
      elementFather.appendChild(elementDiv);

      for (let indexChildDiv = 1; indexChildDiv <= 5; indexChildDiv += 1) {
        const elementFatherDiv = document.getElementById(`${indexDiv}`);
        const elementChildDiv = document.createElement('div');
        elementChildDiv.setAttribute('class', 'pixel');
        elementFatherDiv.appendChild(elementChildDiv);
      }
    }
  };

  boardPixels();

  // Requisito 08: atribuindo selected color1:
  const color1 = document.getElementById('color-1');
  color1.className += 'selected';

  // // Requisito 09: alternando selected entre colors de color-palette:

  const alternatingSelected = (event) => {
    const getSelect = document.getElementsByClassName('selected')[0];
    getSelect.classList.remove('selected');
    event.target.className += ' selected';
  };

  color1.addEventListener('click', alternatingSelected);

  const color2 = document.getElementById('color-2');
  color2.addEventListener('click', alternatingSelected);

  const color3 = document.getElementById('color-3');
  color3.addEventListener('click', alternatingSelected);

  const color4 = document.getElementById('color-4');
  color4.addEventListener('click', alternatingSelected);

  // Requisito 10: atribuindo o for (anteriormente apenas em função window.onload) em uma função - selecionar color clicada e salvar no localStorage:
  const savedPixel = [];
  const pixel = document.getElementsByClassName('pixel');
  const assignColor = () => {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].addEventListener('click', () => {
        const colorSelected = document.getElementsByClassName('color selected')[0];
        pixel[index].style.backgroundColor = colorSelected.style.backgroundColor;
        savedPixel[index] = colorSelected.style.backgroundColor;
        localStorage.setItem('pixelBoard', JSON.stringify(savedPixel));
      });
    }
  };
  assignColor();

  // Requisito 11: um botão que limpa o board - salvando também no localStorage:
  const clean = document.getElementById('clear-board');
  clean.addEventListener('click', () => {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
      savedPixel[index] = 'white';
      localStorage.setItem('pixelBoard', JSON.stringify(savedPixel));
    }
  });
  // Requisito 12:  salvar e recuperar a arte do localStorage:
  const restoredArt = JSON.parse(localStorage.getItem('pixelBoard'));
  if (restoredArt !== null) {
    for (let index = 0; index < restoredArt.length; index += 1) {
      if (restoredArt[index] !== null) {
        pixel[index].style.backgroundColor = restoredArt[index];
      }
    }
  }
};
// Para lembrar: esses requisitos soltos impediram de realizar o requisito 12:
// // Requisito 10: 

// for ( let index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
//   document.getElementsByClassName('pixel')[index].addEventListener('click',  assignColors = () =>{
//     console.log(document.querySelector('.selected').style.backgroundColor);
//     document.getElementsByClassName('pixel')[index].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
//   })
// }
// // Requisito 11: retornando cor branca:
// document.getElementById("clear-board").addEventListener('click', clean = () =>{
//   for ( let index = 0; index < 25; index += 1) {
//     const pixelSquare = document.getElementsByClassName('pixel')[index];
//     pixelSquare.style.backgroundColor = 'white';
//   }
// });

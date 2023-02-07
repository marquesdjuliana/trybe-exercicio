window.onload = () => {
  // Requisito 04: a) gerando cores aleatórias:
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

// Requisito 08: atribuindo selected:
  let color1 = document.getElementById('color-1');
   color1.classList.add('selected');
   
}
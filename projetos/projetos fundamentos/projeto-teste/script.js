window.onload = () => {
  
  
  // Informações para desenvolver esse trecho de código foi retirado do vídeo da aula de Luiz Henrique - canal Zigzag, disponível em: https://www.youtube.com/watch?v=E5qWEY1GVQ0 
  
  // Requisito 04: a) uma função para gerar cores aleatórias/gerar mudança de cor ao clicar:
  const changeColorBtn = () => {
    const chars = '0123456789ABCDF'
    let color = '#'
  
    for (let index = 0; index < 6; index += 1) {
      color += chars.charAt(Math.floor(Math.random() * chars.length))
    }
  
    return color;
  };
//Requisito 04: b) uma função para recuperar o valor da função changeColorBtn e adicinar cor aleatória as divs!
  document.getElementById('button-random-color').addEventListener('click', () => {
    
    for (let index = 1; index < 4; index += 1) {
      let color = changeColorBtn();
      let colorDiv = document.getElementById(`color-${index+1}`)
      colorDiv.style.backgroundColor = color;
 
    }

  });

}
  



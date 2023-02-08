
// SELETORES
  const INPUT_TEXT = document.querySelector("#input-text");
  const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
  const HREF_LINK = document.querySelector("#href");
  //preventDefault : ao clicar no link nada deve acontecer:
  HREF_LINK.addEventListener('click', (event) => {
    event.preventDefault();
  });
  //preventDefault : ao clicar no checkbox nada deve acontecer:
  INPUT_CHECKBOX.addEventListener('click', (event) => {
    event.preventDefault();
  });
  
  INPUT_TEXT.addEventListener('keypress', (event) => {
    const carc = event.key;
    if (carc !== 'a') {
      event.preventDefault();
    }
  });

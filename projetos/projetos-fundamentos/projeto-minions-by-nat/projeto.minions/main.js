// Captura o formulário
const form = document.getElementById('form-inscricao');

// Adiciona um evento de submit ao formulário
form.addEventListener('submit', (event) => {
  // Previne o comportamento padrão do formulário de ser enviado
  event.preventDefault();

  // Captura os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const movie = document.getElementById('movie').value;
  const malvadeza = document.querySelector('input[name="evil-rate"]:checked').value;
  const sobreVoce = document.querySelector('textarea').value;

  // Cria uma lista com os dados do formulário
  const formData = [
    `Nome Completo: ${nome} ${sobrenome}`,
    `E-mail: ${email}`,
    `Filme Favorito: ${movie}`,
    `Nível de Malvadeza: ${malvadeza}`,
    `Descrição: ${sobreVoce}`,
  ];

  // Captura o elemento UL na página
  const dataList = document.getElementById('form-data');

  // Cria elementos LI para cada item na lista de dados e adiciona-os na UL usando forEach
/*   formData.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    dataList.appendChild(li);
  }); */
// Cria elementos LI para cada item na lista de dados e adiciona-os na UL usando for Normal
  for (let i = 0; i < formData.length; i++) {
    const li = document.createElement('li');
    li.textContent = formData[i];
    dataList.appendChild(li);
  }
  

  // Esconde o formulário e mostra o feedback na página
  form.style.display = 'none';
  document.querySelector('.hidden').style.display = 'block';
});
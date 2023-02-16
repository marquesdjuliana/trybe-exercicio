// Requisito 03: função que gera alert:
const alertPopUp = (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const form = document.querySelector('.trybewarts-login');
form.addEventListener('submit', alertPopUp);
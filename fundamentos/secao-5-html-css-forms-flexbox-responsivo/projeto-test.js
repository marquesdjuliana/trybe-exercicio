
 const alertPopUp = () => {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');

  if ( email === 'tryber@test.com' && senha === '123456') {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
 }
const button = document.getElementById('entrar');
button.addEventListener('click', alertPopUp());
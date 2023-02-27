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

/* Requisito 18 */
const checkbox = document.getElementById('agreement');
const button = document.getElementById('submit-btn');

checkbox.addEventListener('change', function check() {
  button.disabled = !this.checked;
});

/* Requisito 20 */
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

textarea.addEventListener('input', () => {
  const remainingChars = 500 - textarea.value.length;
  counter.textContent = remainingChars >= 0 ? remainingChars : 0;
});

textarea.addEventListener('keyup', (evt) => {
  if (evt.key === 'Backspace' || evt.key === 'Delete') {
    const remainingChars = 500 - textarea.value.length;
    counter.textContent = remainingChars >= 0 ? remainingChars : 0;
  }
});

/* Requisito 21 */
// Captura o formulário:
const formulario = document.getElementById('evaluation-form');

// Materia selecionada:
const subject = document.getElementsByClassName('subject');
const subjectChosen = () => {
  const subjectSelected = [];
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      subjectSelected.push(`${subject[index].value}`);
    }
  }
  const result = subjectSelected.join(', ');
  return result;
};

// funçao que obtém os dados do formulário
const getFormData = () => {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const matter = subjectChosen();
  const evaluation = document.querySelector('input[name="rate"]:checked').value;
  const observation = document.querySelector('textarea').value;
  const formData = [
    `Nome: ${name} ${lastName}`,
    `Email: ${email}`,
    `Casa: ${house}`,
    `Família: ${family}`,
    `Matérias: ${matter}`,
    `Avaliação: ${evaluation}`,
    `Observações: ${observation}`,
  ];
  return formData;
};

// Adiciona evento de submit ao formulário:
formulario.addEventListener('submit', (e) => {
  // previne o comportamento padrão do formulário ser enviado; e capitura função getFormData:
  e.preventDefault();
  const formData = getFormData();
  // Captura o elemento UL na página
  const dataList = document.getElementById('form-data');
  // Cria elemento Li para cada item na LIsta de dados e adiciona-os na UL:
  for (let i = 0; i < formData.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = formData[i];
    dataList.appendChild(li);
  }
  // Esconde o formulário e mostra o feedback-usuário na página:
  formulario.style.display = 'none';
  document.querySelector('.hidden').style.display = 'flex';
});

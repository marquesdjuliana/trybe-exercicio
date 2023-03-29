import validator from 'validator';
import './style.css';

const campoMensagem = document.querySelector('#value');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoRetorno = document.querySelector('#answer');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const campos = {
    cpf: validator.isTaxID(campoMensagem.value, 'pt-BR'),
    email: validator.isEmail(campoMensagem.value),
  };

  textoRetorno.innerHTML = `A validação retornou ${campos[seletor.value]}`;
});

function handleSubmit(event) {
  event.preventDefault();
}
window.onload = function () {
  const btnEnviar = document.querySelector('#submit-btn');
  btnEnviar.addEventListener('click', handleSubmit);
  const btfLimpar = document.querySelector('#clear-btn');
  btfLimpar.addEventListener('click', clear);
};
function clear() {
  const elementosInput = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < elementosInput.length; index += 1) {
    const usuarioEnviando = elementosInput[index];
    if (elementosInput[index].type === 'radio' || elementosInput[index].type === 'checkbox') {
      usuarioEnviando.checked = false;
    } else {
      usuarioEnviando.value = '';
    }
  }
  textArea.value = '';
}

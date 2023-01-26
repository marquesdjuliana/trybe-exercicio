// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro:
//Um ângulo será considerado inválido se não tiver um valor positivo.


function triângulo (anguloA, anguloB, anguloC) {
  let somaAngulos = anguloA + anguloB + anguloC;
  let todosAngulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0; 
  
  if (todosAngulosPositivos) {
    return true;
  } else {
    return 'Erro: os ângulos são errados';
  }
  }

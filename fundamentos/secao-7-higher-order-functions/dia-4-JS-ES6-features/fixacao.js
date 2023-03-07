// Faça uma lista com as suas frutas favoritas
const specialFruit = ['mirtilo', 'banana', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['nutella', 'ninho', 'granola'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const ingredientesSalada = [...specialFruit, additionalItens]
  return ingredientesSalada
};

console.log(fruitSalad(specialFruit, additionalItens));
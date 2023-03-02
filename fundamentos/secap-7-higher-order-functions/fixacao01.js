//Analisando o funcionando do forEtch:
const arrayOfValues = ['João', 'Lucas', 30, 1.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index, arrayOfValues) => {
  console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
  console.log(`A quantidade de elemento é ${arrayOfValues.length}`);
});
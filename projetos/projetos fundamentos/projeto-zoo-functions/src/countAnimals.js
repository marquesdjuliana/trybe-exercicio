const data = require('../data/zoo_data');

const quantiadeEspecie = (especie) => {
  if (!especie) {
    const listaDeAnimais = {};
    data.species.forEach((animal) => { listaDeAnimais[animal.name] = animal.residents.length; });
    return listaDeAnimais;
  }
  // return (data.species.find((animal) => animal.name === especie)).residents.length;
};
// console.log(quantiadeEspecie('lions')); // Retorna quantiade de espécie casa seja passado nome da espécie;
// console.log(quantiadeEspecie()); // Retorna um objeto com todas as espécies e quantiade de aniamis;

const countAnimals = (especie) => {
  if (especie === undefined) {
    return quantiadeEspecie();
  }
  const animal = data.species.find((umAnimal) => umAnimal.name === especie.species);
  const geralDeAnimais = animal.residents.length;
  const animalFemea = animal.residents.filter((femea) => femea.sex === 'female').length;
  if (especie.sex === undefined) {
    return geralDeAnimais;
  }
  return animalFemea;
};

// console.log(countAnimals());
// console.log(countAnimals({ species: 'penguins' }));
// console.log(countAnimals({ species: 'giraffes', sex: 'female' }));

module.exports = countAnimals;

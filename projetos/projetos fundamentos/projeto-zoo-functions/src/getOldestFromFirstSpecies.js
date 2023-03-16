const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const colaboradorId = data.employees.find((colaborador) => colaborador.id === id)
    .responsibleFor[0];
  const animalDoId = data.species.find((especie) => especie.id === colaboradorId).residents;
  const animalMaisVelho = animalDoId.sort((a, b) => a.age - b.age)[animalDoId.length - 1];
  return Object.values(animalMaisVelho);
};
// console.log((getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')));
module.exports = getOldestFromFirstSpecies;

const data = require('../data/zoo_data');

const dadosColaborador = data.employees.map((colaborador) => {
  const dados = {
    id: colaborador.id,
    fullName: `${colaborador.firstName} ${colaborador.lastName}`,
    species: colaborador.responsibleFor.map((id) => data.species
      .find((specie) => specie.id === id).name),
    locations: colaborador.responsibleFor.map((id) => data.species
      .find((specie) => specie.id === id).location),
  };
  return dados;
});
const getEmployeesCoverage = (pessoa) => {
  if (pessoa === undefined) return dadosColaborador;

  const validaDados = dadosColaborador
    .find((verificaPessoa) => verificaPessoa.fullName.includes(Object.values(pessoa))
      || verificaPessoa.id.includes(Object.values(pessoa)));
  if (validaDados === undefined) {
    throw new Error('Informações inválidas');
  }
  return validaDados;
};
// console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;

const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const xCriancas = entrants.filter((visitante) => visitante.age < 18).length;
  const xAdultos = entrants.filter((visitante) => visitante.age >= 18 && visitante.age < 50).length;
  const xIdosos = entrants.filter((visitante) => visitante.age >= 50).length;
  return { child: xCriancas, adult: xAdultos, senior: xIdosos };
};
// console.log(countEntrants());

const calculateEntry = (entrants) => {
  if (!entrants || Object.values(entrants).length === 0) return 0;
  const numeroVisitante = countEntrants(entrants);
  const quantiadeCrianca = numeroVisitante.child * data.prices.child;
  const quantiadeAdultos = numeroVisitante.adult * data.prices.adult;
  const quantiadeIdosos = numeroVisitante.senior * data.prices.senior;
  return quantiadeCrianca + quantiadeAdultos + quantiadeIdosos;
};

module.exports = { calculateEntry, countEntrants };

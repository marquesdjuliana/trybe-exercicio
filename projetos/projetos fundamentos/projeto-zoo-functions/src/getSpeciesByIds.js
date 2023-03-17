const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  data.species.filter((animais) => ids.includes(animais.id));

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;

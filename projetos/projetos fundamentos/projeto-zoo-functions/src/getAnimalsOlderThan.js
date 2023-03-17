const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, idade) =>
  data.species.find(({ name }) => name === animal)
    .residents.every(({ age }) => (age >= idade));

module.exports = getAnimalsOlderThan;

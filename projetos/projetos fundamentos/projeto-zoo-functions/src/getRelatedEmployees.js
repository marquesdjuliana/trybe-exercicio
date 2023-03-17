const data = require('../data/zoo_data');

const isManager = (id) =>
  data.employees.some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return data.employees.filter(({ managers }) => managers.includes(managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};
// Refatorando o código: anterior passou; naquela maneira estava 'trapacenado' o teste!
module.exports = { isManager, getRelatedEmployees };

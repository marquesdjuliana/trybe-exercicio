const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees.find((coloborador) => coloborador.firstName === employeeName
    || coloborador.lastName === employeeName);
};

module.exports = getEmployeeByName;

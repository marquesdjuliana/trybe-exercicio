const data = require('../data/zoo_data');

const especieDoDia = (diaDaSemana) => data.species.filter((specie) => specie
  .availability.includes(diaDaSemana)).map(({ name }) => name);
// console.log(especieDoDia('Tuesday')); Retorna um array com os nomes das espécies que estão abertas ao pública no dia especificado;

const exibeHorasEEspecieDoDia = () => {
  const horario = Object.keys(data.hours).reduce((acc, chaveDia) => {
    if (chaveDia === 'Monday') {
      acc[chaveDia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
      return acc;
    }
    acc[chaveDia] = {
      officeHour: `Open from ${data.hours[chaveDia].open}am until ${data.hours[chaveDia].close}pm`,
      exhibition: especieDoDia(chaveDia),
    };
    return acc;
  }, {});
  return horario;
};
// console.log(exibeHorasEEspecieDoDia()); retorna um objeto com dias da semana - que contém objeto com espécies exibidas no dia e horário referente a essa exposição;

const getSchedule = (scheduleTarget) => {
  const especie = data.species.find(({ name }) => name === scheduleTarget);
  if (especie) {
    return especie.availability;
  }
  const diaEHora = Object.keys(data.hours).find((dia) => dia === scheduleTarget);
  if (diaEHora) {
    return { [scheduleTarget]: exibeHorasEEspecieDoDia()[scheduleTarget] };
  }
  return exibeHorasEEspecieDoDia();
};
// console.log(getSchedule('Monday'));
// console.log(getSchedule('Tuesday'));

module.exports = getSchedule;

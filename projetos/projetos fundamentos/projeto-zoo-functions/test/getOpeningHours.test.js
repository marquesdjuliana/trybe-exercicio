const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se HandlerElephants função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Verifica se não passando arguemntos retorna objeto:', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Verifica se os arguemntos Monday e 09:00-AM retorna a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Verifica se os arguemntos Tuesday e 09:00-AM retorna a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se os arguemntos Wednesday e 09:00-PM retorna a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Verifica se os argumentos Thu e 09:00-PM retorna mensagem de erro', () => {
    expect(() => getOpeningHours('Thu', '07:00-PM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Verifica se os argumentos Friday e 09:00-ZM retorna mensagem de erro', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Verifica se os argumentos Saturday e C9:00-AM retorna mensagem de erro', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('Verifica se os argumentos Sunday e 09:c0-AM retorna mensagem de erro', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
  it('Verifica se os argumentos Monday e 13:00-AM retorna mensagem de erro', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Verifica se os argumentos Tuesday e 09:60-AM retorna mensagem de erro', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});

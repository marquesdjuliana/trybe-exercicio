const handlerElephants = require('../src/handlerElephants');

describe('Testes de HandlerElephants', () => {
  it('Verifica se HandlerElephants função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verifica se ao passar como parâmetro count retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se ao passar como parâmetro names retorna um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se ao passar como parâmetro averageAge retorna 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica se passar como parâmetro location retorna NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se passar como parâmetro location retorna 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Verifica se passar como parâmetro availability deve retornar um array não contém Monday', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica se não passar parâmetro retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se não passar um objeto vazio ({}) deve retornar uma string Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se passar uma string que não contempla uma funcionalidade retorna NULL', () => {
    expect(handlerElephants('oi')).toEqual(null);
  });
});

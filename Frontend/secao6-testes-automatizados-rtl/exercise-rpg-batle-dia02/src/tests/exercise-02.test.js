import rollDice from '../service/rollDice';
import rollMultipleDice from '../service/rollMultipleDice';

jest.mock('../service/rollDice');

it('testa a função `rollMultipleDice`', () => {
  /*
    Exercício 02
  */

  rollDice
    .mockReturnValueOnce(6);
  rollDice
    .mockReturnValueOnce(4);

  expect(rollMultipleDice(2, 20)).toBe(10);
  expect(rollDice).toBeCalledTimes(2);
});

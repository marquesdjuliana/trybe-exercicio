import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

jest.mock('../service/rollMultipleDice'); // mockando o caminho da função rollMitipleDice p/ implementar um valor fixo nela.

const enemy = {
  name: 'Fulado Detal',
  defensePoints: 30,
};
it('testa uma vitória na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(40);

  const resultObject = attackEnemy(2, 20, enemy);

  expect(resultObject.success).toBe(true);
});

it('testa uma derrota na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(20);

  const resultObject = attackEnemy(2, 20, enemy);

  expect(resultObject.success).toBe(false);
});

it('testa um empate nos dados, gerando derrota no `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(30);

  const resultObject = attackEnemy(2, 20, enemy);

  expect(resultObject.success).toBe(false);
});

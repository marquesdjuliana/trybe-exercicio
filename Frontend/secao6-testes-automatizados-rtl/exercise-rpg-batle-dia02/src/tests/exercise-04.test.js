import { render, screen } from '@testing-library/react';
import App from '../App';

it('testa a requisção para a API', async () => {
  // para um teste garantir o retorno do fecth, implemento:
  const characterList = [
    {
      id: 1,
      name: 'Fulano Detal',
      source: 'Inventado',
      defensePoints: 40,
    },
  ];

  jest.spyOn(global, 'fetch')
    .mockResolvedValue({
      json: jest.fn().mockResolvedValue(characterList),
    });

  // Renderizar a aplicação e verificar qual o comportamento em tela;
  // chamar o render:
  render(<App />);

  // pegar o elemento da tela - pelo H3 - como findByRole é uma função async uso o await:

  const enemyEl = await screen.findByRole('heading', { name: 'Fulano Detal' }); // problema: não podemos garantir que sempre a API vai retornar Daenerys como primeiro;
  // para controlar/garantir o comportamento da aplicação é necessário um mock:

  expect(enemyEl).toBeInTheDocument();
});

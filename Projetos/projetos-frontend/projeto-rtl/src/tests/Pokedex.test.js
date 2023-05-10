import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemonList from '../data';

describe('Testa o componente <Pokedex.js />', () => {
  it('Verifica se página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    screen.getByRole('heading', { name: /encountered pokémon/i });
  });

  it('Verifica se é exibido o próximo Pokémon da lista quando o botão Próximo pokémon é clicado', () => {
    renderWithRouter(<App />);
    console.log(pokemonList);
    pokemonList.forEach(({ name }) => {
      screen.getByText(name);
      userEvent.click(screen.getByRole('button', { name: 'Próximo Pokémon' }));
    });
    screen.getByText(pokemonList[0].name);
  });

  it('Verifica se é mostrado apenas os Pokémons de determinado tipo ao clicar no botão', () => {
    renderWithRouter(<App />);

    const btnFire = screen.getAllByTestId('pokemon-type-button')[1];
    expect(btnFire.textContent).toBe('Fire');
    userEvent.click(btnFire);

    screen.getByText(/charmander/i);

    userEvent.click(screen.getByRole('button', { name: /próximo pokémon/i }));

    screen.getByText(/rapidash/i);

    // const btnPsychic = screen.getAllByTestId('pokemon-type-button')[4];
    // expect(btnPsychic.textContent).toBe('Psychic');
    // userEvent.click(btnPsychic);

    // screen.getByText(/alakazam/i);

    // userEvent.click(screen.getByRole('button', { name: /próximo pokémon/i }));

    // screen.getByText(/mew/i);
  });

  it('Verifica se a Pokedéx zera os filtros ao clicar em All', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('button', { name: /fire/i }));
    screen.getByText(/charmander/i);
    userEvent.click(screen.getByRole('button', { name: /all/i }));
    screen.getByText(/pikachu/i);
  });
});

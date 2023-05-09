import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <FavoritePokemon.js />', () => {
  it('Verifica se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos;', () => {
    renderWithRouter(<App />);
    const favoriteLink = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });

    userEvent.click(favoriteLink);
    screen.getByText(/no favorite pokémon found/i);
  });
  it('Verifica se apenas são exibidos os Pokémon favoritados.', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(detailsLink);

    const favoritePokemon = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(favoritePokemon);

    const favoriteLink = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    userEvent.click(favoriteLink);
    screen.getByText(/pikachu/i);

    expect(screen.queryByText(/no favorite pokémon found/i)).not.toBeInTheDocument();
  });
});

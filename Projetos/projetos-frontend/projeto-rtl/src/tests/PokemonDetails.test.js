import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <PokemonDetails.js />', () => {
  beforeEach(() => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/pokemon/25');
    });
  });
  it('Verifica se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    screen.getByRole('heading', { name: /pikachu details/i, level: 2 });
    const detailsLink = screen.queryByRole('link', { name: /more details/i });
    expect(detailsLink).not.toBeInTheDocument();

    screen.getByRole('heading', { name: /summary/i });
    screen.getByText(/this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i);
  });

  it('Verifica se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    screen.getByRole('heading', { name: /game locations of pikachu/i });
    screen.getByText(/kanto viridian forest/i);
    screen.getByText(/kanto power plant/i);
    const locImg = screen.getAllByRole('img', { name: /pikachu location/i });
    expect(locImg).toHaveLength(2);
    expect(locImg[0].src).toBe('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(locImg[1].src).toBe('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Verifica se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    const checkbox = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(checkbox);
    const favoritePoke = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favoritePoke.src).toBe('http://localhost/star-icon.svg');
  });
});

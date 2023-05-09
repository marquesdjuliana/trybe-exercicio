import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokemon.js />', () => {
  it('Verifica se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);
    screen.getByText(/pikachu/i);
    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon.textContent).toEqual('Electric');
    screen.getByText(/average weight: 6.0 kg/i);

    const img = screen.getByRole('img', { name: /pikachu sprite/i });
    const src = 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png';
    expect(img).toHaveAttribute('src', src);
  });

  it('Verifica se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    expect(detailsLink.href).toContain('/pokemon/25');
  });

  it('Verifica se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon e se a URL exibida no navegador muda para /pokemon/<id>', () => {
    const { history } = renderWithRouter(<App />);

    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
  });

  it('Verifica se existe um ícone de estrela nos Pokémon favoritado', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /more details/i }));

    const favoriteCheckbox = screen.getByRole('checkbox');
    userEvent.click(favoriteCheckbox);

    const favoritePoke = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favoritePoke.src).toBe('http://localhost/star-icon.svg');
  });
});

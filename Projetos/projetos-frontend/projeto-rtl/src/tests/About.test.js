import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Testando o componente <About.js />.', () => {
  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    screen.getAllByRole('heading', { name: 'About Pokédex', level: 2 });
  });
  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    screen.getByText(/this application simulates a pokédex, a digital encyclopedia containing all pokémon/i);
    screen.getByText(/one can filter pokémon by type, and see more details for each one of them/i);
  });
  it('Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png', () => {
    renderWithRouter(<About />);
    const elementImg = screen.getByRole('img', { name: /pokédex/i });
    const src = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(elementImg).toHaveAttribute('src', src);
  });
});

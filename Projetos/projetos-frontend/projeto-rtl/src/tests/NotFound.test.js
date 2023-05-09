import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Teste o componente <NotFound.js />', () => {
  it('Verifica  se a página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    screen.getByRole('heading', { name: /page requested not found/i, level: 2 });
  });
  it('Verifica se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);
    const elementImg = screen.getByRole('img', { name: /pikachu crying because the page requested was not found/i });
    const src = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(elementImg).toHaveAttribute('src', src);
  });
});

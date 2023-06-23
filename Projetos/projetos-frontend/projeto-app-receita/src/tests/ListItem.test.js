import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import ListItem from '../components/ListItem/ListItem';

describe('Testes do componente "ListItem" na página de detalhes da receita', () => {
  it('Testa se os ingredientes e as quantidades são renderizados corretamente', async () => {
    const history = createMemoryHistory();
    history.push('/drinks/15977');
    render(
      <Router history={ history }>
        <ListItem ingredient="Ginger ale" quantity="2" />
      </Router>,
    );
    expect(history.location.pathname).toBe('/drinks/15977');
    const item = screen.getByRole('listitem');
    expect(item.innerHTML).toBe('2 Ginger ale');
  });
});

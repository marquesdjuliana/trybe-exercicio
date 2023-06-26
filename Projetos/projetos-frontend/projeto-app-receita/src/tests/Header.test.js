import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import Header from '../components/Header';
import { RecipeContext } from '../context/RecipeProvider';

describe('Teste do Header', () => {
  it('Teste do componente Header', () => {
    const history = createMemoryHistory();
    history.push('/meals'); // Adiciona a rota "/meals"

    render(
      <Router history={ history }>
        <Header />
      </Router>,
    );

    // Verifica se o botão de perfil está presente e possui o atributo data-testid correto
    const profileButton = screen.getByTestId('profile-top-btn');
    expect(profileButton).toBeInTheDocument();

    // Verifica se o título da página está presente e possui o atributo data-testid correto
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle.textContent).toBe('Meals');

    // Simula o clique no botão de perfil
    userEvent.click(profileButton);

    // Verifica se a rota foi alterada para "/profile"
    expect(history.location.pathname).toBe('/profile');

    // Verifica se o título da página foi atualizado para "Profile"
    expect(pageTitle.textContent).toBe('Profile');

    // Simula o retorno para a página inicial ("/")
    act(() => {
      history.push('/');
    });
  });
  it('Teste do clique no botão de pesquisa', () => {
    const history = createMemoryHistory();
    history.push('/meals'); // Adiciona a rota "/meals"

    render(
      <Router history={ history }>
        <Header />
      </Router>,
    );
  });
  it('Teste do clique no botão de pesquisa', () => {
    const history = createMemoryHistory();
    history.push('/meals'); // Adiciona a rota "/meals"

    render(
      <Router history={ history }>
        <RecipeContext.Provider value={ { searchRecipes: jest.fn() } }>
          <Header />
        </RecipeContext.Provider>
      </Router>,
    );
    // Verifica se o botão de pesquisa está presente e possui o atributo data-testid correto
    const searchButton = screen.getByTestId('search-top-btn');
    expect(searchButton).toBeInTheDocument();

    // Simula o clique no botão de pesquisa
    userEvent.click(searchButton);

    // Verifica se o componente SearchBar está visível após o clique no botão de pesquisa
    const searchBar = screen.getByTestId('search-input');
    expect(searchBar).toBeInTheDocument();

    // Simula o clique novamente no botão de pesquisa para fechar o componente SearchBar
    userEvent.click(searchButton);

    // Verifica se o componente SearchBar foi removido após o segundo clique no botão de pesquisa
    expect(searchBar).not.toBeInTheDocument();
  });
});

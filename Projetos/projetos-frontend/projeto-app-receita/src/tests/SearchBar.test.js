import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { RecipeContext } from '../context/RecipeProvider';

const input = 'search-input';
const btn = 'exec-search-btn';

describe('Testa SearchBar', () => {
  it('Testa se a pesquisa é feita corretamente', () => {
    const searchRecipes = jest.fn();

    const history = createMemoryHistory();
    history.push('/meals');

    render(
      <Router history={ history }>
        <RecipeContext.Provider value={ { searchRecipes } }>
          <SearchBar />
        </RecipeContext.Provider>
      </Router>,
    );

    const searchInput = screen.getByTestId(input);
    const searchButton = screen.getByTestId(btn);

    userEvent.type(searchInput, 'chicken');
    userEvent.click(searchButton);

    expect(searchRecipes).toHaveBeenCalledTimes(1);
    expect(searchRecipes).toHaveBeenCalledWith(
      'ingredient',
      'chicken',
      '/meals',
      history,
    );
  });

  it('Testa a pesquisa por ingrediente', () => {
    const searchRecipes = jest.fn();

    const history = createMemoryHistory();
    history.push('/meals');

    render(
      <Router history={ history }>
        <RecipeContext.Provider value={ { searchRecipes } }>
          <SearchBar />
        </RecipeContext.Provider>
      </Router>,
    );
    const searchButton = screen.getByTestId(btn);
    const searchInput = screen.getByTestId(input);

    const ingredientRadio = screen.getByTestId('ingredient-search-radio');

    userEvent.click(ingredientRadio);
    userEvent.type(searchInput, 'chicken');
    userEvent.click(searchButton);

    expect(searchRecipes).toHaveBeenCalledTimes(1);
    expect(searchRecipes).toHaveBeenCalledWith(
      'ingredient',
      'chicken',
      '/meals',
      history,
    );
  });

  it('Testa a pesquisa por nome', () => {
    const searchRecipes = jest.fn();

    const history = createMemoryHistory();
    history.push('/meals');

    render(
      <Router history={ history }>
        <RecipeContext.Provider value={ { searchRecipes } }>
          <SearchBar />
        </RecipeContext.Provider>
      </Router>,
    );
    const searchButton = screen.getByTestId(btn);
    const searchInput = screen.getByTestId(input);

    const nameRadio = screen.getByTestId('name-search-radio');

    userEvent.click(nameRadio);
    userEvent.type(searchInput, 'chicken');
    userEvent.click(searchButton);

    expect(searchRecipes).toHaveBeenCalledTimes(1);
    expect(searchRecipes).toHaveBeenCalledWith(
      'name',
      'chicken',
      '/meals',
      history,
    );
  });

  it('Testa a pesquisa por primeira letra', () => {
    const searchRecipes = jest.fn();

    const history = createMemoryHistory();
    history.push('/meals');

    render(
      <Router history={ history }>
        <RecipeContext.Provider value={ { searchRecipes } }>
          <SearchBar />
        </RecipeContext.Provider>
      </Router>,
    );
    const searchButton = screen.getByTestId(btn);
    const searchInput = screen.getByTestId(input);

    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');

    userEvent.click(firstLetterRadio);
    userEvent.type(searchInput, 'c');
    userEvent.click(searchButton);

    expect(searchRecipes).toHaveBeenCalledTimes(1);
    expect(searchRecipes).toHaveBeenCalledWith(
      'first-letter',
      'c',
      '/meals',
      history,
    );
  });

  it('Testa alerta para pesquisa inválida em "first-letter"', () => {
    global.alert = jest.fn(); // Mock the global alert function

    const setMeals = jest.fn();
    const setDrinks = jest.fn();
    const searchRecipes = jest.fn();

    const history = createMemoryHistory();

    render(
      <Router history={ history }>
        <RecipeContext.Provider value={ { setMeals, setDrinks, searchRecipes } }>
          <SearchBar />
        </RecipeContext.Provider>
      </Router>,
    );

    const searchButton = screen.getByTestId(btn);
    const searchInput = screen.getByTestId(input);

    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');

    userEvent.click(firstLetterRadio);
    userEvent.type(searchInput, 'chicken');
    userEvent.click(searchButton);

    expect(global.alert).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith('Your search must have only 1 (one) character');
  });
});

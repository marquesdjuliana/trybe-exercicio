import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import RecipeInProgress from '../pages/RecipeInProgress/RecipeInProgress';

describe('Testes da Tela de Receitas em Progresso', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        meals: [{
          strMeal: 'Spaghetti',
          strMealThumb: 'spaghetti.jpg',
          category: 'Pasta',
          strAlcoholic: null,
          strInstructions: 'Instructions...',
          strIngredient1: 'Ingredient1',
          strIngredient2: 'Ingredient2',
          strIngredient3: null,
        }],
      }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const mockProps = {
    match: {
      params: {
        id: '52977',
      },
    },
  };

  test('Testes se os componentes existem na tela', async () => {
    const history = createMemoryHistory();
    history.push('/meals/52977/in-progress');
    render(
      <Router history={ history }>
        <RecipeInProgress { ...mockProps } />
      </Router>,
    );
    expect(history.location.pathname).toBe('/meals/52977/in-progress');

    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByTestId('recipe-title')).toBeInTheDocument();
    expect(screen.getByTestId('recipe-photo')).toBeInTheDocument();
    expect(screen.getByTestId('recipe-category')).toBeInTheDocument();
    expect(screen.getByTestId('instructions')).toBeInTheDocument();
    expect(screen.getByTestId('share-btn')).toBeInTheDocument();
    expect(screen.getByTestId('favorite-btn')).toBeInTheDocument();
    expect(screen.getByTestId('finish-recipe-btn')).toBeInTheDocument();
  });
});

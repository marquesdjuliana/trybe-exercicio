import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import App from '../App';
import { mockDoneRecipes } from '../pages/DoneRecipes/doneRecipesMock';

describe('Testes da página "DoneRecipes"', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    history.push('/done-recipes');
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
  });
  it('Testa os botões de filtro', () => {
    const filters = ['All', 'Meal', 'Drink'];
    filters.forEach((filter) => {
      const filterButton = screen.getByText(filter);
      expect(filterButton).toBeInTheDocument();
    });
  });
  it('Testa a renderização das receitas', () => {
    mockDoneRecipes.forEach((recipe) => {
      const recipeItem = screen.getByText(recipe.strMeal || recipe.strDrink);
      expect(recipeItem).toBeInTheDocument();
    });
  });
  it('Testa a filtragem das receitas ao clicar no botão "meal"', () => {
    const mealsButton = screen.getByText(/meal/i);
    act(() => {
      userEvent.click(mealsButton);
    });
    const drinkRecipe = screen.queryByText(/aquamarine/i);
    expect(drinkRecipe).not.toBeInTheDocument();
    const mealRecipe = screen.getByText(/spicy/i);
    expect(mealRecipe).toBeInTheDocument();
  });
  it('Testa a filtragem das receitas ao clicar no botão "drink" e se, ao clicar no botão "all", todas as receitas são renderizadas novamente', () => {
    const drinksButton = screen.getByText(/drink/i);
    act(() => {
      userEvent.click(drinksButton);
    });
    const mealRecipe = screen.queryByText(/spicy/i);
    expect(mealRecipe).not.toBeInTheDocument();
    const drinkRecipe = screen.getByText(/aquamarine/i);
    expect(drinkRecipe).toBeInTheDocument();
    const allRecipesButton = screen.getByText(/all/i);
    act(() => {
      userEvent.click(allRecipesButton);
    });
    const meal = screen.getByRole('heading', { name: /spicy arrabiata penne/i });
    const drink = screen.getByRole('heading', { name: /aquamarine/i });
    expect(drink).toHaveTextContent(/aquamarine/i);
    expect(meal).toHaveTextContent(/spicy arrabiata penne/i);
  });
  it('Testa se o link da receita (meal) é copiado para o clipboard ao clicar no botão de compartilhar', () => {
    const shareButton = screen.getByTestId('0-horizontal-share-btn');
    Object.assign(navigator, { // associa um novo objeto ao navigator, que também é um objeto
      clipboard: { // cria a propriedade clipboard
        writeText: jest.fn().mockImplementation(() => Promise.resolve()), // faz o mock da função writeText e o mockImplementation faz uma implementação customizada para a função writeText - retorna a Promise resolvida
      },
    });
    act(() => {
      userEvent.click(shareButton);
    });
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('http://localhost:3000/meals/52771');
    expect(screen.getByText('Link copied!')).toBeInTheDocument();
  });
  it('Testa se o link da receita (drink) é copiado para o clipboard ao clicar no botão de compartilhar', () => {
    const shareButton = screen.getByTestId('1-horizontal-share-btn');
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    });
    act(() => {
      userEvent.click(shareButton);
    });
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('http://localhost:3000/drinks/178319');
    expect(screen.getByText('Link copied!')).toBeInTheDocument();
  });
  it('Testa se, ao clicar na imagem da receita (meal), o usuário é direcionado para a página de detalhes', () => {
    const history = createMemoryHistory();
    const recipeImg = screen.getByTestId('0-horizontal-image');
    act(() => {
      userEvent.click(recipeImg);
    });
    waitFor(() => {
      expect(history.location.pathname).toBe('/meals/52771');
    });
  });
  it('Testa se, ao clicar na imagem da receita (drink), o usuário é direcionado para a página de detalhes', () => {
    const history = createMemoryHistory();
    const recipeImg = screen.getByTestId('1-horizontal-image');
    act(() => {
      userEvent.click(recipeImg);
    });
    waitFor(() => {
      expect(history.location.pathname).toBe('/drinks/178319');
    });
  });
  it('Testa se, ao clicar no título da receita (meal), o usuário é direcionado para a página de detalhes', () => {
    const history = createMemoryHistory();
    const recipeTitle = screen.getByTestId('0-horizontal-name');
    act(() => {
      userEvent.click(recipeTitle);
    });
    waitFor(() => {
      expect(history.location.pathname).toBe('/meals/52771');
    });
  });
  it('Testa se, ao clicar no título da receita (drink), o usuário é direcionado para a página de detalhes', () => {
    const history = createMemoryHistory();
    const recipeTitle = screen.getByTestId('1-horizontal-name');
    act(() => {
      userEvent.click(recipeTitle);
    });
    waitFor(() => {
      expect(history.location.pathname).toBe('/drinks/178319');
    });
  });
});

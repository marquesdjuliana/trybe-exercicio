import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import App from '../App';
import { mealsMock } from './helpers/mealsMock';
import { drinksMock } from './helpers/drinksMock';
import { RecipeContext } from '../context/RecipeProvider';

describe('Testes da página "Recipes"', () => {
  it('Testa a página "/meals"', async () => {
    const fetchMeals = jest.fn();
    const history = createMemoryHistory();
    history.push('/meals');
    render(
      <Router history={ history }>
        <RecipeContext.Provider value={ { fetchMeals } }>
          <App />
        </RecipeContext.Provider>
      </Router>,
    );

    expect(history.location.pathname).toBe('/meals');
    fetchMeals.mockResolvedValueOnce(mealsMock);
    const allRecipesResult = await fetchMeals('all', '');
    const recipes = Object.values(allRecipesResult)[0];
    await recipes.forEach(async (recipe) => {
      const recipeResult = await screen.findByText(recipe.strMeal);
      expect(recipeResult).toBeInTheDocument();
    });

    const categories = ['Side', 'Seafood', 'Beef'];
    fetchMeals.mockResolvedValueOnce(categories);
    const categoriesResult = await fetchMeals('all-category', '');
    await categoriesResult.forEach(async (category) => {
      const categoryResult = await screen.findByText(category.strMeal);
      expect(categoryResult).toBeInTheDocument();
    });

    await waitFor(async () => {
      const beefButton = screen.getByRole('button', { name: /beef/i });
      act(() => {
        userEvent.click(beefButton);
      });
    });
    const beefLoMein = recipes.filter((recipe) => recipe.strMeal === 'Beef Lo Mein');
    fetchMeals.mockResolvedValueOnce(beefLoMein);
    const beefRecipes = await fetchMeals('category', 'beef');
    await beefRecipes.forEach(async (recipe) => {
      const beefRecipeResult = await screen.findByText(recipe.strMeal);
      expect(beefRecipeResult).toBeInTheDocument();
      const sushi = screen.queryByText(/sushi/i);
      expect(sushi).not.toBeInTheDocument();
    });
    const allRecipesButton = screen.getByRole('button', { name: /all/i });
    act(() => {
      userEvent.click(allRecipesButton);
    });
    expect(fetchMeals).toHaveBeenCalledWith('all', '');
    fetchMeals.mockResolvedValueOnce(recipes);

    const firstMeal = await screen.findByRole('button', { name: /corba/i });
    act(() => {
      userEvent.click(firstMeal);
    });
    expect(history.location.pathname).toBe('/meals/52977');
    expect(fetchMeals).toHaveBeenCalledWith('name', 'Corba');
    fetchMeals.mockResolvedValueOnce(recipes[0]);
  });

  it('Testa a página "/drinks"', async () => {
    const fetchDrinks = jest.fn();
    const history = createMemoryHistory();
    history.push('/drinks');
    render(
      <Router history={ history }>
        <RecipeContext.Provider value={ { fetchDrinks } }>
          <App />
        </RecipeContext.Provider>
      </Router>,
    );

    fetchDrinks.mockResolvedValueOnce(drinksMock);
    const allRecipesResult = await fetchDrinks('all', '');
    const recipes = Object.values(allRecipesResult)[0];
    expect(history.location.pathname).toBe('/drinks');

    await waitFor(async () => {
      await recipes.forEach(async (recipe) => {
        const recipeResult = await screen.findByText(recipe.strDrink);
        expect(recipeResult).toBeInTheDocument();
      });
    });

    const categories = ['Cocktail', 'Shake', 'Shot'];
    fetchDrinks.mockResolvedValueOnce(categories);
    const categoriesResult = await fetchDrinks('all-category', '');
    await categoriesResult.forEach(async (category) => {
      const categoryResult = await screen.findByText(category.strDrink);
      expect(categoryResult).toBeInTheDocument();
    });
    expect(fetchDrinks).toHaveBeenCalledTimes(2);

    await waitFor(async () => {
      const cocktailButton = await screen.findByText(/cocktail/i);
      act(() => {
        userEvent.click(cocktailButton);
      });
      fetchDrinks.mockResolvedValueOnce(recipes[1]);
      const cocktails = await fetchDrinks('category', 'cocktail');
      expect(fetchDrinks).toHaveBeenCalled();
      const cocktailRecipeResult = screen.getByText(cocktails.strDrink);
      expect(cocktailRecipeResult).toBeInTheDocument();
      const nonCocktail = screen.queryByText('747 Drink');
      expect(nonCocktail).not.toBeInTheDocument();
    });

    const allRecipesButton = screen.getByRole('button', { name: /all/i });
    act(() => {
      userEvent.click(allRecipesButton);
    });
    expect(fetchDrinks).toHaveBeenCalledWith('all', '');
    fetchDrinks.mockResolvedValueOnce(recipes);

    const firstDrink = await screen.findByRole('button', { name: /gg/i });
    act(() => {
      userEvent.click(firstDrink);
    });
    expect(history.location.pathname).toBe('/drinks/15997');
  });
});

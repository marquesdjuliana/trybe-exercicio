import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import copy from 'clipboard-copy';
import App from '../App';
import { fav, progress } from './helpers/recipeDetailsMock';
import renderWithRouter from './helpers/renderVithRouterRecipeDetails';

// jest.mock('clipboard-copy');
const drinkRoute = '/drinks/17222';
describe('Testa página RecipeDetails', () => {
  it('verifica se os elementos esperados estão presentes na página ', async () => {
    localStorage.clear();
    localStorage.setItem('recipeDetails', JSON.stringify(progress));

    const { history } = renderWithRouter(<App />, drinkRoute);

    const titulo = await screen.findByRole('heading', { name: /a1/i }, { timeout: 3500 });

    expect(titulo).toBeInTheDocument();

    const image = screen.getByTestId('recipe-photo');
    expect(image).toBeInTheDocument();

    const shareBtn = screen.getByTestId('share-btn');
    expect(shareBtn).toBeInTheDocument();

    const favBtn = screen.getByTestId('favorite-btn');
    expect(favBtn).toBeInTheDocument();

    const continueRecipe = screen.getByTestId('start-recipe-btn');
    userEvent.click(continueRecipe);

    const { pathname } = history.location;

    expect(pathname).toBe('/drinks/17222/in-progress');
  }, 6000);

  it('verifica fav click', async () => {
    localStorage.clear();
    localStorage.setItem('recipeDetails', JSON.stringify(progress));
    localStorage.setItem('favoriteRecipes', JSON.stringify(fav));

    renderWithRouter(<App />, drinkRoute);

    await screen.findByRole('heading', { name: /a1/i }, { timeout: 3500 });

    const btnFav = screen.getByTestId('favorite-btn');

    userEvent.click(btnFav);

    userEvent.click(btnFav);
  }, 6000);

  it('verifica selecionar itens drinks', async () => {
    localStorage.clear();

    const { history } = renderWithRouter(<App />, drinkRoute);

    await screen.findAllByTestId(/recipe-photo/, '', { timeout: 3500 });

    screen.getAllByTestId(/-ingredient-name-and-measure/);

    const continueRecipe = screen.getByTestId('start-recipe-btn');
    userEvent.click(continueRecipe);

    const { pathname } = history.location;

    expect(pathname).toBe('/drinks/17222/in-progress');
  }, 6000);

  it('verifica selecionar itens meal', async () => {
    localStorage.clear();

    renderWithRouter(<App />, '/meals/53060');

    await screen.findAllByTestId(/recipe-photo/, '', { timeout: 3500 });

    screen.getAllByTestId(/-ingredient-name-and-measure/);

    const btnFav = screen.getByTestId(/favorite-btn/i);

    userEvent.click(btnFav);
  }, 6000);

  // it('verifica btn compartilhar', async () => {
  //   copy.mockImplementation(() => {});

  //   localStorage.clear();

  //   renderWithRouter(<App />, drinkRoute);

  //   const btnShare = await screen.findAllByTestId(/share-btn/, '', { timeout: 3500 });

  //   userEvent.click(btnShare[0]);

  //   const messageCopy = screen.getAllByText(/link copied!/i);
  //   expect(messageCopy[0]).toBeInTheDocument();

  //   const btnFav = screen.getByTestId(/favorite-btn/i);

  //   userEvent.click(btnFav);
  // }, 12000);
});

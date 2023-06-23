import { fetchDrinks } from '../services/fetchAPI';
import { drinksMock } from './helpers/drinksMock';

beforeEach(() => {
  global.fetch = jest.fn();
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe('Testes da função fetchDrinks na barra de pesquisa', () => {
  it('Testa a pesquisa por ingrediente', async () => {
    const ingredient = 'Ginger ale';
    const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(drinksMock),
    });
    const result = await fetchDrinks('ingredient', ingredient);
    expect(global.fetch).toHaveBeenCalledWith(API_URL);
    expect(result).toEqual(drinksMock.drinks);
  });
  it('Testa a pesquisa por nome', async () => {
    const name = 'GG';
    const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(drinksMock),
    });
    const result = await fetchDrinks('name', name);
    expect(global.fetch).toHaveBeenCalledWith(API_URL);
    expect(result).toEqual(drinksMock.drinks);
  });
  it('Testa a pesquisa pela primeira letra', async () => {
    const letter = 'a';
    const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(drinksMock),
    });
    const result = await fetchDrinks('first-letter', letter);
    expect(global.fetch).toHaveBeenCalledWith(API_URL);
    expect(result).toEqual(drinksMock.drinks);
  });
});
describe('Testes da função fetchDrinks na página de receitas', () => {
  it('Testa se a função fetchDrinks retorna inicialmente todos os drinks', async () => {
    const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(drinksMock),
    });
    const result = await fetchDrinks('all', '');
    expect(global.fetch).toHaveBeenCalledWith(API_URL);
    expect(result).toEqual(drinksMock.drinks);
  });
  it('Testa a pesquisa por categoria', async () => {
    const category = 'cocktail';
    const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(drinksMock),
    });
    const result = await fetchDrinks('category', category);
    expect(global.fetch).toHaveBeenCalledWith(API_URL);
    expect(result).toEqual(drinksMock.drinks);
  });
});
describe('Testes de exceções da função fetchDrinks', () => {
  it('Testa se o retorno da função fetchDrinks é um erro caso a mesma seja chamada sem parâmetros', async () => {
    const error = new Error('Mensagem de erro');
    global.fetch.mockRejectedValueOnce(error);
    const result = await fetchDrinks('');
    expect(result).toBeUndefined();
  });
});

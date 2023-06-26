import { fetchMeals } from '../services/fetchAPI';
import { mealsMock } from './helpers/mealsMock';

beforeEach(() => {
  global.fetch = jest.fn();
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe('Testes da função fetchMeals na barra de pesquisa', () => {
  it('Testa a pesquisa por ingrediente', async () => {
    const ingredient = 'egg';
    const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mealsMock),
    });
    const result = await fetchMeals('ingredient', ingredient);
    expect(global.fetch).toHaveBeenCalledWith(API_URL);
    expect(result).toEqual(mealsMock.meals);
  });
  it('Testa a pesquisa por nome', async () => {
    const name = 'corba';
    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mealsMock),
    });
    const result = await fetchMeals('name', name);
    expect(global.fetch).toHaveBeenCalledWith(API_URL);
    expect(result).toEqual(mealsMock.meals);
  });
  it('Testa a pesquisa pela primeira letra', async () => {
    const letter = 'a';
    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mealsMock),
    });
    const result = await fetchMeals('first-letter', letter);
    expect(global.fetch).toHaveBeenCalledWith(API_URL);
    expect(result).toEqual(mealsMock.meals);
  });
});

describe('Testes da função fetchMeals na página de receitas', () => {
  it('Testa se a função fetchMeals retorna inicialmente todas as meals', async () => {
    const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mealsMock),
    });
    const result = await fetchMeals('all', '');
    expect(global.fetch).toHaveBeenCalledWith(API_URL);
    expect(result).toEqual(mealsMock.meals);
  });
  it('Testa a pesquisa por categoria', async () => {
    const category = 'beef';
    const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mealsMock),
    });
    const result = await fetchMeals('category', category);
    expect(global.fetch).toHaveBeenCalledWith(API_URL);
    expect(result).toEqual(mealsMock.meals);
  });
});
describe('Testes de exceções da função fetchMeals', () => {
  it('Testa se o retorno da função fetchMeals é um erro caso a mesma seja chamada sem parâmetros', async () => {
    const error = new Error('Mensagem de erro');
    global.fetch.mockRejectedValueOnce(error);
    const result = await fetchMeals('');
    expect(result).toBeUndefined();
  });
});

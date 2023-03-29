import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect( typeof fetchProductsList).toBe('function')
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('se ao passar como argumento "computador" a função fethProductsList retorna o objeto computadorSearch', async () => {
    const resultObject = await fetchProductsList('computador');
    expect(resultObject).toMatchObject(computadorSearch);

  });

  it('se ao chamar a função fethProductsList sem arguemnto retorna uma mensagem de erro', async () => {
    const expectedError = new Error('Termo de busca não informado');
    await expect(fetchProductsList('')).rejects.toThrow(expectedError);
    
  });
});

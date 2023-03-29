import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect( typeof fetchProduct).toBe('function')
  });

  it('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('se ao passar como argumento "MLB1405519561" a função fethProduct retorna o objeto productw', async () => {
    const resultObject = await fetchProduct('MLB1405519561');
    expect(resultObject).toMatchObject(product);

  });

  it('se ao chamar a função fethProductsList sem arguemnto retorna uma mensagem de erro', async () => {
    const expectedError = new Error('ID não informado');
    await expect(fetchProduct('')).rejects.toThrow(expectedError);
    
  });
});
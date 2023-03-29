const BASE_ITEM_URL = 'https://api.mercadolibre.com/items/';
export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const response = await fetch(`${BASE_ITEM_URL}${id}`);
  const data = await response.json();
  return data;
};
const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

export const fetchProductsList = async (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(`${BASE_URL}${query}`);
  const data = await response.json();
  const result = data.results;
  return result;
};

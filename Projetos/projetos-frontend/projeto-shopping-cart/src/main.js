import { getSavedCartIDs } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const sectionProducts = document.querySelector('.products'); // Salva retorno na função fetchProductList;
const elementOl = document.querySelector('.cart__products');

// Função que cria elemento com mensagem 'carregando...':
const elementSpan = document.createElement('span');
const createSpanLoading = () => {
  elementSpan.innerText = 'carregando...';
  elementSpan.classList.add('loading');
  sectionProducts.appendChild(elementSpan);
};
createSpanLoading();

// Função que renderiza produtos na aplicação e exibe mensagem de caso haja erro na requisição da APIs:
const renderProducts = async () => {
  try {
    const results = await fetchProductsList('computador');
    if (results) {
      results.forEach((element) => {
        const sectionElement = createProductElement(element);
        sectionProducts.appendChild(sectionElement);
      });
    }
  } catch (error) {
    const elementError = document.createElement('span');
    elementError.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
    elementError.classList.add('error');
    sectionProducts.appendChild(elementError);
  } finally {
    sectionProducts.removeChild(elementSpan);
  }
};
renderProducts();

// Função que recupera produtos do localStorage:
window.onload = () => {
  const savedInStorage = async () => {
    const productsLocStorage = getSavedCartIDs();
    const returnArrayProducts = productsLocStorage
      .map((productSaved) => fetchProduct(productSaved));

    const productsAll = await Promise.all(returnArrayProducts); // manter a ordem dos produtos no corrinho!
    productsAll.forEach((productSaved) => {
      const elementCart = createCartProductElement(productSaved);
      elementOl.appendChild(elementCart);
    });
  };
  savedInStorage();
};

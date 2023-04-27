import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class Product extends Component {
  state = {
    title: '', // Título do produto
    thumbnail: '', // URL da imagem do produto
    price: '', // Preço do produto
  };

  componentDidMount() { // Método de ciclo de vida chamado após o componente ser montado no DOM
    this.fetchDetailsProduct(); // Chama a função para buscar os detalhes do produto
  }

  fetchDetailsProduct = async () => { // Função assíncrona para buscar os detalhes do produto
    const { match: { params: { id } } } = this.props; // Obtém o ID do produto a partir das propriedades passadas ao componente
    const { title, thumbnail, price } = await getProductById(id); // Chama a função assíncrona para buscar os detalhes do produto com o ID especificado
    this.setState({ // Atualiza o estado do componente com os detalhes do produto obtido
      title,
      thumbnail,
      price,
    });
  };

  handleAddToCart = () => { // Função chamada quando o usuário clica no botão "Adicionar ao carrinho"
    const { title, thumbnail, price } = this.state; // Obtém as informações do produto a partir do estado do componente
    const product = { // Cria um objeto "product" com as informações do produto
      title,
      thumbnail,
      price,
      quantity: 1, // Quantidade inicial é sempre 1
    };
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtém o carrinho armazenado no localStorage ou um array vazio se não houver nada armazenado
    const existingProduct = cart.find((p) => p.title === title); // Verifica se o produto já está no carrinho
    if (existingProduct) { // Se o produto já estiver no carrinho
      existingProduct.quantity += 1; // Aumenta a quantidade do produto
    } else { // Se o produto não estiver no carrinho
      cart.push(product); // Adiciona o produto ao carrinho
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // Armazena o carrinho atualizado no localStorage
  };

  render() { // Método para renderizar o componente
    const { title, price, thumbnail } = this.state; // Obtém as informações do produto a partir do estado do componente

    return (
      <>
        <div>
          <p data-testid="product-detail-name">{ title }</p>
          <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
          <p data-testid="product-detail-price">{ `Preço: R$${price}` }</p>
          {/* Botão para adicionar o produto ao carrinho */}
          <button
            onClick={ this.handleAddToCart }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
        {/* Link para a página do carrinho de compras */}
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <button>Ir para o carrinho de compras</button>
        </Link>
      </>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Product;

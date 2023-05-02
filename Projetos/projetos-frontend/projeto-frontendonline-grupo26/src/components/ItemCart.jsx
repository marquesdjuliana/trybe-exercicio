import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCart extends Component {
  render() {
    const { title,
      thumbnail,
      price,
      quantity,
      incrementItem,
      decrementItem,
      removeItem,
    } = this.props;

    return (
      <div data-testid="product" className="container-product-cart">
        <img src={ thumbnail } alt={ title } />
        <div>
          <h5 data-testid="shopping-cart-product-name">
            { title }
          </h5>
          <p>{ `R$: ${price}` }</p>
          <span data-testid="shopping-cart-product-quantity">
            { `Quantidade de itens ${quantity}` }
          </span>
        </div>
        <div>
          <button
            data-testid="product-increase-quantity"
            type="button"
            name={ title }
            onClick={ incrementItem }
          >
            +
          </button>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            name={ title }
            onClick={ decrementItem }
          >
            -
          </button>
          <button
            data-testid="remove-product"
            type="button"
            name={ title }
            onClick={ removeItem }
          >
            Excluir item
          </button>
        </div>
      </div>
    );
  }
}

ItemCart.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  incrementItem: PropTypes.func,
  decrementItem: PropTypes.func,
  removeItem: PropTypes.func,
}.isRequired;

ItemCart.propTypes = {
  quantity: PropTypes.number,
};

ItemCart.defaultProps = {
  quantity: 0,
};

export default ItemCart;

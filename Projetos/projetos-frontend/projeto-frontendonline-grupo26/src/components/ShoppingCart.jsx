import React from 'react';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';

class ShoppingCart extends React.Component {
// =================== req. 10 ===============================
  state = {
    cart: [],
  };

  componentDidMount() {
    this.getCartLocalStorage();
  }

  getCartLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      cart,
    });
  };

  incrementItem = (event) => {
    const { cart } = this.state;

    const itemClick = event.target.name;
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    const product = cart.find((e) => e.title === itemClick);
    const index = currentCart.findIndex((item) => item.title === itemClick);
    product.quantity += 1;
    cart[index].quantity = product.quantity;
    this.setState({ cart });
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  decrementItem = (event) => {
    const { cart } = this.state;

    const itemClick = event.target.name;
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    const a = cart.find((e) => e.title === itemClick);
    const index = currentCart.findIndex((item) => item.title === itemClick);

    if (cart[index].quantity > 1) {
      a.quantity -= 1;
      cart[index].quantity = a.quantity;
      this.setState({ cart });
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  removeItem = (event) => {
    const { cart } = this.state;

    const itemClick = event.target.name;
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    // const a = cart.find((e) => e.title === itemClick);
    const index = currentCart.findIndex((item) => item.title === itemClick);
    cart.splice(index, 1);
    this.setState({ cart });
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  render() {
    const { cart } = this.state;

    return (
      <div>
        {
          (!cart || cart.length === 0) ? (
            // Renderiza uma mensagem se o carrinho estiver vazio
            <p
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>)
            : (
            // Renderiza os detalhes de cada produto no carrinho
              cart.map((item) => (
                <ItemCart
                  key={ item.id }
                  { ...item }
                  incrementItem={ this.incrementItem }
                  decrementItem={ this.decrementItem }
                  removeItem={ this.removeItem }
                />
              ))
            )
        }
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          Ir para o carrinho de compras
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;

// =============================================================================
// ABAIXO VERSÃO ANTERIOR DO CÓDIGO:
// import React from 'react';

// class ShoppingCart extends React.Component {
// state = {
//   cart: [],
// };

// handleAddToCart = (product) => {
//   const { cart } = this.state;
//   const productIndex = cart.findIndex((p) => p.id === product.id);

//   if (productIndex >= 0) {
// Se o produto já está no carrinho, atualiza sua quantidade
//     const updatedCart = cart.map((p, index) => {
//       if (index === productIndex) {
//         return {
//           ...p,
//           quantity: p.quantity + 1,
//         };
//       }
//       return p;
//     });
//     this.setState({ cart: updatedCart });
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   } else {
// Se o produto não está no carrinho, adiciona com quantidade 1
//     const updatedCart = [...cart, { ...product, quantity: 1 }];
//     this.setState({ cart: updatedCart });
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   }
// };

//   render() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];

//     return (
//       <div>
//         <h2>Carrinho de compras</h2>
//         {cart.length === 0
//           && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
//         {cart.map((product, index) => (
//           <div key={ index }>
//             <p data-testid="shopping-cart-product-name">{product.title}</p>
//             <p>{`Preço: R$${product.price}`}</p>
//             <p data-testid="shopping-cart-product-quantity">
//               {`Quantidade: ${product.quantity}`}
//             </p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default ShoppingCart;

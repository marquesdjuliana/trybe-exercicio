import React from 'react';
import { Link } from 'react-router-dom';
import CategoryFor from './CategoryFor';
import Loading from './Loading'; // Transformei o <p>Carregando...</p> em componente para usar em outros momentos da aplicação.

class Home extends React.Component {
  state = {
    query: '',
    searchResult: [],
    isLoading: false,
    error: null,
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSearch = async (categoryId) => {
    const { query } = this.state;
    if (query === '' && !categoryId) { // Req.06: incluindo na condição o radio vazio para não retornar nada casa o usuário não realize nenhuma ação!
    }
    this.setState({ searchResult: [], isLoading: true, error: null });
    try {
      let url = 'https://api.mercadolibre.com/sites/MLB/search?';
      if (categoryId) { // Req.06: adicionando a categoria como parâmetro na busca;
        url += `category=${categoryId}&q=${query}`;
      }
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ searchResult: data.results });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  // Req.06: pegando o valor do event p/ passar como parâmetro em handleSearch;

  handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    this.setState({ isLoading: true });
    this.handleSearch(categoryId);
  };

  // Req.08: função para adicionar ao carrinho os produtos
  handleAddToCart = (title, thumbnail, price) => {
    const product = {
      title,
      thumbnail,
      price,
    };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let elemtIndex = 0;
    const existingPrsoduct = cart.find((p, index) => {
      if (p.title === title) {
        elemtIndex = index;
        return true;
      }
      return false;
    });
    console.log(existingPrsoduct);
    if (existingPrsoduct) {
      product.quantity = existingPrsoduct.quantity + 1;
      cart[elemtIndex] = product;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  render() {
    const { query, searchResult, isLoading, error } = this.state;
    return (
      <div>
        <div>
          <input type="text" />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <input
          type="text"
          value={ query }
          onChange={ this.handleInputChange }
          data-testid="query-input"
        />
        <button onClick={ this.handleSearch } data-testid="query-button">
          Buscar
        </button>
        {isLoading && <Loading />}
        {error && <Loading />}
        {searchResult.length > 0 ? (
          <ul>
            {searchResult.map(({ id, thumbnail, title, quantity, price }) => (
              <li key={ id } data-testid="product">
                <img src={ thumbnail } alt={ title } />
                <p data-testid="shopping-cart-product-name">{title}</p>
                <p>{price}</p>
                <p data-testid="shopping-cart-product-quantity">{quantity}</p>
                <div>
                  <Link
                    to={ `/product/${id}` }
                    className="btn"
                    data-testid="product-detail-link"
                  >
                    Detalhes do Produto
                  </Link>
                </div>
                <div>
                  <button
                    data-testid="product-add-to-cart"
                    onClick={
                      () => this.handleAddToCart(title, thumbnail, price)
                    }
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum produto foi encontrado</p>
        )}
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          Ir para o carrinho de compras
        </Link>
        <CategoryFor onCategoryChange={ this.handleCategoryChange } />
      </div>
    );
  }
}
export default Home;

// ==============================================================================
// ABAIXO VERSÃO ANTERIOR DO CÓDIGO:
// import React from 'react';
// import { Link } from 'react-router-dom';
// import CategoryFor from './CategoryFor';
// import Loading from './Loading'; // Transformei o <p>Carregando...</p> em componente para usar em outros momentos da aplicação.

// class Home extends React.Component {
//   state = {
//     query: '',
//     searchResult: [],
//     isLoading: false,
//     error: null,
//   };

//   handleInputChange = (event) => {
//     this.setState({ query: event.target.value });
//   };

//   handleSearch = async (categoryId) => {
//     const { query } = this.state;
//     if (query === '' && !categoryId) { // Req.06: incluindo na condição o radio vazio para não retornar nada casa o usuário não realize nenhuma ação!
//     }
//     this.setState({ searchResult: [], isLoading: true, error: null });
//     try {
//       let url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
//       if (categoryId) { // Req.06: adicionando a categoria como parâmetro na busca;
//         url += `&category=${categoryId}`;
//       }
//       const response = await fetch(url);
//       const data = await response.json();
//       this.setState({ searchResult: data.results });
//     } catch (error) {
//       this.setState({ error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };
//   // Req.06: pegando o valor do event p/ passar como parâmetro em handleSearch;

//   handleCategoryChange = (event) => {
//     const categoryId = event.target.value;
//     this.setState({ isLoading: true });
//     this.handleSearch(categoryId);
//   };

//   render() {
//     const { query, searchResult, isLoading, error } = this.state;
//     return (
//       <div>
//         <div>
//           <input type="text" />
//           <p data-testid="home-initial-message">
//             Digite algum termo de pesquisa ou escolha uma categoria.
//           </p>
//         </div>
//         <input
//           type="text"
//           value={ query }
//           onChange={ this.handleInputChange }
//           data-testid="query-input"
//         />
//         <button onClick={ this.handleSearch } data-testid="query-button">
//           Buscar
//         </button>
//         {isLoading && <Loading />}
//         {error && <Loading />}
//         {searchResult.length > 0 ? (
//           <ul>
//             {searchResult.map((product) => (
//               <li key={ product.id } data-testid="product">
//                 <img src={ product.thumbnail } alt={ product.title } />
//                 <p>{product.title}</p>
//                 <p>{product.price}</p>
//                 <Link
//                   to={ `/product/${product.id}` }
//                   className="btn"
//                   data-testid="product-detail-link"
//                 >
//                   Detalhes do Produto
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Nenhum produto foi encontrado</p>
//         )}
//         <Link to="/shopping-cart" data-testid="shopping-cart-button">
//           Ir para o carrinho de compras
//         </Link>
//         <CategoryFor onCategoryChange={ this.handleCategoryChange } />
//       </div>
//     );
//   }
// }
// export default Home;

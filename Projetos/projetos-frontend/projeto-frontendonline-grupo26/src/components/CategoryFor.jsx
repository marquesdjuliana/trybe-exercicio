import React from 'react';
import PropTypes from 'prop-types';

class CategoryFor extends React.Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categories = await response.json();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const { onCategoryChange } = this.props; // Req.06: passando oncategorychange como props;
    return (
      <div>
        <h1>Categoria</h1>
        <form>
          {categories.map((category, index) => (
            <label key={ index } style={ { display: 'flex', alignItems: 'center' } }>
              <input
                type="radio"
                name="category"
                value={ category.id }
                onClick={ (event) => onCategoryChange(event) } // Req.06: recebendo o event como parâmetro;
                data-testid="category"
              />
              { category.name }
            </label>
          ))}
        </form>
      </div>
    );
  }
}

CategoryFor.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFor;

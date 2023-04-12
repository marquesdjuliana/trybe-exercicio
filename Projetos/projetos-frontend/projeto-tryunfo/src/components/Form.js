import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, hasTrunfo,
    } = this.props;

    return (
      <form>
        Form
        <label>
          Nome
          <input
            data-testid="name-input"
            type="text"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label>
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label>
          Attr1
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label>
          Attr2
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label>
          Attr3
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label>
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <select
          data-testid="rare-input"
          name="rare"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        {/* <label>
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label> */}
        {/* deixando p/ requsiito 07 */}
        {hasTrunfo ? (
          <p>Você já tem um Super Trunfo em seu baralho</p>
        )
          : (
            <label htmlFor="trunfo">
              <input
                type="checkbox"
                name="trunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trybe Trunfo
            </label>)}
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;

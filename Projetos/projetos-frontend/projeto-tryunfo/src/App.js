import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      trunfo: false,
      buttonDisabled: true,
      arraySavedCards: [],
      hasTrunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.buttonValidation = this.buttonValidation.bind(this);
    // this.saveCard = this.saveCard.bind(this);
  }

  onInputChange({ target }) {
    // const { name } = target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // this.setState({
    //   [name]: target.type === 'number' ? Number(value) : value,
    // }); ALTERADO
    this.setState(() => ({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }), this.buttonValidation); // callback // chama o validation toda vez que digita
  }

  saveCard = (event) => {
    event.preventDefault();
    const { name, description, attr1, attr2,
      attr3, image, rare, trunfo, hasTrunfo } = this.state;
    const newCard = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
    };
    this.setState((previuousState) => ({
      arraySavedCards: [...previuousState.arraySavedCards, newCard],
      name: '',
      description: '',
      image: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      rare: 'Normal',
      trunfo: false,
      hasTrunfo: trunfo || hasTrunfo,
    }));
  };

  buttonValidation() {
    const {
      name, description, attr1, attr2, attr3, image, rare,
    } = this.state;
    const valueAttrsTotal = 210;
    const maxSize = 90;
    const ruleOne = name && description && image && rare;
    const ruleTow = parseInt(attr1, 10) + parseInt(attr2, 10)
            + parseInt(attr3, 10) <= valueAttrsTotal;
    const ruleThree = attr1 <= maxSize && attr2 <= maxSize && attr3 <= maxSize;
    const ruleFour = attr1 >= 0 && attr2 >= 0 && attr3 >= 0;

    this.setState(() => ({
      buttonDisabled: !(ruleOne && ruleTow
          && ruleThree && ruleFour),
    }));
  }

  render() {
    const {
      name, description, attr1, attr2, attr3, image,
      rare, trunfo, buttonDisabled, hasTrunfo, arraySavedCards,
    } = this.state;

    const myArrayCards = arraySavedCards.map((infoCard) => (
      <Card
        key={ infoCard.name }
        cardName={ infoCard.name }
        cardDescription={ infoCard.description }
        cardAttr1={ infoCard.attr1 }
        cardAttr2={ infoCard.attr2 }
        cardAttr3={ infoCard.attr3 }
        cardImage={ infoCard.image }
        cardRare={ infoCard.rare }
        cardTrunfo={ infoCard.trunfo }
      />
    ));

    return (
      <div>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ buttonDisabled }
          onSaveButtonClick={ this.saveCard }
          hasTrunfo={ hasTrunfo }

        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
        <section>{myArrayCards}</section>
      </div>
    );
  }
}

export default App;

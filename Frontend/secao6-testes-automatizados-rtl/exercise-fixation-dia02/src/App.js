// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
    
    this.fetchJoke = this.fetchJoke.bind(this);
  }

  componentDidMount() {
    this.fetchJoke();
   }
   
   fetchJoke() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } }; // configuração específica da API; nem toda API precisa de passar esse parâmetro pro fetch
    fetch(API_URL, REQUEST_CONFIG)
      .then((response) => response.json()) 
      .then(({ joke }) => this.setState({ joke })); // abreviando p/desestruturação do state como parâmetro; e joke:joke não é necessário
      // .then((data) => this.setState({ joke: data.joke }));
  }

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        <p>{joke}</p>
        <button type="button" onClick={ this.fetchJoke }>New joke</button>
      </div>
    );
  }
}

export default App;
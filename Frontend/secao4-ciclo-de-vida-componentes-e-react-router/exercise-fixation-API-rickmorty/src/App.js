// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        characters: [],
    };
  }

  // fetchCharacters = () => {
  //   fetch('https://rickandmortyapi.com/api/character')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({characters: data.results})
  //   })
  // }
   async fetchCharacters() {
    const response = await fetch ('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    this.setState({ 
      characters: data.results
    })
    // console.log(data);
  }
  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    // console.log(characters);

    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
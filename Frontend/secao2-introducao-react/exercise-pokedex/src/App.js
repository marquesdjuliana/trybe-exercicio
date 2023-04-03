import React from 'react';
import pokemonList from './data';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <section>
        <Pokedex pokemonList={ pokemonList } />
      </section>
    );
  }
}
export default App;

import React from "react";
import Pokemon from "./Pokemon";
import pokemonList from "./data";

class Pokedex extends React.Component {
  render () {
    
    return (
      pokemonList.map(pokemon  => (
        <Pokemon name={pokemon.name} id={pokemon.id}/>

      )));
  }
}

export default Pokedex;
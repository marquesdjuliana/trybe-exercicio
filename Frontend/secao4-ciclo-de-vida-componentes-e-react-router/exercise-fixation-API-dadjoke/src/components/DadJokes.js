import { findAllByAltText } from '@testing-library/react';
import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  // Nesta sintaxe antes do state ser atualizado meu componente já era renderizado de novo. Por isso aparece a piada antiga acima da nova
  // async fetchJoke() {
  //   const requestHeaders = { headers: { Accept: 'application/json' } }
  //   const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
  //   const requestObject = await requestReturn.json();
  //   this.setState({
  //     jokeObj: requestObject,
  //   })
  // }


  // E na sintaxe abaixo: antes dela disparar o state tenho o 'loading: true' -> não quero que renderiza nada enquanto ta carregando/até terminar de fazer o state
  async fetchJoke() {
    this.setState(
      { loading: true }, // primeiro parâmetro;
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false, // quando o loading ficar falso ela faz a renderização na minha RENDERIZAÇÃO CONDICIONAL
          jokeObj: requestObject,
        })
      })
  }
  // OU SEJA, só quando a piada estiver dentro do state que meu componente será renderizado!
  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({storedJokes, jokeObj}) => ({
      storedJokes: [...storedJokes, jokeObj]
    }))
    this.fetchJoke();
  }

  // Opção com push não é a melhor: por quê?
  // saveJoke() {
  //   this.setState(({storedJokes, jokeObj}) => ({
  //     storedJokes: [storedJokes.push(jokeObj)]
  //   }))
  //   this.fetchJoke();
  // }
  renderJokeElement () {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type='button' onClick={this.saveJoke}>Salvar piada!</button>
      </div>
    )
  }
  render() {
    const { storedJokes, loading } = this.state;
    // jokeObj,
    const loadingElement = <span>Loading...</span>;
    console.log('Renderizou!')

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>
        {/* <p>{jokeObj === undefined? loadingElement : jokeObj.joke}</p> */}
        {/* <p>{jokeObj === undefined?  loadingElement : this.renderJokeElement()}</p> */}
        <p>{ loading ?  loadingElement : this.renderJokeElement()}</p>
        {/* <span>Renderização condicional</span> */}
      </div>
    );
  }
}

export default DadJoke;
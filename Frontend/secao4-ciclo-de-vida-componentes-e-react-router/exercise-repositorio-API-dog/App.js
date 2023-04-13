import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrl: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.imageUrl.includes('terrier');
  }

  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('imageUrl', imageUrl);
    const dog = imageUrl.split('/')[4];
    alert(dog);
  }

  fetchDog = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    this.setState({
      imageUrl: data.message,
      isLoading: false,
    });
  };

  render() {
    const { imageUrl, isLoading } = this.state;

    return (
      <>
        <h1>Imagens de Doguinhos</h1>
        { isLoading ? <h2>Loading...</h2>
          : (
            <div>
              <img src={ imageUrl } alt="Doguinho aleatório" />
              <button type="button" onClick={ this.fetchDog }>
                Novo doguinho
              </button>
            </div>) }
      </>
    );
  }
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  state = {
    inputSearch: '',
    isDisable: true,
    albums: '',
    loading: false,
    searchedArtist: '',
  };

  // Requisição da API -> passa valor p/ state
  getAlbumArts = async (event, artistName) => {
    event.preventDefault();
    const waitingTime = 2000;
    this.setState({
      loading: true,
      albums: '',
    });

    setTimeout(async () => {
      const searchAlbums = await searchAlbumsAPI(artistName);
      if (searchAlbums) {
        this.setState({
          albums: searchAlbums,
          loading: false,
          inputSearch: '',
        });
      }
    }, waitingTime);
  };

  // Construíndo o card de álbuns e gerando link
  showAlbums = () => {
    const { albums, searchedArtist } = this.state;
    if (albums.length > 0) {
      return (
        <section className="sectionSearch">
          <h3>{`Resultado de álbuns de: ${searchedArtist}`}</h3>
          {albums.map(({ collectionId, artistName, collectionName, artworkUrl100 }) => (
            <div key={ collectionId } className="cardSearch">
              <img src={ artworkUrl100 } alt="Imagem do Álbum" />
              <h3>{ artistName }</h3>
              <h4>{ collectionName }</h4>
              <Link
                to={ `/album/${collectionId}` }
                className="linkHeader"
                data-testid={ `link-to-album-${collectionId}` }
              >
                <p>Ver álbum</p>
              </Link>
            </div>
          ))}
        </section>
      );
    }
    if (albums && albums.length === 0) {
      return (
        <h3 className="sectionSearch">Nenhum álbum foi encontrado</h3>
      );
    }
  };

  inputSearchChange = ({ target }) => {
    const { value } = target;
    this.setState({
      inputSearch: value,
      searchedArtist: value,
    }, this.validatesBtn);
  };

  // valida BTN caso inputSearch seja >= 2 caracteres
  validatesBtn = () => {
    const { inputSearch } = this.state;
    const lengthMinimum = inputSearch.length >= 2;
    this.setState({
      isDisable: !(lengthMinimum),
    });
  };

  render() {
    const { inputSearch, isDisable, loading } = this.state;
    return (
      <section className="search" data-testid="page-search">
        <Header />
        <div className="divSearch">
          { loading ? (<Loading />) : (
            <form className="formSearch">
              <input
                className="inputSearch"
                data-testid="search-artist-input"
                type="text"
                value={ inputSearch }
                onChange={ this.inputSearchChange }
              />
              <button
                className="buttonSearch"
                data-testid="search-artist-button"
                disabled={ isDisable }
                onClick={ (event) => { this.getAlbumArts(event, inputSearch); } }
              >
                Pesquisar
              </button>
            </form>)}
          {this.showAlbums()}
          {/* renderizando os cards ou exibe frase */}
        </div>
      </section>
    );
  }
}

export default Search;

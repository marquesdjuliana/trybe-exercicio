import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

class Album extends React.Component {
  state = {
    artistName: '',
    albumName: '',
    musics: '',
    favoriteSongs: [],
    loading: false,
  };

  async componentDidMount() {
    await this.getMusicsInfo();
    await this.getFavoriteSongsList();
  }

  getMusicsInfo = async () => {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({ loading: true });
    const getMusicsAlbum = await getMusics(id);
    this.setState({
      artistName: getMusicsAlbum[0].artistName,
      albumName: getMusicsAlbum[0].collectionName,
      musics: getMusicsAlbum.slice(1),
      loading: false,
    });
  };

  getFavoriteSongsList = async () => {
    this.setState({ loading: true });
    const favoriteSongs = await getFavoriteSongs();

    this.setState({
      favoriteSongs,
      loading: false,
    });
  };

  renderMusics = () => {
    const { musics, favoriteSongs, loading } = this.state;
    if (loading) {
      return (
        <Loading />
      );
    }
    if (musics && musics.length > 0) {
      return (
        musics.map((music) => (
          <MusicCard
            key={ music.trackNumber }
            trackId={ music.trackId }
            trackName={ music.trackName }
            previewUrl={ music.previewUrl }
            music={ music }
            favoriteSongs={ favoriteSongs }
          />
        ))
      );
    }
  };

  render() {
    const { albumName, artistName } = this.state;
    return (
      <section className="album" data-testid="page-album">
        <Header />
        <section className="sectionAlbum">
          <h2 data-testid="artist-name">{artistName}</h2>
          <h3 data-testid="album-name">{albumName}</h3>
          <div>{this.renderMusics()}</div>
        </section>
      </section>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;

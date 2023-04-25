// import React from 'react';
// import PropTypes from 'prop-types';
// import { FaHeart } from 'react-icons/fa';
// import Loading from './Loading';
// import { addSong, removeSong } from '../services/favoriteSongsAPI';

// class MusicCard extends React.Component {
//   state = {
//     loading: false,
//     isChecked: false,
//   };

//   async componentDidMount() {
//     const { favoriteSongs, music } = this.props;
//     const isFavorite = favoriteSongs.some(
//       (favoriteMusic) => favoriteMusic.trackId === music.trackId,
//     );
//     this.setState({ isChecked: isFavorite });
//   }

//   handleCheckboxChange = async (event) => {
//     const { trackId, trackName, previewUrl } = this.props;
//     const song = {
//       trackId,
//       trackName,
//       previewUrl,
//     };
//     const { checked } = event.target;
//     console.log(checked);
//     this.setState((prev) => ({ loading: true, isChecked: !prev.isChecked }));
//     if (checked) {
//       await addSong(song);
//     } else {
//       await removeSong(song);
//     }
//     this.setState({ loading: false });
//   };

//   render() {
//     const { trackName, previewUrl, trackId } = this.props;
//     const { loading, isChecked } = this.state;
//     const checkboxId = `checkbox-music-${trackId}`;
//     return (
//       <section>
//         <label htmlFor={ checkboxId }>
//           <FaHeart size={ 18 } color={ isChecked ? 'red' : 'gray' } />
//           <input
//             type="checkbox"
//             id={ checkboxId }
//             data-testid={ checkboxId }
//             onChange={ this.handleCheckboxChange }
//             checked={ isChecked }
//           />
//           <span style={ { marginLeft: 5 } }>{trackName}</span>
//         </label>
//         <audio data-testid="audio-component" src={ previewUrl } controls>
//           <track kind="captions" />
//           O seu navegador não suporta o elemento
//           <code>audio</code>
//           .
//         </audio>
//         {loading && <Loading />}
//       </section>
//     );
//   }
// }

// MusicCard.propTypes = {
//   trackName: PropTypes.string.isRequired,
//   previewUrl: PropTypes.string.isRequired,
//   trackId: PropTypes.number.isRequired,
//   music: PropTypes.shape({
//     trackId: PropTypes.number.isRequired,
//     trackName: PropTypes.string.isRequired,
//     previewUrl: PropTypes.string.isRequired,
//   }).isRequired,
//   favoriteSongs: PropTypes.arrayOf(
//     PropTypes.shape({
//       trackId: PropTypes.number.isRequired,
//       trackName: PropTypes.string.isRequired,
//       previewUrl: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

// export default MusicCard;
import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import Loading from './Loading';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  state = {
    loading: false,
    isChecked: false,
  };

  async componentDidMount() {
    const { favoriteSongs, music } = this.props;
    const isFavorite = favoriteSongs.some(
      (favoriteMusic) => favoriteMusic.trackId === music.trackId,
    );
    this.setState({ isChecked: isFavorite });
  }

  handleHeartClick = async () => {
    const { trackId, trackName, previewUrl } = this.props;
    const song = {
      trackId,
      trackName,
      previewUrl,
    };
    const { isChecked } = this.state;
    console.log(isChecked);
    this.setState({ loading: true });
    if (isChecked) {
      await removeSong(song);
      this.setState({ isChecked: false });
    } else {
      await addSong(song);
      this.setState({ isChecked: true });
    }
    this.setState({ loading: false });
  };

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { loading, isChecked } = this.state;
    const checkboxId = `checkbox-music-${trackId}`;
    return (
      <section>
        <label htmlFor={ checkboxId } onClick={ this.handleHeartClick }>
          <FaHeart size={ 18 } color={ isChecked ? 'red' : 'white' } />
          <div
            style={ { position: 'absolute', opacity: 0, pointerEvents: 'none' } }
          >
            <input
              type="checkbox"
              id={ checkboxId }
              data-testid={ checkboxId }
              onChange={ () => {} }
              checked={ isChecked }
            />
          </div>
          <span style={ { marginLeft: 5 } }>{trackName}</span>
        </label>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        {loading && <Loading />}
      </section>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  music: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }).isRequired,
  favoriteSongs: PropTypes.arrayOf(
    PropTypes.shape({
      trackId: PropTypes.number.isRequired,
      trackName: PropTypes.string.isRequired,
      previewUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MusicCard;

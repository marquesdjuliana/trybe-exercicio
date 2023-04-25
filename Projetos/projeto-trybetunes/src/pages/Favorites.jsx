import React from 'react';
import Header from '../components/Header';

class Favorites extends React.Component {
  render() {
    return (
      <section className="favorites" data-testid="page-favorites">
        <Header />
      </section>
    );
  }
}

export default Favorites;

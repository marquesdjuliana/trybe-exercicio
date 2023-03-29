import React from 'react';
import Image from './Image';
import staringCat from './staringCat.jpg';

class App extends React.Component {
  render() {
    return (
      <>
        <Image source={ staringCat} alternativeText="cute cat staring" />
      </>
    );
  }
}

export default App;


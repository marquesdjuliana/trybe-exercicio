import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planet = planets
      .map((planetInfo) => (<PlanetCard
        key={ planetInfo.name }
        planetName={ planetInfo.name }
        planetImg={ planetInfo.image }
      />));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planet}
      </div>
    );
  }
}
export default SolarSystem;

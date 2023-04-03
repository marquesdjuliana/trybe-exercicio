import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    // const mission = missions;
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map((infos) => (<MissionCard
            key={ infos.name }
            name={ infos.name }
            year={ infos.year }
            country={ infos.country }
            destination={ infos.destination }
          />))
        }
      </div>
    );
  }
}
export default Missions;

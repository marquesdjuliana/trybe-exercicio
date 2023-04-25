import React from 'react';
import Header from '../components/Header';

class Profile extends React.Component {
  render() {
    return (
      <section className="profile" data-testid="page-profile">
        <Header />
      </section>
    );
  }
}

export default Profile;

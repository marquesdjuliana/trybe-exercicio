import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { userex } = this.props;
    return (
      <div>
        <p> { userex.name } </p>
        <p> { userex.email } </p>
        <Image source={ userex.avatar } alternativeText="User avatar" />
      </div>
    );
  }
}


export default UserProfile;
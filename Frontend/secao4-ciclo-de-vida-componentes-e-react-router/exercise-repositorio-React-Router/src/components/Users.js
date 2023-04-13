import React, { Component } from 'react';

class Users extends Component {
  // render() {
  //   const { id } = this.props.match.params
  //   return (
  //     <div>
  //       <h2>Users</h2>
  //       <p> { `${this.props.greetingMessa} User ${id}`}, My awesome Users component </p>
  //     </div>
  //   );
  // }
  render() {
    const {
      greetingMessage = 'Hi There',
      match: { params: { id }
    } } = this.props;

    return (
      <main>
        <h2> Users </h2>
        <p>
        { `${greetingMessage} User ${id}` }, this is my awesome Users component
        </p>
      </main>
    );
  }
};

export default Users;

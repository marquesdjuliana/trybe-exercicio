import React from "react";
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { name, id } = this.props;

    return (
    <div>
    <span className="name">{name}</span>
    <span className="name">{id}</span>
    </div>
    );
  }
}

export default Pokemon;
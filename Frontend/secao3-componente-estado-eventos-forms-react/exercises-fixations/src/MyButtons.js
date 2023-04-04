// src/App.js
import React from 'react';

class MyButtons extends React.Component {
constructor () {
  super()
  this.state = {
    numeroDeCliquesBtn: 0,
    numeroDeCliquesBtn2: 0,
  }
  this.handlerButton1 = this.handlerButton1.bind(this);
  this.handlerButton2 = this.handlerButton2.bind(this);
}
handlerButton1() {
  this.setState((cliques) => ({
    numeroDeCliquesBtn: cliques.numeroDeCliquesBtn + 1,
  }))
}
handlerButton2() {
  this.setState((cliques) => ({
    numeroDeCliquesBtn2: cliques.numeroDeCliquesBtn2 + 1,
  }))
}
  render() {
    const { numeroDeCliquesBtn, numeroDeCliquesBtn2 } = this.state;
  return( 
    <>
    <button onClick={this.handlerButton1}>{ numeroDeCliquesBtn }</button>
    <button onClick={this.handlerButton2}>{ numeroDeCliquesBtn2 }</button>
    </>
  );
}
}

export default MyButtons;
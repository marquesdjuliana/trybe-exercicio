// src/App.js
import React from 'react';

class MyButtons extends React.Component {
constructor () {
  super()
  this.state = {
    numeroDeCliquesBtn1: 0,
    numeroDeCliquesBtn2: 0,
  }
  this.handlerButton1 = this.handlerButton1.bind(this);
  this.handlerButton2 = this.handlerButton2.bind(this);
}
handlerButton1() {
  const { numeroDeCliquesBtn1 } = this.state;
  this.setState((cliques) => ({
    numeroDeCliquesBtn1: cliques.numeroDeCliquesBtn1 + 1,
  }), () => {
    console.log(`botão 1: ${this.getButtonColor(numeroDeCliquesBtn1)}`)
  });
}
handlerButton2() {
  const { numeroDeCliquesBtn2 } = this.state;
  this.setState((cliques) => ({
    numeroDeCliquesBtn2: cliques.numeroDeCliquesBtn2 + 1,
  }), () => {
    console.log(`botão 2: ${this.getButtonColor(numeroDeCliquesBtn2)}`)
  });
}

getButtonColor(num) {
  if(num % 2 === 0){
    return `green`
  } 
  return `pink`;
  
  // return num % 2 === 0 ? 'green' : 'pink';
}
  render() {
    const { numeroDeCliquesBtn1, numeroDeCliquesBtn2 } = this.state;
  return( 
    <>
    <button 
    onClick={this.handlerButton1}  
    style={ { backgroundColor: this.getButtonColor(numeroDeCliquesBtn1) } }
    >{ numeroDeCliquesBtn1 }</button>

    <button 
    onClick={this.handlerButton2}  
    style={ { backgroundColor: this.getButtonColor(numeroDeCliquesBtn2) } }
    >{ numeroDeCliquesBtn2 }</button>
    </>
  );
}
}

export default MyButtons;
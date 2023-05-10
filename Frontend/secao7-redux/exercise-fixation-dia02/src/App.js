import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';

class App extends React.Component {
  render() {
    const { dispatch, countState } = this.props; // desistruturar em forma de props
    return (
      <div>
        <h1>Contador</h1>
        <h2>{countState}</h2> 
        {/* renderizando o estado */}
        <button onClick={() => dispatch(actionCreator())}>Incrementa 1</button>
        <button onClick={() => dispatch(actionCreator(5))}>Incrementa 5</button>
      </div>
    );
  }
}
// função definida fora do escopo da classe do componente:
// const mapStateToProps = (state) => ({
//   countState: state.count,
// });

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
});

export default connect(mapStateToProps)(App);
// O parâmetro de connect mapeia o que tem no estado global;
// De forma que o que se tem no estado global vire props pro componente; 
// até estou lendo as informações do estado e renderizando na linha 10!
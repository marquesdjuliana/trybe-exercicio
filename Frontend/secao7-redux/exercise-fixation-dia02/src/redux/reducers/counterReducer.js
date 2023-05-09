const INITIAL_STATE = {
  clicks: 0,
  count: 0,
};

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      // return { count: state.count + 1 };
      return { 
        ...state,
        count: state.count + action.payload }; // ajustando para a função reducer incrementar de acordo com o valor recebido pela chave payload
    default:
      return state;
  }
}

// A função reducer recebe como parâmetro o estado inicial e uma action. 
// A action sempre retornará um objeto com a chave type, que informa qual ação deve ser feita no estado. 
// Verifica se a ação é INCREMENT_COUNTER. 
// Em caso positivo, ele irá incrementar o valor da chave count, que está no estado global, em 1.
export default counterReducer;

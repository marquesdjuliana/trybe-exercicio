import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

// I -criando o reducer com o estado inicial
const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action) =>{
  if (action.type === "INCREMENT_COUNTER") {
    return { count: state.count + 1}
  }
  return state;
}
// II - criando a store já com o Redux dev tools
const store = createStore(reducer, composeWithDevTools());

// III -crianodo a action
const action = {type: "INCREMENT_COUNTER"};

// IV - disparando a action
const incrementeButton = document.querySelector("button");
incrementeButton.addEventListener("click", () => {
  // console.log("click")
  store.dispatch(action); // até aqui só vejo a alteração do state através da extensão no navegador DevTools
})


// V - lendo as alterações no estado e renderizando:
// integração entre o estado da aplicação e o elemento na tela:
store.subscribe(() => {
  const globalState = store.getState();
  // console.log(globalState); // retorna um objeto com a contagem/atualização do estado
  // console.log("o estado foi alterado"); // vendo no console; "ouvindo" toda vez que o estado da minha app foi alterado 
  const counterElement = document.querySelector("h2");
  counterElement.innerHTML = globalState.count;

})
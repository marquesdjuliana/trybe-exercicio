import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from './reducers';  // importando combineReducer
const store = createStore(rootReducer, composeWithDevTools());

// import counterReducer from './reducers/counterReducer'; aqui sem reducers combinadas
// const store = createStore(counterReducer, composeWithDevTools());



export default store;
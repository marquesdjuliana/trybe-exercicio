import { combineReducers } from 'redux';
import { PROFESSIONAL_FORM_SUBMIT, PERSONAL_FORM_SUBIMT } from '../actions';

const INITIAL_STATE = {
  personalData: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  },
  professionalData: {
    resume: '',
    role: '',
    description: '',
  },
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFESSIONAL_FORM_SUBMIT:
    return { ...state, professionalData: { ...action.payload } };
  case PERSONAL_FORM_SUBIMT:
    return { ...state, personalData: { ...action.payload } };
  default:
    return state;
  }
};

const rootReducer = combineReducers({ profileReducer });

export default rootReducer;

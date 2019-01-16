import { NAME_CHANGED, NUMBER_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from '../actions/types';

const INITITAL_STATE = {
  name: '',
  number: '',
  user: null,
  errorMessage: null,
  successMessage: null,
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case NUMBER_CHANGED:
      return { ...state, number: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, errorMessage: null };
    case LOGIN_USER_FAILURE:
      return { ...state, errorMessage: action.payload };
    case CREATE_USER_SUCCESS:
      return { ...state, user: action.payload, errorMessage: null };
    case CREATE_USER_FAILURE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
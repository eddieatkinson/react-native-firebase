import { NAME_CHANGED, NUMBER_CHANGED, INFO_CREATE, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from '../actions/types';

const INITITAL_STATE = {
  name: '',
  number: '',
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case NUMBER_CHANGED:
      return { ...state, number: action.payload };
    case INFO_CREATE:
      return INITITAL_STATE;
    default:
      return state;
  }
}
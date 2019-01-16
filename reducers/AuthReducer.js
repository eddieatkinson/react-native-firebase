import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, CREATE_USER_SUCCESS, CREATE_USER_FAILURE, LOGOUT_USER } from '../actions/types';

const INITITAL_STATE = {
  loading: false,
  email: '',
  password: '',
  user: null,
  errorMessage: null,
  successMessage: null,
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true }
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, errorMessage: null };
    case LOGIN_USER_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    case CREATE_USER_SUCCESS:
      return { ...state, user: action.payload, errorMessage: null };
    case CREATE_USER_FAILURE:
      return { ...state, errorMessage: action.payload };
    case LOGOUT_USER:
      return INITITAL_STATE;
    default:
      return state;
  }
}
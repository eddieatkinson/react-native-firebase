import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import InfoReducer from './InfoReducer';

export default combineReducers({
  auth: AuthReducer,
  info: InfoReducer,
});
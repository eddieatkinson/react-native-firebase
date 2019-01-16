import firebase from 'firebase';
import { NAME_CHANGED, NUMBER_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from './types';

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text,
  };
};

export const numberChanged = (text) => {
  return {
    type: NUMBER_CHANGED,
    payload: text,
  };
};

// export const loginUser = ({ email, password }) => {
//   return (dispatch) => {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(user => {
//         const { uid } = user.user;
//         setItem('myUid', uid);
//         dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
//       })
//       .catch((error) => {
//         console.log(error);
//         const payload = 'The information you have provided is incorrect.';
//         dispatch({ type: LOGIN_USER_FAILURE, payload });
//       });
//   }
// }

// export const createUser = ({ email, password }) => {
//   return (dispatch) => {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then(user => {
//         dispatch({ type: CREATE_USER_SUCCESS, payload: user });
//       })
//       .catch((error) => {
//         const payload = error.toString();
//         dispatch({ type: CREATE_USER_FAILURE, payload });
//       });
//   }
// }

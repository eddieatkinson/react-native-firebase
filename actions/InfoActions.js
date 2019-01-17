import firebase from 'firebase';
import { forOwn } from 'lodash';
import { NAME_CHANGED, NUMBER_CHANGED, INFO_CREATE, LOGIN_USER_FAILURE, CREATE_USER_SUCCESS, CREATE_USER_FAILURE, INFO_FETCH } from './types';

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

export const infoSubmitted = ({name, number}) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/info`)
      .push({ name, number })
      .then((response) => {
        console.log(response);
        dispatch({type: INFO_CREATE})
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const infoFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/info`)
      .on('value', snapshot => {
        const info = snapshot.val();
        let infoArray = [];
        // console.log(snapshot.val());
        forOwn(info, (value, key) => {
          // console.log(value);
          // console.log(key);
          infoArray.push({...value, uid: key});
        });
        // console.log(infoArray);
        dispatch({type: INFO_FETCH, payload: infoArray});
      });
  }
}

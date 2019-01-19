import firebase from 'firebase';
import { forOwn } from 'lodash';
import { NAME_CHANGED, NUMBER_CHANGED, INFO_CREATE, INFO_FETCH, INFO_DELETE } from './types';

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
  const active = true;
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/info`)
      .push({ name, number, active })
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
        forOwn(info, (value, key) => {
          if (value.active) {
            infoArray.push({...value, uid: key});
          }
        });
        dispatch({type: INFO_FETCH, payload: infoArray});
      });
  }
}

export const deleteInfo = (uid) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/info/${uid}`)
      .update({active: false}, (error) => {
        if (error) {
          console.log(error);
        } else {
          dispatch({type: INFO_DELETE})
        }
      });
  }
}

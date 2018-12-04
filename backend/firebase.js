import * as firebase from 'firebase';
import { includes } from 'lodash';

export function initializeApp() {
  if (!firebase.apps.length) {
    firebase.initializeApp(ApiKeys.firebaseConfig);
  }
}

export function createUser(email, password) {
  if (password.length < 6) {
    alert('Password must contain al least 6 characters!');
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => console.log(response))
    .catch((error) => {
      if (includes(error.toString(), 'The email address is badly formatted')) {
        alert('Please provide a valid email.');
      } else {
        alert(error.toString());
      }
    });
}

export function loginUser(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => console.log(response))
    .catch((error) => {
      if (includes(error.toString(), 'The email address is badly formatted')) {
        alert('Please provide a valid email.');
      } else if (includes(error.toString(), 'The password is invalid or the user does not have a password')) {
        alert('Your password is incorrect.');
      } else if (includes(error.toString(), 'There is no user record corresponding to this identifier')){
        alert('There is no user associated with this email.');
      } else {
        alert(error.toString());
        console.log(error.toString());
      }
    });
}

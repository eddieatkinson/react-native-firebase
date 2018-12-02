import * as firebase from 'firebase';

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
      // if (error)
      console.log(error)
    });
}

export function loginUser(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response);
    });
}

import { AsyncStorage } from 'react-native';

export function setItem(key, value) {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, value)
      .then(() => resolve())
      .catch(error => reject(error));
  });
}

export function getItem(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)    
      .then((response) => {
        console.log(response);
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function removeItem(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem(key)
      .then(() => resolve())
      .catch(error => reject(error));
  });
}
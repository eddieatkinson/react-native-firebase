import { AsyncStorage } from 'react-native';

export function setItem(key, value) {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, value)
      .then(() => resolve())
      .catch(error => reject(error));
  });
}
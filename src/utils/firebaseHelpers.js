import * as firebase from 'firebase';

// const db = firebase.database();

export const register = data => {
  firebase.database().ref('registrations').push(data).then(res => {
    return res;
  }, err => {
    return err;
  })
}

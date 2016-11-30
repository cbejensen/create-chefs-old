import * as firebase from 'firebase';

// const db = firebase.database();

export const register = data => {
  firebase.database().ref('registrations').push(data).then(res => {
    return res;
  }, err => {
    return err;
  })
}

export const getClasses = () => {
  const ref = firebase.database().ref('classes');
  return ref.once('value').then(snap => {
    return snap.val();
  }, err => {
    return err;
  })
}

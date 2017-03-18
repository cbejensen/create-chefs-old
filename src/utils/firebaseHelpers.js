import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDtJa1TM6SJcNPMfrNcyp8EhjQx9OWFdDo',
  authDomain: 'createchefs.firebaseapp.com',
  databaseURL: 'https://createchefs.firebaseio.com',
  storageBucket: 'createchefs.appspot.com',
  messagingSenderId: '985125118577',
};
firebase.initializeApp(config);

const db = firebase.database();

export const createUser = user => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(auth => {
      delete user.password;
      return db
        .ref(`users/${auth.uid}`)
        .set(user)
        .then(newUser => {
          return 'success';
        })
        .catch(err => {
          throw err;
        });
    })
    .catch(err => {
      throw err;
    });
};

export const register = data => {
  return db
    .ref('registrations')
    .push(data)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const getClasses = () => {
  return db
    .ref('classes')
    .once('value')
    .then(snap => {
      return snap.val();
    })
    .catch(err => {
      return err;
    });
};

// images via firebase storage
// const imgRef = firebase.storage().ref('images');
//
// export const getImg = img => {
//   imgRef.child(img).getDownloadURL().then(url => {
//     return url;
//   }, err => {
//     return err;
//   });
// }

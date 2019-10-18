import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDtJa1TM6SJcNPMfrNcyp8EhjQx9OWFdDo',
  authDomain: 'createchefs.firebaseapp.com',
  databaseURL: 'https://createchefs.firebaseio.com',
  storageBucket: 'createchefs.appspot.com',
  messagingSenderId: '985125118577',
}
firebase.initializeApp(config)

const db = firebase.database()

// const storage = firebase.storage()
// const storageRef = storage.ref()
// const imagesRef = storageRef.child('images')

export const createUser = user => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(auth => {
      delete user.password
      delete user.email
      return db
        .ref(`users/${auth.uid}`)
        .set(user)
        .then(newUser => {
          return 'success'
        })
        .catch(err => {
          throw err
        })
    })
    .catch(err => {
      throw err
    })
}

export const addChild = (uid, firstName, lastName) => {
  const child = {
    firstName: firstName,
    lastName: lastName,
    parent: uid,
  }
  const userChildrenPath = `users/${uid}/children`
  const childId = db.ref(userChildrenPath).push().key
  let updates = {}
  updates[`${userChildrenPath}/${childId}`] = childId
  updates[`children/${childId}`] = child
  firebase
    .database()
    .ref()
    .update(updates)
}

export const getClasses = () => {
  return db
    .ref('classes')
    .once('value')
    .then(snap => snap.val())
    .catch(err => {
      return err
    })
}

export const deleteChild = (childId, uid) => {
  const childPath = `children/${childId}`
  const parentPath = `users/${uid}/children/${childId}`
  return db
    .ref(childPath)
    .remove()
    .then(res => {
      return db
        .ref(parentPath)
        .remove()
        .then(res => true)
        .catch(err => {
          console.log(err)
          return false
        })
    })
    .catch(err => {
      console.log(err)
      return false
    })
}

// export const getImages = () => {
//   imagesRef.listAll().then(res => {
//     console.log(res)
//   })
// }

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDtVelB9-MjWyJCpmluPiGLgNReztq3zDE',
  authDomain: 'react-eshop-db.firebaseapp.com',
  databaseURL: 'https://react-eshop-db.firebaseio.com',
  projectId: 'react-eshop-db',
  storageBucket: 'react-eshop-db.appspot.com',
  messagingSenderId: '887267216915',
  appId: '1:887267216915:web:2d2ac8655fc542b312f9e6'
}

firebase.initializeApp(config)

const auth = firebase.auth()
const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

const signInWithGoogle = () => auth.signInWithPopup(provider)
export {
  auth,
  firestore,
  signInWithGoogle
}

export default firebase

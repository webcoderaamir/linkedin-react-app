import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2wEHKiAsN9vkioGB6VSTFk3Me_5fLnfw",
  authDomain: "linkedin-react-app-c789a.firebaseapp.com",
  projectId: "linkedin-react-app-c789a",
  storageBucket: "linkedin-react-app-c789a.appspot.com",
  messagingSenderId: "328025173504",
  appId: "1:328025173504:web:aaec61e89c3691bba472e5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
export default firebase;
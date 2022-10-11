import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC6OjzFGTPMKK_PJZ52MEo1uiGjriJ0wos",
  authDomain: "clone-d9201.firebaseapp.com",
  projectId: "clone-d9201",
  storageBucket: "clone-d9201.appspot.com",
  messagingSenderId: "532935670891",
  appId: "1:532935670891:web:5290edc5252874d8abc52e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

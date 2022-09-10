import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDsXubB7maMRxqFaC4TU1qTx9aNrru3jP8",
  authDomain: "linked-clone-codey.firebaseapp.com",
  projectId: "linked-clone-codey",
  storageBucket: "linked-clone-codey.appspot.com",
  messagingSenderId: "740722936857",
  appId: "1:740722936857:web:948b648b8cc295a141ee88"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

// REF https://firebase.google.com/docs/web/setup?authuser=0&hl=en




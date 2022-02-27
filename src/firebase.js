import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXHH84b6dL-u71J7cJ887-v_dgPkBWj1U",
  authDomain: "clone-33bad.firebaseapp.com",
  projectId: "clone-33bad",
  storageBucket: "clone-33bad.appspot.com",
  messagingSenderId: "37248140103",
  appId: "1:37248140103:web:2c17c1cd83dfac7f2b8262",
  measurementId: "G-ECXJVGKMQJ"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export{ db,auth};
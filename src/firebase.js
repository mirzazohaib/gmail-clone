import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx8moZuHYMP28YetqcTGmjjdLfetUdSlA",
  authDomain: "clone-5b23b.firebaseapp.com",
  projectId: "clone-5b23b",
  storageBucket: "clone-5b23b.appspot.com",
  messagingSenderId: "43136324747",
  appId: "1:43136324747:web:6a5b35bcd36a4e1960308e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

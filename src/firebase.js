import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyBVQHEyHmNxtffRhdo3JKb-IrJoy26jLWk",
  authDomain: "firechat-6fd8d.firebaseapp.com",
  projectId: "firechat-6fd8d",
  storageBucket: "firechat-6fd8d.appspot.com",
  messagingSenderId: "326964241423",
  appId: "1:326964241423:web:9318a4e20b57494aa9af7a",
  measurementId: "G-BXSJTR4N99",
});

const db = firebaseapp.firestore();

const auth = firebase.auth();

export { db, auth };

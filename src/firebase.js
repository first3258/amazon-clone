import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiUkDFpg9_cDQLqCOXqaBY1iMmgdnmVdg",
    authDomain: "challenge-c0355.firebaseapp.com",
    projectId: "challenge-c0355",
    storageBucket: "challenge-c0355.appspot.com",
    messagingSenderId: "239611729335",
    appId: "1:239611729335:web:45278c9a2ea425f5904432",
    measurementId: "G-2K8P5VMT2P"
  };


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
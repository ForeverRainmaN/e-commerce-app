import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBLeNPGr8oBzQUUPz8ik33EZq_IWxwM8jE",
    authDomain: "e-commerce-app-4927c.firebaseapp.com",
    projectId: "e-commerce-app-4927c",
    storageBucket: "e-commerce-app-4927c.appspot.com",
    messagingSenderId: "306352141165",
    appId: "1:306352141165:web:fa9eba69fe83a209246064",
    measurementId: "G-BYQ3712303"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export type User = firebase.User;
export type Unsubscribe = firebase.Unsubscribe
export default firebase;

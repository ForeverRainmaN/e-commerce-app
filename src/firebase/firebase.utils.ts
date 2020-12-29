import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

type FirebaseConfig = {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string
}

const config: Readonly<FirebaseConfig> = {
    apiKey: "AIzaSyBLeNPGr8oBzQUUPz8ik33EZq_IWxwM8jE",
    authDomain: "e-commerce-app-4927c.firebaseapp.com",
    projectId: "e-commerce-app-4927c",
    storageBucket: "e-commerce-app-4927c.appspot.com",
    messagingSenderId: "306352141165",
    appId: "1:306352141165:web:fa9eba69fe83a209246064",
    measurementId: "G-BYQ3712303"
};

export const createUserProfileDocument:
    (userAuth: FirebaseUser, additionalData?: {}) =>
        Promise<DocRef> =
    async (userAuth: FirebaseUser, additionalData?: {}) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if (!snapShot.exists) {
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error) {
                console.log('error creating user', error.message);
            }
        }
        return userRef;
    }

firebase.initializeApp(config);

export const auth: firebase.auth.Auth = firebase.auth();
export const firestore: firebase.firestore.Firestore = firebase.firestore();

const provider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle: () => Promise<firebase.auth.UserCredential> = () => auth.signInWithPopup(provider);

export type DocRef = undefined | firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
export type FirebaseUser = firebase.User | null;
export type Unsubscribe = firebase.Unsubscribe
export default firebase;

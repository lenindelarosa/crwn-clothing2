import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCYaqgJbl72R_qZLtc2O9HmjP9X8-1am10",
    authDomain: "crwn-db-e31fa.firebaseapp.com",
    projectId: "crwn-db-e31fa",
    storageBucket: "crwn-db-e31fa.appspot.com",
    messagingSenderId: "132540789602",
    appId: "1:132540789602:web:34f3120da7eb8fb6e2f23b",
    measurementId: "G-DH0ZCDM5KE"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ 
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const crearUserDocumentFromAuth = async (userAuth) => {
  const userDocRef =  doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }
    catch (error) {
      console.log('Error creating the user', error.message);
    }
  }
}


/*
  export const createUserProfiledocument = async (userAuth, additionalData)=> {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt =  new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
*/
  export default firebase;
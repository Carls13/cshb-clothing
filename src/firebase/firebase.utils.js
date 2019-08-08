import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWfjxdzP7Ed5p5Tdz-6c1TqXo_qN0Sva4",
    authDomain: "cshb-clothing.firebaseapp.com",
    databaseURL: "https://cshb-clothing.firebaseio.com",
    projectId: "cshb-clothing",
    storageBucket: "",
    messagingSenderId: "695140508810",
    appId: "1:695140508810:web:6ad46c7fb4a71d75"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
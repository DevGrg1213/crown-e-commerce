import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV68cuV6Fy3NA9tR2C1rNavapJKBF_T84",
  authDomain: "crown-clothing-ba4a7.firebaseapp.com",
  projectId: "crown-clothing-ba4a7",
  storageBucket: "crown-clothing-ba4a7.appspot.com",
  messagingSenderId: "888659586737",
  appId: "1:888659586737:web:015e70edf608b77528bc90",
  measurementId: "G-RGXCSHTQEM",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

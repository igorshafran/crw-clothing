import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCOL0n9WtXPOXprxZrAx_qVAKTWxKRs5aY",
  authDomain: "crwn-db-c7da4.firebaseapp.com",
  databaseURL: "https://crwn-db-c7da4.firebaseio.com",
  projectId: "crwn-db-c7da4",
  storageBucket: "crwn-db-c7da4.appspot.com",
  messagingSenderId: "360688468627",
  appId: "1:360688468627:web:010d854b924dc7b6834366"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

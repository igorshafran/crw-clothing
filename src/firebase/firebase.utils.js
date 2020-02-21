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

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export default firebase;

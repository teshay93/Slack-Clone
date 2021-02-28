import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACUec9tX4AJ-AuOEggVRG6AGri3R4UNCQ",
  authDomain: "slack-clone-challenge-592db.firebaseapp.com",
  projectId: "slack-clone-challenge-592db",
  storageBucket: "slack-clone-challenge-592db.appspot.com",
  messagingSenderId: "855534266335",
  appId: "1:855534266335:web:28048a38a85d67a492466a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

//Google Sign-in authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

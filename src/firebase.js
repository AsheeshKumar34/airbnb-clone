import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCwDjhr_U6h3wQgtbcj-pifrG2D8H1Ifvk",
  authDomain: "airbnb-clone-e67b3.firebaseapp.com",
  databaseURL: "https://airbnb-clone-e67b3.firebaseio.com",
  projectId: "airbnb-clone-e67b3",
  storageBucket: "airbnb-clone-e67b3.appspot.com",
  messagingSenderId: "410994342871",
  appId: "1:410994342871:web:00e06730fea77424d42992",
  measurementId: "G-GZ818ZWB24"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

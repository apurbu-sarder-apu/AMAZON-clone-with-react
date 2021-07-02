import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBZf7gVL9ew_QN-nqsMmEN-_DKQ6K8-JJI",
    authDomain: "challenge-a5dc5.firebaseapp.com",
    databaseURL: "https://challenge-a5dc5-default-rtdb.firebaseio.com/",
    projectId: "challenge-a5dc5",
    storageBucket: "challenge-a5dc5.appspot.com",
    messagingSenderId: "849830327929",
    appId: "1:849830327929:web:7f9a0e150e2d9c833286a8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
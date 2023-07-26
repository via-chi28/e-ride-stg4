import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyDKDeJTEwYb3NqCXeJu3ogXMD7RW9ONwm0",
  authDomain: "e-ride-stg4.firebaseapp.com",
  projectId: "e-ride-stg4",
  storageBucket: "e-ride-stg4.appspot.com",
  messagingSenderId: "595416782120",
  appId: "1:595416782120:web:4fdb8520cedc26f1abac1d"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

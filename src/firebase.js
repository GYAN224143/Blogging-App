import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBe6s0kpXkXviGVJVlM1Ze3sJIUNGcajaw",
  authDomain: "react-hooks-873ca.firebaseapp.com",
  projectId: "react-hooks-873ca",
  storageBucket: "react-hooks-873ca.appspot.com",
  messagingSenderId: "794921135584",
  appId: "1:794921135584:web:3bb68ed680f73b12988f85",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

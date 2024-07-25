// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqtnYocpGD-FpOG5-a13B7cK54xT0r4ic",
  authDomain: "watchlist-f5b54.firebaseapp.com",
  projectId: "watchlist-f5b54",
  storageBucket: "watchlist-f5b54.appspot.com",
  messagingSenderId: "670542622389",
  appId: "1:670542622389:web:b72acd2426069c292f18fc",
  measurementId: "G-0F7889RVSG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };

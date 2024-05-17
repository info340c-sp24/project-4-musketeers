// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHi0vaDjbtI2M9IOF0afct3adv07i1TiE",
  authDomain: "fourmusketeers-102431.firebaseapp.com",
  databaseURL: "https://fourmusketeers-102431-default-rtdb.firebaseio.com",
  projectId: "fourmusketeers-102431",
  storageBucket: "fourmusketeers-102431.appspot.com",
  messagingSenderId: "492158954689",
  appId: "1:492158954689:web:a92457b726ad35271a7840",
  measurementId: "G-BJKMTWHXXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
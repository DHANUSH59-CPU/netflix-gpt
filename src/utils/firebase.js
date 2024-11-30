// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl8ciTZw49QyZaROQ5Uf7b-aDP6xR92-k",
  authDomain: "netflixgpt-2010b.firebaseapp.com",
  projectId: "netflixgpt-2010b",
  storageBucket: "netflixgpt-2010b.firebasestorage.app",
  messagingSenderId: "84073631401",
  appId: "1:84073631401:web:c50944023daf16440463b8",
  measurementId: "G-S703Q3LBF3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

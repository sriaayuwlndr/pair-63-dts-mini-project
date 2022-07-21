// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "miniproject-9351a.firebaseapp.com",
  projectId: "miniproject-9351a",
  storageBucket: "miniproject-9351a.appspot.com",
  messagingSenderId: "550826794776",
  appId: "1:550826794776:web:ba5abac64959a445da886d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
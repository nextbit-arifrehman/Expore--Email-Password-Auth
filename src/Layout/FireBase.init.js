// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqGU5xCFNyzT-RrEOehNXbvomO_RkCscw",
  authDomain: "expore-email-password-auth.firebaseapp.com",
  projectId: "expore-email-password-auth",
  storageBucket: "expore-email-password-auth.firebasestorage.app",
  messagingSenderId: "981108732036",
  appId: "1:981108732036:web:398ed6dedaf907316f92d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
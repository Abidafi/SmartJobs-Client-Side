// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3YKwaWYtDs4husn4zydUiignKrY5csps",
  authDomain: "smartjobs-9a402.firebaseapp.com",
  projectId: "smartjobs-9a402",
  storageBucket: "smartjobs-9a402.firebasestorage.app",
  messagingSenderId: "353127732148",
  appId: "1:353127732148:web:f3b6393f607d04121c58e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
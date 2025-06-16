// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtL5ea4SZcO6bmscWVG-kxqASvqJrlmbw",
  authDomain: "restuarent-client-259d0.firebaseapp.com",
  projectId: "restuarent-client-259d0",
  storageBucket: "restuarent-client-259d0.firebasestorage.app",
  messagingSenderId: "936017786812",
  appId: "1:936017786812:web:d03ba4e9bae4aa43041db9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOQnCLuqqpDWaL6cFVB1ZzVvjM9CWExtQ",
  authDomain: "art-and-craft-store-2f554.firebaseapp.com",
  projectId: "art-and-craft-store-2f554",
  storageBucket: "art-and-craft-store-2f554.appspot.com",
  messagingSenderId: "788636725649",
  appId: "1:788636725649:web:138a0647ceb7b70af3ea30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
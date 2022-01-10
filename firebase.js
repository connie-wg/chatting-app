// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { } from 'firebase/auth';
import { } from 'firebase/database';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFhR2Wc3MkGHLO0HhPtrVAUfspkql65qQ",
  authDomain: "chatting-app-e9b1a.firebaseapp.com",
  projectId: "chatting-app-e9b1a",
  storageBucket: "chatting-app-e9b1a.appspot.com",
  messagingSenderId: "1023538840222",
  appId: "1:1023538840222:web:076c96bcd8a14a6170718f",
  measurementId: "G-W51YQHRYCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWqlFCPnnlnipwu-gRCdeKMx2WlgI-KUE",
  authDomain: "wave-2100c.firebaseapp.com",
  projectId: "wave-2100c",
  storageBucket: "wave-2100c.firebasestorage.app",
  messagingSenderId: "119457554204",
  appId: "1:119457554204:web:2b6e2da1644f9ab99264d9",
  measurementId: "G-R7NPCYHRK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

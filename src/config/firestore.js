// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHnjzY1SOaRxaiiPHirlX6uPonFvBUJIg",
  authDomain: "codeapp-bad78.firebaseapp.com",
  projectId: "codeapp-bad78",
  storageBucket: "codeapp-bad78.appspot.com",
  messagingSenderId: "509710780877",
  appId: "1:509710780877:web:005fa01fe684b002f6dc84",
  measurementId: "G-7G2LKJNC3Q"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
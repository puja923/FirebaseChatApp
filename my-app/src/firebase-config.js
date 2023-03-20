// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmGHliCpy6uMclV5ceey_rGnGY0cFsdbs",
  authDomain: "chat-app1-e5d24.firebaseapp.com",
  projectId: "chat-app1-e5d24",
  storageBucket: "chat-app1-e5d24.appspot.com",
  messagingSenderId: "394695648499",
  appId: "1:394695648499:web:9686a31adf07df3dce4386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
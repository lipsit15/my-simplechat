// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCveJuoLJJEcyBZ_piIChKy4WbiQ1ZSlBA",
  authDomain: "simplechatapp-7149a.firebaseapp.com",
  projectId: "simplechatapp-7149a",
  storageBucket: "simplechatapp-7149a.appspot.com",
  messagingSenderId: "115367919073",
  appId: "1:115367919073:web:114ec0a49a6bfcf4e326a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
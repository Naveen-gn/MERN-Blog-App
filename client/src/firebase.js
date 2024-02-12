// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d46e0.firebaseapp.com",
  projectId: "mern-blog-d46e0",
  storageBucket: "mern-blog-d46e0.appspot.com",
  messagingSenderId: "151871315259",
  appId: "1:151871315259:web:061e0939c784ff1606ab1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
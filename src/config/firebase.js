import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc1xMUMzijBKi1UcsZnfF6obvhRjqbKmY",
  authDomain: "url-shortner-2f404.firebaseapp.com",
  projectId: "url-shortner-2f404",
  storageBucket: "url-shortner-2f404.appspot.com",
  messagingSenderId: "403793588022",
  appId: "1:403793588022:web:ce19e172147182629f8d97",
  measurementId: "G-FFN0F7EPZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

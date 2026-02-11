import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEkuGRp0GvdMMo7m1oHSLGhcdcEFyDslk",
  authDomain: "kurs-7966f.firebaseapp.com",
  projectId: "kurs-7966f",
  storageBucket: "kurs-7966f.firebasestorage.app",
  messagingSenderId: "119108481107",
  appId: "1:119108481107:web:b6ae62c5c851be7b4b96a6",
  measurementId: "G-BNE6YGLL4G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Birbaşa API key (test üçün)
export const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;

export { 
  auth, 
  db,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut
};

export default app;
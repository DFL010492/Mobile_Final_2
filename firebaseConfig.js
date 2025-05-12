// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6-sZJiJGfBJytgl6baRUUT53yHF-b870",
  authDomain: "dcmobile-1417a.firebaseapp.com",
  projectId: "dcmobile-1417a",
  storageBucket: "dcmobile-1417a.firebasestorage.app", // corrigi o ".app" que estava errado
  messagingSenderId: "704307290635",
  appId: "1:704307290635:web:670ad17ee8cd5fdfaadd0e",
  measurementId: "G-T9BV9HQDM3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

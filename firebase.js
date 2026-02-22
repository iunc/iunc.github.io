import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBuBHbln6bqYn9SpwOC2eDke3JJ32nE7vs",
  authDomain: "iunc-login.firebaseapp.com",
  projectId: "iunc-login",
  storageBucket: "iunc-login.firebasestorage.app",
  messagingSenderId: "359473829379",
  appId: "1:359473829379:web:b1102278155f598e316036",
  measurementId: "G-79M0B1KJW5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

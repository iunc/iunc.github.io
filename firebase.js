import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "DÁN_API_KEY_CỦA_BẠN",
  authDomain: "DÁN_AUTH_DOMAIN",
  projectId: "DÁN_PROJECT_ID",
  storageBucket: "DÁN_STORAGE_BUCKET",
  messagingSenderId: "DÁN_SENDER_ID",
  appId: "DÁN_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

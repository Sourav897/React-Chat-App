import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEWV6uZR5Ov5RjgaywPditHL-aY9jpxR4",
  authDomain: "chat-27581.firebaseapp.com",
  projectId: "chat-27581",
  storageBucket: "chat-27581.appspot.com",
  messagingSenderId: "54657425423",
  appId: "1:54657425423:web:b534aef7d4f4108a06837a",
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

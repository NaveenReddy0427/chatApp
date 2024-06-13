import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOLJ87GdhDgT-xmMOVwzAF9vo6seb9AK0",
  authDomain: "chatapp-fd976.firebaseapp.com",
  projectId: "chatapp-fd976",
  storageBucket: "chatapp-fd976.appspot.com",
  messagingSenderId: "206305981816",
  appId: "1:206305981816:web:7cb65e4660e713215a048d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

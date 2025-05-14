// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCl8BPW-g3cmbvlOZPFIlahBM_M2D6MSm4",
    authDomain: "chiefy-d36e3.firebaseapp.com",
    projectId: "chiefy-d36e3",
    storageBucket: "chiefy-d36e3.firebasestorage.app",
    messagingSenderId: "962162053703",
    appId: "1:962162053703:web:57cd35fd535c136f2ad762",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

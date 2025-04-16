// Plik: contexts/firebase-config.js
// Ten plik zawiera tylko konfigurację Firebase bez logiki uwierzytelniania

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLIhmcwo9LB-XRaP1RCQkIKeQqb_RZS6c",
  authDomain: "studio-sen-system.firebaseapp.com",
  projectId: "studio-sen-system",
  storageBucket: "studio-sen-system.firebasestorage.app",
  messagingSenderId: "373466452016",
  appId: "1:373466452016:web:821ade990077c83fbf9df5",
};

// Inicjalizuj Firebase tylko jeśli nie został już zainicjalizowany
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Użyj istniejącej instancji
}

// Initialize Firestore
const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);

export { app, auth, db };

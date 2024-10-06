import { initializeApp } from "firebase/app";
// FIREBASE SERVICES
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGIN_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

// AUTHENTICATION
export const auth = getAuth(app);

// // FIRESTORE
export const db = getFirestore(app);

// HELPERS
export const timestamp = serverTimestamp();
export const fromMillis = (millis: number) => Timestamp.fromMillis(millis);

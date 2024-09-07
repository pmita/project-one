import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
// FIREBASE SERVICES
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp, Timestamp } from "firebase/firestore";
// import "firebase/firestore";
// import "firebase/auth";

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
export const timestamp = serverTimestamp();
export const test = Timestamp.now();
export const fromMillis = (millis: number) => Timestamp.fromMillis(millis);
// const db = firebase.firestore();
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// const fromMillis = (millis: number) => firebase.firestore.Timestamp.fromMillis(millis);

// // AUTHENTICATION
// const auth = firebase.auth();

// // EXPORTS
// export { db, timestamp, fromMillis, auth };
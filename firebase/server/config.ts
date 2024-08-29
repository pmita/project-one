import admin from 'firebase-admin'

if(!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PROJECT_ID
    } as admin.ServiceAccount),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

// SERVICES
const firestore = admin.firestore();

// HELPERS
const serverTimestamp = admin.firestore.FieldValue.serverTimestamp;
const increment = admin.firestore.FieldValue.increment;
const fromMillis = admin.firestore.Timestamp.fromMillis;
const arrayUnion = admin.firestore.FieldValue.arrayUnion;
const arrayRemove = admin.firestore.FieldValue.arrayRemove;

export { firestore, serverTimestamp, increment, fromMillis, arrayUnion, arrayRemove };
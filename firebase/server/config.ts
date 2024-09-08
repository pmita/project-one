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
export const db = admin.firestore();

// HELPERS
export const serverTimestamp = admin.firestore.FieldValue.serverTimestamp;
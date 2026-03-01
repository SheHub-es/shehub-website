import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === "undefined") return null;
  const hasConfig =
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId;
  if (!hasConfig) return null;
  try {
    return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  } catch {
    return initializeApp(firebaseConfig);
  }
}

const app = getFirebaseApp();

/** Firebase Auth; null en servidor o si faltan variables de entorno */
export const auth: Auth | null = app ? getAuth(app) : null;

/** Firestore; null en servidor o si faltan variables de entorno */
export const db: Firestore | null = app ? getFirestore(app) : null;

export { app as firebaseApp };
export default app;

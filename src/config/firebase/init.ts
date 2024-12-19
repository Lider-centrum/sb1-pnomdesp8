import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';
import { loadFirebaseConfig } from './env';

interface FirebaseInstances {
  app: FirebaseApp | null;
  db: Firestore | null;
  analytics: Analytics | null;
}

const initializeFirebase = async (): Promise<FirebaseInstances> => {
  // Return early if Firebase is already initialized
  if (getApps().length > 0) {
    const app = getApps()[0];
    return {
      app,
      db: getFirestore(app),
      analytics: await isSupported() ? getAnalytics(app) : null
    };
  }

  const config = loadFirebaseConfig();
  
  // Return null instances if config is missing
  if (!config) {
    return { app: null, db: null, analytics: null };
  }

  try {
    const app = initializeApp(config);
    const db = getFirestore(app);
    const analytics = await isSupported() ? getAnalytics(app) : null;

    return { app, db, analytics };
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Firebase initialization error:', error);
    }
    return { app: null, db: null, analytics: null };
  }
};

// Initialize instances
const { app, db, analytics } = await initializeFirebase();

export { app, db, analytics };
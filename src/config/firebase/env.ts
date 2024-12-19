import type { FirebaseOptions } from 'firebase/app';
import { validateApiKey, validateConfig } from './validation';

export const loadFirebaseConfig = (): FirebaseOptions | null => {
  try {
    const config = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
    };

    // Validate API key and config
    validateApiKey(config.apiKey);
    validateConfig(config);

    return config as FirebaseOptions;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn('Firebase config error:', error);
    }
    return null;
  }
};
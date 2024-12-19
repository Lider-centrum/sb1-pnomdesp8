import { initializeApp, getApps } from 'firebase/app';
import { getFirebaseConfig } from './config';

// Initialize Firebase app instance
const config = getFirebaseConfig();
const firebaseApp = config.apiKey ? (getApps()[0] || initializeApp(config)) : null;

export { firebaseApp as app };
import { getFirestore } from 'firebase/firestore';
import { app } from './app';

// Initialize Firestore
const firestore = app ? getFirestore(app) : null;

export { firestore as db };
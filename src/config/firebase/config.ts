import { FirebaseOptions } from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDGAZfCMOSPe0otu8-2SP-jjqPxc4xNE-I",
  authDomain: "kursy-dla-edubiznesu.firebaseapp.com",
  projectId: "kursy-dla-edubiznesu",
  storageBucket: "kursy-dla-edubiznesu.firebasestorage.app",
  messagingSenderId: "402605289754",
  appId: "1:402605289754:web:1d30000a383fd4e4ef7ca3",
  measurementId: "G-C1EVW5DPV5"
};

export const getFirebaseConfig = (): FirebaseOptions => firebaseConfig;
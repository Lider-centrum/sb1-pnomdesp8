import type { FirebaseOptions } from 'firebase/app';

export class FirebaseConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FirebaseConfigError';
  }
}

export const validateApiKey = (apiKey?: string): void => {
  if (!apiKey) {
    throw new FirebaseConfigError('Firebase API key is missing');
  }
  
  if (typeof apiKey !== 'string' || apiKey.trim() === '') {
    throw new FirebaseConfigError('Firebase API key is invalid');
  }
};

export const validateConfig = (config: Partial<FirebaseOptions>): void => {
  const requiredFields = [
    'apiKey',
    'authDomain',
    'projectId',
    'storageBucket',
    'messagingSenderId',
    'appId'
  ] as const;

  for (const field of requiredFields) {
    if (!config[field]) {
      throw new FirebaseConfigError(`Missing required Firebase configuration: ${field}`);
    }
  }
};
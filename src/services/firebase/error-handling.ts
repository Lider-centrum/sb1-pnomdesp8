export class FirebaseError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly originalError?: unknown
  ) {
    super(message);
    this.name = 'FirebaseError';
  }
}

export const handleFirebaseError = (error: unknown): FirebaseError => {
  if (error instanceof FirebaseError) {
    return error;
  }

  const message = error instanceof Error ? error.message : 'An unknown error occurred';
  return new FirebaseError(message, 'unknown', error);
};
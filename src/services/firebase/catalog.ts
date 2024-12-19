import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/config/firebase/db';

interface CatalogRequest {
  name: string;
  email: string;
  phone: string;
  marketingConsent: boolean;
}

interface CatalogResponse {
  success: boolean;
  error?: string;
}

export const submitCatalogRequest = async (data: CatalogRequest): Promise<CatalogResponse> => {
  if (!db) {
    return {
      success: false,
      error: 'Service temporarily unavailable. Please try again later.'
    };
  }

  try {
    const catalogRequest = {
      ...data,
      timestamp: serverTimestamp(),
      status: 'pending',
      source: window.location.hostname,
      createdAt: new Date().toISOString()
    };

    await addDoc(collection(db, 'catalogRequests'), catalogRequest);
    return { success: true };
  } catch (error) {
    console.error('Failed to submit catalog request:', error);
    return {
      success: false,
      error: 'Failed to submit request. Please try again later.'
    };
  }
};
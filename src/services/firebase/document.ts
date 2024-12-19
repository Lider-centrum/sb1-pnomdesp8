import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebase/db';

export const getDocumentById = async (collectionName: string, documentId: string) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        success: true,
        data: docSnap.data()
      };
    } else {
      return {
        success: false,
        error: 'Document not found'
      };
    }
  } catch (error) {
    console.error('Error fetching document:', error);
    throw error;
  }
};
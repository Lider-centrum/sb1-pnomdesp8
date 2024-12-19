import React, { useEffect, useState } from 'react';
import { getDocumentById } from '@/services/firebase/document';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface DocumentData {
  [key: string]: any;
}

const DocumentViewer = () => {
  const [documentData, setDocumentData] = useState<DocumentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const result = await getDocumentById('catalogRequests', 'azb1YupBPKr0JgXxPihw');
        if (result.success) {
          setDocumentData(result.data);
        } else {
          setError(result.error);
        }
      } catch (error) {
        setError('Error fetching document');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocument();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <LoadingSpinner className="h-8 w-8" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 p-4">
        Error: {error}
      </div>
    );
  }

  if (!documentData) {
    return (
      <div className="text-gray-600 p-4">
        No data found
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Document Data</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        {JSON.stringify(documentData, null, 2)}
      </pre>
    </div>
  );
};

export default DocumentViewer;
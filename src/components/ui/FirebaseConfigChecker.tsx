import React from 'react';
import { app } from '@/config/firebase/app';

const FirebaseConfigChecker = () => {
  // Only show warning in development and when Firebase isn't initialized
  if (import.meta.env.DEV && !app) {
    return (
      <div className="fixed inset-0 bg-dark/90 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-6 max-w-md">
          <h2 className="text-xl font-bold text-red-600 mb-4">
            Firebase Configuration Missing
          </h2>
          <p className="text-gray-700 mb-4">
            To enable Firebase features:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
            <li>Create a <code>.env</code> file in the project root</li>
            <li>Copy the contents from <code>.env.example</code></li>
            <li>Add your Firebase configuration values</li>
            <li>Restart the development server</li>
          </ol>
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-800">
              Note: This warning only appears in development mode.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default FirebaseConfigChecker;
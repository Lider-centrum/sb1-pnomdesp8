import { getAnalytics, isSupported } from 'firebase/analytics';
import { app } from './app';

// Initialize Analytics
let analyticsInstance = null;

if (typeof window !== 'undefined' && app) {
  isSupported().then(supported => {
    if (supported) {
      analyticsInstance = getAnalytics(app);
    }
  }).catch(() => {
    // Silently handle analytics initialization failure
  });
}

export { analyticsInstance as analytics };
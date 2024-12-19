import React, { Suspense, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import FeatureShowcase from './components/home/FeatureShowcase/FeatureShowcase';
import Testimonials from './components/home/Testimonials/Testimonials';
import VideoPreview from './components/home/VideoPreview/VideoPreview';
import Pricing from './components/home/Pricing/Pricing';
import CTA from './components/home/CTA';
import Footer from './components/layout/Footer';
import PageTransition from './components/ui/PageTransition';
import LoadingSpinner from './components/ui/LoadingSpinner';
import FloatingContactButtons from './components/contact/FloatingContactButtons';
import FirebaseConfigChecker from './components/ui/FirebaseConfigChecker';
import { setDocumentTitle } from './utils/documentTitle';

function App() {
  useEffect(() => {
    setDocumentTitle();
    
    const handleRouteChange = () => setDocumentTitle();
    window.addEventListener('popstate', handleRouteChange);
    
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner className="h-12 w-12" />
      </div>
    }>
      <PageTransition>
        <FirebaseConfigChecker />
        <div className="min-h-screen bg-white">
          <Navbar />
          <Hero />
          <FeatureShowcase />
          <Testimonials />
          <VideoPreview />
          <Pricing />
          <CTA />
          <Footer />
          <FloatingContactButtons />
        </div>
      </PageTransition>
    </Suspense>
  );
}

export default App;
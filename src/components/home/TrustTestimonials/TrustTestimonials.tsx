import React from 'react';
import TrustAvatars from './TrustAvatars';
import TrustStars from './TrustStars';
import TrustMetric from './TrustMetric';

const TrustTestimonials = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <TrustAvatars />
      <div className="flex flex-col items-center md:items-start gap-1">
        <TrustStars />
        <TrustMetric />
      </div>
    </div>
  );
};

export default TrustTestimonials;
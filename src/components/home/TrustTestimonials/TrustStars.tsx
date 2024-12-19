import React from 'react';
import { Star } from 'lucide-react';

const TrustStars = () => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5 text-[#FFE81A] fill-current"
        />
      ))}
    </div>
  );
};

export default TrustStars;
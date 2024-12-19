import React from 'react';
import Button from '@/components/ui/Button';

const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="primary">
        Zobacz cennik
      </Button>
      <Button variant="secondary" className="bg-white text-dark hover:bg-white/90">
        Zapisz się teraz
      </Button>
    </div>
  );
};

export default CTAButtons;
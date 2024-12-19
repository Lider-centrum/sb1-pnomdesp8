import React from 'react';
import Container from '@/components/ui/Container';
import CTAContent from './CTAContent';
import CTAButtons from './CTAButtons';

const CTA = () => {
  return (
    <section className="bg-dark py-24">
      <Container className="px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <CTAContent />
          <CTAButtons />
        </div>
      </Container>
    </section>
  );
};

export default CTA;
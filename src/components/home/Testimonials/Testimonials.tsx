import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  return (
    <section id="opinie" className="py-24 bg-gray-50">
      <Container className="px-6 lg:px-8">
        <SectionHeader
          title="Co mówią nasi klienci"
          description="Zobacz, jak pomogliśmy innym rozwinąć ich biznes"
          className="mb-12"
        />
        <TestimonialSlider />
      </Container>
    </section>
  );
};

export default Testimonials;
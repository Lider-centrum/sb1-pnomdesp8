import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import PricingCard from './PricingCard';
import { pricingPlans } from '@/constants/pricing';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <Container className="px-6 lg:px-8">
        <SectionHeader
          title="Wybierz plan dla siebie"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import FeatureCard from './FeatureCard';
import { features } from '@/constants/features';

const FeatureShowcase = () => {
  return (
    <section id="co-otrzymasz" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container className="px-6 lg:px-8">
        <SectionHeader
          title="Co otrzymasz?"
          description="Odkryj narzędzia i strategie, które pomogą Ci osiągnąć sukces"
        />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 0.2}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeatureShowcase;
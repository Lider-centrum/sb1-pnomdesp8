import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import BenefitCard from './BenefitCard';
import { benefits } from '@/constants/benefits';

const Benefits = () => {
  return (
    <section id="co-zyskasz" className="py-24 bg-white">
      <Container className="px-6 lg:px-8">
        <SectionHeader
          title="Co zyskasz?"
          description="Praktyczna wiedza i sprawdzone rozwiązania, które pomogą Ci rozwinąć biznes"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
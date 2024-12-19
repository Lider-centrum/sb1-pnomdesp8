import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import TargetCard from './TargetCard';
import { targetAudience } from '@/constants/targetAudience';

const TargetAudience = () => {
  return (
    <section className="py-24 bg-gray-50">
      <Container className="px-6 lg:px-8">
        <SectionHeader
          title="Dla kogo jest ten kurs?"
          description="Program został stworzony z myślą o osobach, które chcą osiągnąć sukces w branży edukacji językowej"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targetAudience.map((target, index) => (
            <TargetCard
              key={index}
              icon={target.icon}
              title={target.title}
              description={target.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TargetAudience;
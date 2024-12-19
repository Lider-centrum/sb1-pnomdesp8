import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import FeatureCard from './FeatureCard';
import { courseFeatures } from '@/constants/courseFeatures';

const CourseFeatures = () => {
  return (
    <section className="py-24 bg-white">
      <Container className="px-6 lg:px-8">
        <SectionHeader
          title="Co otrzymujesz?"
          description="Kompleksowy program szkoleniowy dostosowany do Twoich potrzeb"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              value={feature.value}
              label={feature.label}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CourseFeatures;
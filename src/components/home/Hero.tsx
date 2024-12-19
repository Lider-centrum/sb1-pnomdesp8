import React from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import TargetAudience from './TargetAudience/TargetAudience';
import Benefits from './Benefits/Benefits';
import CourseFeatures from './CourseFeatures/CourseFeatures';
import CourseOverview from './CourseOverview/CourseOverview';
import TrustTestimonials from './TrustTestimonials/TrustTestimonials';

const Hero = () => {
  return (
    <>
      <div className="relative bg-white pt-32">
        <Container className="px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <TrustTestimonials />
            </div>
            <div className="max-w-5xl mx-auto">
              <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-dark tracking-tight leading-[1.1] text-center">
                Rozwiń swoją szkołę językową i zwiększ stabilność biznesu
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-gray-600/90 text-center max-w-4xl mx-auto leading-relaxed">
                Praktyczne kursy online dla właścicieli szkół językowych i lektorów, 
                którzy chcą zbudować stabilny i dochodowy biznes
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Rozpocznij teraz
                </Button>
                <Button variant="secondary" size="lg">
                  Zobacz ofertę
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <TargetAudience />
      <Benefits />
      <CourseFeatures />
      <CourseOverview />
    </>
  );
};

export default Hero;
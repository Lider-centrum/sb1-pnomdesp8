import React from 'react';
import Container from '@/components/ui/Container';
import ServiceCard from './ServiceCard';
import { services } from '@/constants/services';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Nasze Usługi</h2>
          <p className="mt-4 text-xl text-gray-600">
            Kompleksowe rozwiązania dla transformacji Twojego biznesu edukacyjnego
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
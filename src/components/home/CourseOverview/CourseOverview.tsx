import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import CourseCard from './CourseCard';
import CatalogDownload from './CatalogDownload';
import { courses } from '@/constants/courses';

const CourseOverview = () => {
  return (
    <section id="wszystkie-kursy" className="py-24 bg-gray-50">
      <Container className="px-6 lg:px-8">
        <SectionHeader
          title="Przegląd kursów"
          description="Poznaj nasze kompleksowe programy szkoleniowe"
          className="mb-12"
        />
        <div className="space-y-4">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              {...course}
            />
          ))}
        </div>
        <CatalogDownload />
      </Container>
    </section>
  );
};

export default CourseOverview;
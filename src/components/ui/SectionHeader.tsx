import React from 'react';
import { cn } from '@/utils/cn';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader = ({ title, description, className }: SectionHeaderProps) => {
  return (
    <div className={cn("text-center max-w-3xl mx-auto mb-16", className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">{title}</h2>
      {description && (
        <p className="text-xl text-gray-600">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
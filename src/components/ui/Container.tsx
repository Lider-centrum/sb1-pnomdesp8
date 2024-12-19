import React from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('max-w-7xl mx-auto', className)}>
      {children}
    </div>
  );
};

export default Container;
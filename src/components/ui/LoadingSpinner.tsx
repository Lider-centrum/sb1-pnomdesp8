import React from 'react';
import { cn } from '@/utils/cn';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <div className={cn("animate-spin rounded-full border-2 border-primary border-t-transparent h-6 w-6", className)} />
  );
};

export default LoadingSpinner;
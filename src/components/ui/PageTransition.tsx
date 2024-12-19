import React, { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
      "min-h-screen transition-opacity duration-500",
      isLoading ? "opacity-0" : "opacity-100"
    )}>
      {children}
    </div>
  );
}

export default PageTransition;
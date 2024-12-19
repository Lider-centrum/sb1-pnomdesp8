import React from 'react';
import { Phone } from 'lucide-react';
import { cn } from '@/utils/cn';

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+48453617970"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "bg-primary text-dark rounded-full p-4",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "hover:scale-110 hover:bg-primary/90",
        "flex items-center gap-2",
        "animate-bounce"
      )}
      aria-label="Zadzwoń teraz"
    >
      <Phone className="h-6 w-6" />
      <span className="hidden md:inline font-medium">Zadzwoń teraz</span>
    </a>
  );
};

export default FloatingCallButton;
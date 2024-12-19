import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { cn } from '@/utils/cn';
import { isBusinessHours } from '@/utils/businessHours';
import ContactModal from './ContactModal';

const FloatingContactButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const businessHours = isBusinessHours();

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {businessHours ? (
          <a
            href="tel:+48453617970"
            className={cn(
              "bg-primary text-dark rounded-full px-6 py-4",
              "shadow-lg hover:shadow-xl transition-all duration-300",
              "hover:scale-105 hover:bg-primary/90",
              "flex items-center gap-3",
              "animate-bounce"
            )}
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium whitespace-nowrap">
              Porozmawiajmy o programie
            </span>
          </a>
        ) : (
          <button
            onClick={() => setIsModalOpen(true)}
            className={cn(
              "bg-primary text-dark rounded-full px-6 py-4",
              "shadow-lg hover:shadow-xl transition-all duration-300",
              "hover:scale-105 hover:bg-primary/90",
              "flex items-center gap-3"
            )}
          >
            <Mail className="h-5 w-5" />
            <span className="font-medium">
              Napisz do nas
            </span>
          </button>
        )}
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default FloatingContactButtons;
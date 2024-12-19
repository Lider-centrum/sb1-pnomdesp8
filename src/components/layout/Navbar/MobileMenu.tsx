import React from 'react';
import { cn } from '@/utils/cn';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onPricingClick: () => void;
}

const MobileMenu = ({ isOpen, onPricingClick }: MobileMenuProps) => {
  return (
    <div 
      className={cn(
        "fixed inset-x-4 bg-white/95 backdrop-blur-md z-40 transition-transform duration-300 transform md:hidden rounded-2xl mt-4 shadow-lg",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
      style={{ top: '90px' }}
    >
      <Container className="px-6 lg:px-8 h-full">
        <div className="relative py-8 mx-4 flex flex-col h-full">
          <NavLinks
            className="flex flex-col space-y-4"
            isMobile
          />
          <div className="mt-auto mb-8">
            <Button 
              className="w-full"
              onClick={onPricingClick}
            >
              Kupuję szkolenia
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MobileMenu;
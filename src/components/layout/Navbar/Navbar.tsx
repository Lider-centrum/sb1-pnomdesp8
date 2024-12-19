import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={cn(
      "fixed w-full z-50 transition-all duration-300 px-4 top-6",
      isScrolled ? "top-4" : "top-6"
    )}>
      <div className={cn(
        "absolute inset-x-4 inset-y-0 transition-all duration-300 rounded-full",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-white/60 backdrop-blur-sm"
      )} />
      <Container className="px-6 lg:px-8">
        <nav className="relative flex items-center justify-between h-14">
          <Logo />
          
          <NavLinks 
            className="hidden md:flex items-center space-x-2" 
            isScrolled={isScrolled}
          />
          
          <div className="hidden md:block">
            <Button 
              onClick={scrollToPricing}
              className={cn(
                "transition-all duration-300",
                isScrolled && "scale-90"
              )}
            >
              Kupuję szkolenia
            </Button>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden transition-colors",
              "text-dark hover:text-primary"
            )}
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>
      
      <MobileMenu isOpen={isOpen} onPricingClick={scrollToPricing} />
    </div>
  );
};

export default Navbar;
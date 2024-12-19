import React from 'react';
import { navigationLinks } from '@/constants/navigation';
import { cn } from '@/utils/cn';

interface NavLinksProps {
  className?: string;
  isMobile?: boolean;
  isScrolled?: boolean;
}

const NavLinks = ({ className, isMobile = false, isScrolled = false }: NavLinksProps) => {
  const linkStyles = cn(
    'transition-all duration-300',
    isScrolled 
      ? 'text-dark/80 hover:text-dark'
      : 'text-dark/80 hover:text-dark',
    'px-5 text-base font-medium',
    isMobile && 'w-full text-center py-2'
  );

  return (
    <div className={className}>
      {navigationLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={linkStyles}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
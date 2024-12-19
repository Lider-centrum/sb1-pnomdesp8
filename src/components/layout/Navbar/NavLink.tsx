import React from 'react';
import { cn } from '@/utils/cn';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
}

const NavLink = ({ href, children, isMobile = false }: NavLinkProps) => {
  const baseStyles = "hover:text-teal-500 transition-colors";
  const mobileStyles = "block px-3 py-2 rounded-md text-base font-medium text-gray-300";
  const desktopStyles = "px-3 py-2 rounded-md text-sm font-medium text-gray-300";

  return (
    <a
      href={href}
      className={cn(
        baseStyles,
        isMobile ? mobileStyles : desktopStyles
      )}
    >
      {children}
    </a>
  );
};

export default NavLink;
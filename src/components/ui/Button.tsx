import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-full font-medium transition-all hover:scale-105',
        // Variants
        variant === 'primary' && 'bg-[#FFE81A] text-dark hover:bg-[#FFE81A]/90',
        variant === 'secondary' && 'bg-dark text-white hover:bg-dark/90',
        // Sizes
        size === 'sm' && 'px-6 py-2 text-sm',
        size === 'md' && 'px-8 py-3 text-base',
        size === 'lg' && 'px-10 py-4 text-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
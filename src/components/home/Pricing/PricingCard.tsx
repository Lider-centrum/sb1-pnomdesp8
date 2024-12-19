import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/utils/cn';
import Button from '@/components/ui/Button';

interface PricingCardProps {
  title: string;
  price: string;
  subtitle?: string;
  savings?: string;
  features: string[];
  buttonText: string;
  isHighlighted?: boolean;
}

const PricingCard = ({
  title,
  price,
  subtitle,
  savings,
  features,
  buttonText,
  isHighlighted = false
}: PricingCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-2xl p-8 shadow-sm",
      isHighlighted && "border-2 border-[#FFE81A]"
    )}>
      <h3 className="text-xl text-center font-semibold text-dark mb-6">{title}</h3>
      <div className="text-center mb-2">
        <span className="text-5xl font-bold text-dark">{price}</span>
        {subtitle && (
          <p className="text-gray-600 mt-1">{subtitle}</p>
        )}
      </div>
      {savings && (
        <p className="text-center text-green-600 font-medium mb-6">
          Oszczędność {savings}
        </p>
      )}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-[#FFE81A]" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={isHighlighted ? "primary" : "secondary"}
        className="w-full"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
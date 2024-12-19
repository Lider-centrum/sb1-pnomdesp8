import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-8">
      <div className="bg-[#FFE81A] rounded-xl p-3 mb-6">
        <Icon className="h-6 w-6 text-dark" />
      </div>
      <h3 className="text-xl font-semibold text-dark mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BenefitCard;
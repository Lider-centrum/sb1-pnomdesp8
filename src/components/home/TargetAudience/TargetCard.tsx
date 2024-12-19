import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TargetCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const TargetCard = ({ icon: Icon, title, description }: TargetCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-[#FFE81A] rounded-xl p-3 w-fit">
        <Icon className="h-6 w-6 text-dark" />
      </div>
      <h3 className="text-xl font-semibold text-dark mt-6 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TargetCard;
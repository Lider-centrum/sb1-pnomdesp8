import React from 'react';

interface FeatureCardProps {
  value: string;
  label: string;
  description: string;
}

const FeatureCard = ({ value, label, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="text-[#FFE81A] text-5xl font-bold mb-4">{value}</div>
      <h3 className="text-xl font-semibold text-dark mb-3">{label}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
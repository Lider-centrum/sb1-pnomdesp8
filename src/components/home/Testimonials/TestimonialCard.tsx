import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const TestimonialCard = ({ name, role, company, image, quote }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-[#FFE81A] fill-current" />
        ))}
      </div>
      <p className="mt-6 text-gray-600 line-clamp-4">{quote}</p>
      <div className="mt-6 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-dark">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
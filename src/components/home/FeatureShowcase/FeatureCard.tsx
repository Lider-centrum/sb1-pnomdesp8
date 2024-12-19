import React, { useEffect, useRef } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up', 'opacity-100');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative bg-white rounded-2xl p-8 opacity-0",
        "transform transition-all duration-700 ease-out",
        "hover:shadow-lg hover:-translate-y-2",
        "group cursor-pointer"
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Icon container with animation */}
      <div className="relative mb-6 inline-block">
        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:scale-150 transition-transform duration-700" />
        <div className="relative bg-primary rounded-xl p-4 transform group-hover:rotate-6 transition-transform duration-500">
          <Icon className="h-6 w-6 text-dark" />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-semibold text-dark mb-3 group-hover:translate-x-2 transition-transform duration-500">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:translate-x-2 transition-transform duration-700">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="w-12 h-12 rounded-full border-2 border-primary/20 transform rotate-45" />
      </div>
    </div>
  );
};

export default FeatureCard;
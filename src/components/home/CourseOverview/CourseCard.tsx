import React, { useState } from 'react';
import { ChevronDown, Clock, Layout } from 'lucide-react';
import { cn } from '@/utils/cn';

interface CourseCardProps {
  title: string;
  duration: string;
  modules: number;
  description?: string;
  topics?: string[];
}

const CourseCard = ({ title, duration, modules, description, topics }: CourseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-dark">{title}</h3>
          <div className="flex items-center gap-6 mt-2 text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {duration}
            </span>
            <span className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              {modules} modułów
            </span>
          </div>
        </div>
        <ChevronDown 
          className={cn(
            "h-6 w-6 text-gray-400 transition-transform",
            isExpanded && "transform rotate-180"
          )} 
        />
      </button>

      {isExpanded && (
        <div className="px-6 pb-6">
          {description && (
            <p className="text-gray-600 mb-4">{description}</p>
          )}
          {topics && topics.length > 0 && (
            <>
              <h4 className="font-semibold text-dark mb-2">Tematy kursu:</h4>
              <ul className="space-y-2 text-gray-600">
                {topics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#FFE81A]" />
                    {topic}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseCard;
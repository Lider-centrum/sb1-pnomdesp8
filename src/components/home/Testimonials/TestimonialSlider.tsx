import React, { useRef, useEffect } from 'react';
import { cn } from '@/utils/cn';
import { testimonials } from '@/constants/testimonials';
import TestimonialCard from './TestimonialCard';

const TestimonialSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const container = containerRef.current;
    if (!slider || !container) return;

    let animationFrameId: number;
    let isHovering = false;
    let position = 0;

    const scroll = () => {
      if (!isHovering) {
        position += 0.5;
        if (position >= slider.scrollWidth / 2) {
          position = 0;
        }
        slider.scrollLeft = position;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Clone testimonials for infinite scroll
    const clonedItems = slider.innerHTML;
    slider.innerHTML = clonedItems + clonedItems;

    // Start animation
    animationFrameId = requestAnimationFrame(scroll);

    // Hover handlers
    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden"
    >
      <div 
        ref={sliderRef}
        className={cn(
          "flex gap-6 overflow-hidden",
          "[&>*]:flex-shrink-0 [&>*]:w-[400px]"
        )}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
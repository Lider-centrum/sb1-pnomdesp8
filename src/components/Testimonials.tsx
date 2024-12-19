import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Language School Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      quote: "Working with this consultancy transformed our school. We've doubled our student base and increased revenue by 150% in just 8 months.",
    },
    {
      name: "David Martinez",
      role: "Online Language Tutor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      quote: "The strategies I learned helped me transition from a solo tutor to managing a team of 5 teachers. My income has tripled!",
    },
    {
      name: "Emma Thompson",
      role: "Language Academy Director",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
      quote: "The systems we implemented revolutionized our operations. Student satisfaction is up, and we're finally scaling efficiently.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            See how we've helped language education businesses thrive
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
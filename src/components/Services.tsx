import React from 'react';
import { Users, BookOpen, TrendingUp, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8 text-teal-500" />,
      title: "Business Strategy Consulting",
      description: "Get personalized guidance to scale your language school with proven systems and strategies.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-teal-500" />,
      title: "Course Optimization",
      description: "Optimize your curriculum and delivery methods for maximum student engagement and retention.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-teal-500" />,
      title: "Marketing & Sales Systems",
      description: "Implement effective marketing strategies to attract more students and increase enrollment.",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-teal-500" />,
      title: "Team Development",
      description: "Build and train a high-performing team to deliver exceptional language education.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions to transform your language education business
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              {service.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
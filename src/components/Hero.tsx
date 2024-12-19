import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-navy-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Scale Your Language School with Proven Growth Strategies
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Transform your tutoring business or language school with expert guidance. Get the systems, strategies, and support you need to increase enrollment and revenue.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-500 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-teal-600 transition-colors flex items-center">
                Book Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/10 transition-colors">
                View Success Stories
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150" alt="Client" />
              </div>
              <p className="text-gray-300">Trusted by 100+ language schools worldwide</p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
              alt="Team meeting"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-navy-900 font-bold">Average Client Results</p>
              <p className="text-teal-500 text-2xl font-bold">+127% Revenue Growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
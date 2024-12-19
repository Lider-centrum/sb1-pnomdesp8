import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-teal-500" />
              <span className="ml-2 text-xl font-bold">EduGrowth</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering language education businesses to reach their full potential.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-teal-500">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-teal-500">Services</a></li>
              <li><a href="#case-studies" className="text-gray-400 hover:text-teal-500">Case Studies</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-teal-500">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-500 mr-2" />
                <a href="mailto:contact@edugrowth.com" className="text-gray-400 hover:text-teal-500">
                  contact@edugrowth.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-400">San Francisco, CA</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe for the latest education business insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-teal-500"
              />
              <button className="w-full bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EduGrowth. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
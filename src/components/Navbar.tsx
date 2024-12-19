import React from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-navy-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <GraduationCap className="h-8 w-8 text-teal-500" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#services" className="text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#case-studies" className="text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">Case Studies</a>
                <a href="#resources" className="text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">Resources</a>
                <a href="#contact" className="text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors">
              Book Free Call
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#services" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#case-studies" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Case Studies</a>
            <a href="#resources" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Resources</a>
            <a href="#contact" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
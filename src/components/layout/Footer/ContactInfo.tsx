import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
      <ul className="space-y-2">
        <li className="flex items-center">
          <Mail className="h-5 w-5 text-teal-500 mr-2" />
          <a href="mailto:kontakt@edugrowth.pl" className="text-gray-400 hover:text-teal-500">
            kontakt@edugrowth.pl
          </a>
        </li>
        <li className="flex items-center">
          <Phone className="h-5 w-5 text-teal-500 mr-2" />
          <span className="text-gray-400">+48 500 600 700</span>
        </li>
        <li className="flex items-center">
          <MapPin className="h-5 w-5 text-teal-500 mr-2" />
          <span className="text-gray-400">Warszawa, Polska</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
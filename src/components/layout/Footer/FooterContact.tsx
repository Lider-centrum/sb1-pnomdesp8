import React from 'react';
import { Mail, Phone } from 'lucide-react';

const FooterContact = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Kontakt</h3>
      <div className="space-y-4">
        <a 
          href="mailto:kontakt@liderbranzyedukacyjnej.pl" 
          className="flex items-center text-gray-400 hover:text-white transition-colors group"
        >
          <Mail className="h-5 w-5 mr-2 group-hover:text-primary" />
          kontakt@liderbranzyedukacyjnej.pl
        </a>
        <a 
          href="tel:+48453617970"
          className="flex items-center text-gray-400 hover:text-white transition-colors group"
        >
          <Phone className="h-5 w-5 mr-2 group-hover:text-primary" />
          +48 453 617 970
        </a>
      </div>
    </div>
  );
};

export default FooterContact;
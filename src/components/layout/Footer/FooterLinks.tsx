import React from 'react';

const FooterLinks = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Szybkie linki</h3>
      <ul className="space-y-3">
        <li>
          <a href="#co-otrzymasz" className="text-gray-400 hover:text-white transition-colors">
            Oferta
          </a>
        </li>
        <li>
          <a href="#co-zyskasz" className="text-gray-400 hover:text-white transition-colors">
            Korzyści
          </a>
        </li>
        <li>
          <a href="#wszystkie-kursy" className="text-gray-400 hover:text-white transition-colors">
            Kursy
          </a>
        </li>
        <li>
          <a href="#opinie" className="text-gray-400 hover:text-white transition-colors">
            Opinie
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
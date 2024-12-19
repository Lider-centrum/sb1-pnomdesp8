import React from 'react';
import Container from '@/components/ui/Container';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterCopyright from './FooterCopyright';

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-dark text-white py-16">
      <Container className="px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FooterBrand />
          <FooterLinks />
          <FooterContact />
        </div>
        <FooterCopyright />
      </Container>
    </footer>
  );
};

export default Footer;
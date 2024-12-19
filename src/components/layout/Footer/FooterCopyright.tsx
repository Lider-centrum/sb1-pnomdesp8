import React from 'react';

const FooterCopyright = () => {
  return (
    <div className="mt-16 pt-8 border-t border-gray-800">
      <p className="text-center text-gray-400">
        © {new Date().getFullYear()} LIDER. Wszelkie prawa zastrzeżone.
      </p>
    </div>
  );
};

export default FooterCopyright;
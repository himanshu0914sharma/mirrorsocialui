import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-6 text-center">
      <p className="text-sm text-white">&copy; {new Date().getFullYear()} Mirror Social - All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-orange mt-4 py-4 text-dark text-bold text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

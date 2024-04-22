import React from 'react';

const Footer = () => {
  return (
    <footer className="border border-blue bg-white text-black py-4">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <p>&copy; {new Date().getFullYear()} Hiptify. All Rights Reserved.</p>
          {/* <ul className="flex space-x-4">
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-of-service">Terms of Service</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
             </ul> */}
        </div>
      </div>
    </footer >
  );
};

export default Footer;

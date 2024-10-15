import React from 'react';

const Footer = () => {
  return (
    <footer className="container mt-auto border-t border-gray-200 py-6 text-center text-gray-500 dark:border-gray-600">
      <div className="flex flex-col sm:flex-row dark:text-white justify-center">
        <p className=''>SARO SEREYVICHEA</p>
        <span className="hidden sm:inline-block mx-2">|</span>
        <p className='text-center font-khmer'>សារូ សិរីវិជ្ជា</p>
        <span className="hidden sm:inline-block mx-2">|</span>
        &#169; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;

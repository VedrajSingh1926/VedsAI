import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#2C3945] text-[#E8EDF2] py-8 border-t border-[#547A95]/30">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm order-2 md:order-1 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} <span className="text-[#C2A56D] font-semibold">VedsAI</span>. All rights reserved.</p>
        </div>

        <div className="order-1 md:order-2">
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#" className="hover:text-[#C2A56D] transition-colors duration-200">Home</a></li>
            <li><a href="#" className="hover:text-[#C2A56D] transition-colors duration-200">About</a></li>
            <li><a href="#" className="hover:text-[#C2A56D] transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        <div className="text-xs text-[#E8EDF2]/70 order-3 text-center md:text-right">
          <p>Developed by <span className="text-[#C2A56D] font-medium">Vedraj</span> & <span className="text-[#C2A56D] font-medium">Vedprakash</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
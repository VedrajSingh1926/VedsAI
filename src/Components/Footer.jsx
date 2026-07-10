import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Copyright */}
        <div className="text-sm order-2 md:order-1 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">VedsAI</span>. All rights reserved.</p>
        </div>

        {/* Center: Links */}
        <div className="order-1 md:order-2">
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Home</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">About</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Right Side: Collaborators */}
        <div className="text-xs text-slate-500 order-3 text-center md:text-right">
          <p>Developed by <span className="text-slate-400 font-medium">Vedraj</span> & <span className="text-slate-400 font-medium">Vedprakash</span></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
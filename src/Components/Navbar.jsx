import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-[#2a2a40] text-[#DEB887] flex justify-between items-center px-4 md:px-8 py-4 relative z-50">
        <Link to="/" className="flex items-center gap-2 md:gap-4">
          <img src="./Logo.png" alt="Logo" className='size-10 md:size-12'/>
          <div className="text-2xl md:text-4xl font-bold">Veds</div> 
        </Link>
        

        <div className="text-sm font-bold hidden md:block">
          <ul className="flex flex-row gap-6 justify-center items-center">
            <Link to="/"><li className="hover:text-white cursor-pointer transition-colors">Home</li></Link>
            <li className="hover:text-white cursor-pointer transition-colors">About</li>
            <li className="hover:text-white cursor-pointer transition-colors">Services</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
          </ul>
        </div>

        
        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden md:block bg-[#DEB887] text-[#2a2a40] px-5 py-2 rounded-lg font-bold hover:bg-white transition-colors cursor-pointer text-sm">
            Login
          </Link>
          
          <div onClick={toggleMenu} className="md:hidden block cursor-pointer text-xl hover:text-white transition-colors p-2">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        
        {isMenuOpen && (
          <ul className="absolute top-full left-0 bg-[#2a2a40] w-full text-center py-4 md:hidden border-t border-[#393953] shadow-xl">
            <Link to="/" onClick={toggleMenu}><li className="py-3 hover:text-white hover:bg-[#393953] cursor-pointer transition-colors">Home</li></Link>
            <li className="py-3 hover:text-white hover:bg-[#393953] cursor-pointer transition-colors">About</li>
            <li className="py-3 hover:text-white hover:bg-[#393953] cursor-pointer transition-colors">Services</li>
            <li className="py-3 hover:text-white hover:bg-[#393953] cursor-pointer transition-colors">Contact</li>
            <li className="py-3 hover:text-white hover:bg-[#393953] cursor-pointer transition-colors">Blog</li>
            <Link to="/login" onClick={toggleMenu}><li className="py-3 text-white font-bold cursor-pointer border-t border-[#393953] mt-2 pt-4 hover:bg-[#393953] transition-colors">Login</li></Link>
          </ul>
        )}
      </div>
    </>
  )
}

export default Navbar
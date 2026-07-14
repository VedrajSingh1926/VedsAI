import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-[#2a2a40] text-[#DEB887] flex justify-between items-center px-8 py-4 relative z-50">
        <Link to="/" className="flex items-center gap-4">
          <img src="./Logo.png" alt="Logo" className='size-12'/>
          <div className="text-4xl font-bold">Veds</div> 
        </Link>
        

        <div className="text-sm font-bold hidden md:block">
          <ul className="flex flex-row gap-6 justify-center items-center">
            <Link to="/"><li className="hover:text-white cursor-pointer">Home</li></Link>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        
        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden md:block bg-[#DEB887] text-[#2a2a40] px-5 py-2 rounded-lg font-bold hover:bg-white transition-colors cursor-pointer text-sm">
            Login
          </Link>
          
          <div onClick={toggleMenu} className="md:hidden block cursor-pointer text-xl">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        
        {isMenuOpen && (
          <ul className="absolute top-full left-0 bg-[#2a2a40] w-full text-center py-4 md:hidden border-t border-[#393953]">
            <Link to="/" onClick={toggleMenu}><li className="py-2 hover:text-white cursor-pointer">Home</li></Link>
            <li className="py-2 hover:text-white cursor-pointer">About</li>
            <li className="py-2 hover:text-white cursor-pointer">Services</li>
            <li className="py-2 hover:text-white cursor-pointer">Contact</li>
            <li className="py-2 hover:text-white cursor-pointer">Blog</li>
            <Link to="/login" onClick={toggleMenu}><li className="py-2 text-white font-bold cursor-pointer border-t border-[#393953] mt-2 pt-2">Login</li></Link>
          </ul>
        )}
      </div>
    </>
  )
}

export default Navbar
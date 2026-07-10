import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-[#2a2a40] text-[#DEB887] flex justify-between items-center px-8 py-4 relative z-50">
        <div className="flex items-center gap-4">
          <img src="./Logo.png" alt="Logo" className='size-18'/>
          <div className="text-4xl font-bold">Veds</div> 
        </div>
        
      
        <div className="text-sm font-bold hidden md:block">
          <ul className="flex flex-row gap-6 justify-center items-center">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

      
        <div onClick={toggleMenu} className="md:hidden block cursor-pointer text-xl">
          <i className="fa-solid fa-bars"></i>
        </div>

       
        {isMenuOpen && (
          <ul className="absolute top-full left-0 bg-[#2a2a40] w-full text-center py-4 md:hidden border-t border-[#393953]">
            <li className="py-2 hover:text-white cursor-pointer">Home</li>
            <li className="py-2 hover:text-white cursor-pointer">About</li>
            <li className="py-2 hover:text-white cursor-pointer">Services</li>
            <li className="py-2 hover:text-white cursor-pointer">Contact</li>
            <li className="py-2 hover:text-white cursor-pointer">Blog</li>
          </ul>
        )}
      </div>
    </>
  )
}

export default Navbar
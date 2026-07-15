import React from 'react'

const Hero = ({ toggleSidebar }) => {
  return (
    <div className='flex flex-col h-full bg-transparent p-4 md:p-8 relative'>
      {/* Mobile Sidebar Toggle Button */}
      <button 
        onClick={toggleSidebar} 
        className="min-[650px]:hidden mb-4 self-start bg-white/40 backdrop-blur-md border border-white/50 p-2 px-4 rounded-lg text-[#4A3E3D] shadow-sm hover:bg-white/60 transition-colors flex items-center gap-2 cursor-pointer z-50"
      >
        <i className="fa-solid fa-clock-rotate-left"></i>
        <span className="font-semibold text-sm">History</span>
      </button>

      <div className='h-[70%] w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-xl shadow-lg flex items-center justify-center p-6 text-center'>
        <h2 className="text-2xl md:text-4xl font-bold text-[#5c4d4c]">Welcome to Veds AI</h2>
      </div>
      <div className="flex-1 mt-6 bg-white/40 backdrop-blur-md border border-white/50 rounded-xl shadow-lg p-4 flex items-center justify-center">
        <p className="text-[#5c4d4c]/70 font-semibold">Prompt area or content goes here...</p>
      </div>
    </div>
  )
}

export default Hero
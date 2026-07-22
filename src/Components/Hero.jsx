import React from 'react'

const Hero = ({ toggleSidebar }) => {
  return (
    <div className='flex flex-col h-full bg-transparent p-4 md:p-8 relative'>
      <button
        onClick={toggleSidebar}
        className="min-[650px]:hidden mb-4 self-start bg-[#F8FBFD]/90 backdrop-blur-md border border-[#547A95]/30 p-2 px-4 rounded-lg text-[#2C3945] shadow-sm hover:bg-[#E8EDF2] transition-colors flex items-center gap-2 cursor-pointer z-50"
      >
        <i className="fa-solid fa-clock-rotate-left"></i>
        <span className="font-semibold text-sm">History</span>
      </button>

      <div className='h-[70%] w-full bg-[#F8FBFD]/80 backdrop-blur-md rounded-xl flex items-center justify-center p-6 text-center border border-[#547A95]/20 shadow-sm'>
        <h2 className="text-2xl md:text-4xl font-bold text-[#2C3945]">Welcome to Veds AI</h2>
      </div>

      <div className="flex-1 mt-6 bg-[#F8FBFD]/80 backdrop-blur-md border border-[#547A95]/20 rounded-xl shadow-lg px-2 p flex items-center justify-center gap-3">
        <input
          type="text"
          placeholder="Ask Veds AI anything..."
          className='w-full bg-[#E8EDF2] border border-[#547A95]/30 text-[#2C3945] p-3 rounded-lg focus:outline-none focus:border-[#547A95] transition-colors placeholder:text-[#2C3945]/60'
        />
        <button className='bg-[#2C3945] text-[#E8EDF2] font-bold p-3 px-6 rounded-lg shadow-md cursor-pointer hover:bg-[#547A95] transition-colors whitespace-nowrap'>
          Send
        </button>
      </div>
    </div>
  )
}

export default Hero
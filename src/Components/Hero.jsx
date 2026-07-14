import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex flex-col h-full bg-[#2a2a40] text-white p-4 md:p-8'>
      <div className='h-[70%] w-full bg-slate-600 rounded-xl shadow-inner flex items-center justify-center p-6 text-center'>
        <h2 className="text-2xl md:text-4xl font-bold text-white/50">Welcome to Veds AI</h2>
      </div>
      <div className="flex-1 mt-6 bg-[#393953] rounded-xl shadow-md p-4 flex items-center justify-center">
        <p className="text-gray-400">Prompt area or content goes here...</p>
      </div>
    </div>
    </>
  )
}

export default Hero
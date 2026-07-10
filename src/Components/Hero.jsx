import React from 'react'

const Hero = () => {
  return (
    <>
    
      <div className="flex w-full h-[calc(100vh-80px)]">
        
        <div className="w-64 flex flex-col bg-[#393953] text-[#DEB887] p-6 h-full">
          <h1 className='text-3xl font-bold'>History</h1>
          <div className='mt-4'></div>
        </div>
        
    
        <div className="flex-1 flex flex-col bg-slate-100 text-black p-6 h-full">
          Chat
        </div>
      </div>
    </>
  )
}

export default Hero
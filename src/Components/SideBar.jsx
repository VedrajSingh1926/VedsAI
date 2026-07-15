import React from 'react'

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div 
          className="min-[650px]:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className={`${isOpen ? 'flex absolute inset-y-0 left-0' : 'hidden'} min-[650px]:relative min-[650px]:flex w-64 flex-col bg-white/40 backdrop-blur-md border-r border-white/50 text-[#4A3E3D] p-6 h-full shadow-lg z-50 transition-all`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className='text-3xl font-bold text-[#5c4d4c]'>History</h1>
          <button className="min-[650px]:hidden text-xl text-[#5c4d4c] p-2 cursor-pointer" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className='flex flex-col gap-2'>
          {/* History items can go here */}
          <div className="p-3 bg-white/50 rounded-lg shadow-sm border border-white/60 cursor-pointer hover:bg-white/70 transition-colors">
            <p className="text-sm font-semibold truncate text-[#5c4d4c]">Previous chat...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
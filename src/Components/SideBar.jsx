import React from 'react'

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className="min-[650px]:hidden fixed inset-0 bg-[#2C3945]/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className={`${isOpen ? 'flex absolute inset-y-0 left-0' : 'hidden'} min-[650px]:relative min-[650px]:flex w-64 flex-col bg-[#F8FBFD]/90 backdrop-blur-md border-r border-[#547A95]/30 text-[#2C3945] p-6 h-full shadow-lg z-50 transition-all`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className='text-3xl font-bold text-[#2C3945]'>History</h1>
          <button className="min-[650px]:hidden text-xl text-[#2C3945] p-2 cursor-pointer" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className='flex flex-col gap-2'>
          <div className="p-3 bg-[#E8EDF2] rounded-lg shadow-sm border border-[#547A95]/20 cursor-pointer hover:bg-[#F8FBFD] transition-colors">
            <p className="text-sm font-semibold truncate text-[#2C3945]">Previous chat...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
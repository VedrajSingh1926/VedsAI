import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="hidden md:flex w-64 flex-col bg-[#393953] text-[#DEB887] p-6 h-full shadow-lg z-10">
        <h1 className='text-3xl font-bold'>History</h1>
        <div className='mt-4 flex flex-col gap-2'>
          {/* History items can go here */}
        </div>
      </div>
    </>
  )
}

export default Sidebar
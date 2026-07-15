import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
import Login from './Components/Login'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen overflow-hidden bg-[#FAF6F0]">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="flex flex-1 w-full overflow-hidden relative">
              <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
              <main className="flex-1 overflow-y-auto">
                <Hero toggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
              </main>
            </div>
          } />
          <Route path="/login" element={
            <main className="flex-1 overflow-y-auto bg-[#FAF6F0]">
              <Login />
            </main>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
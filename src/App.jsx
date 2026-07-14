import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
import Login from './Components/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen overflow-hidden bg-[#f8f9fa]">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="flex flex-1 w-full overflow-hidden">
              <Sidebar />
              <main className="flex-1 overflow-y-auto">
                <Hero />
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
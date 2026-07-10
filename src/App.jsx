import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#f8f9fa]">
      
      <Navbar />
      
     
      <div className="flex flex-1 w-full overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Hero />
        </main>
      </div>
    </div>
  )
}

export default App
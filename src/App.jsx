import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
function App() {

  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Aboutme/>
      <Footer/>
    </main>
  )
}

export default App

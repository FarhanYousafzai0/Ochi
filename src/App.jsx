import React from 'react'
import { FaBeer } from 'react-icons/fa';
import './App.css'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marque from './Components/Marque';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Cards from './Components/Cards';
const App = () => {
  return (
    <div>
      <h1 className="w-full h-screen relative bg-[#F1F1F1] ">
        <Navbar/>
        <LandingPage/>
        <Marque/>
        <About/>
        <Eyes/>
        <Cards/>
      </h1>
    </div>
  )
}

export default App

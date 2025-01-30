import React from 'react'
import { FaBeer } from 'react-icons/fa';
import './App.css'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marque from './Components/Marque';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Cards from './Components/Cards';
import BottomCards from './Components/BottomCards';
import Project from './Components/Project';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const scroll = new LocomotiveScroll();

  return (
    <div>
      <h1 className="w-full h-screen relative overflow-x-hidden bg-[#F1F1F1] ">
        <Navbar/>
        <LandingPage/>
        <Marque/>
        <About/>
        <Eyes/>
        <Cards/>
        <BottomCards/>
        <Project/>
       <Footer/>
      </h1>
    </div>
  )
}

export default App

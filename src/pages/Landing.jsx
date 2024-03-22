import React from 'react'
import Navbar from '../components/Landing/Navbar';
import Home from '../components/Landing/Home'
import '../styles/Landing.scss'
import Advantages from '../components/Landing/Advantages';
import AboutUs from '../components/Landing/AboutUs';

function Landing() {
  return (
    <div className='landing-page'>
    <Navbar />
    <Home />
    <Advantages />
    <AboutUs />
    </div>

  )
}

export default Landing

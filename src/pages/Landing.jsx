import React from 'react'
import Navbar from '../components/Landing/Navbar';
import Home from '../components/Landing/Home'
import '../styles/Landing.scss'
import Advantages from '../components/Landing/Advantages';
import AboutUs from '../components/Landing/AboutUs';
import Reviews from '../components/Landing/Reviews';
import Delivery from '../components/Landing/Delivery';
import Recommendation from '../components/Landing/Recommendation';
import Footer from '../components/Footer';
import BurgerMenu from '../components/UI/BurgerMenu';

function Landing() {
  return (
    <div className='landing-page'>
      <Navbar />
      <Home />
      <Advantages />
      <AboutUs />    
      <Reviews />
      <Delivery />
      <Recommendation />
      <Footer />
      {/* <BurgerMenu /> */}
    </div>

  )
}

export default Landing

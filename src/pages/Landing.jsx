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

function Landing() {
  return (
    <div className='landing-page'>
      <Navbar
        navigationItems={[
          { title: 'ПРО НАС', link: 'about-us' },
          { title: 'ВІДГУКИ', link: 'reviews' },
          { title: 'ДОСТАВКА ТА ОПЛАТА', link: 'delivery' },
        ]}
      />
      <Home />
      <Advantages />
      <AboutUs />    
      <Reviews />
      <Delivery />
      <Recommendation />
      <Footer
        footerItems={[
          { title: 'ПРО НАС', link: 'about-us' },
          { title: 'ВІДГУКИ', link: 'reviews' },
          { title: 'ДОСТАВКА ТА ОПЛАТА', link: 'delivery' },
        ]}
        informationColumns = {1}
      />
    </div>

  )
}

export default Landing

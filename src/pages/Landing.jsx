import React from 'react'
import Navbar from 'components/Landing/Navbar/index';
import Home from 'components/Landing/Home/index'
import 'components/Landing/index.scss'
import Advantages from 'components/Landing/Advantages/index';
import AboutUs from 'components/Landing/AboutUs/index';
import Reviews from 'components/Landing/Reviews/index';
import Delivery from 'components/Landing/Delivery/index';
import Recommendation from 'components/Landing/Recommendation/index';
import Footer from 'components/Footer/index';

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

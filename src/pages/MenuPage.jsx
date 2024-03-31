import React, { useEffect } from 'react'
import Navbar from '../components/Landing/Navbar';
import Catalogue from '../components/Menu/Catalogue'
import '../styles/Menu/MenuPage.scss'
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { useLocation } from 'react-router-dom';

function MenuPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

  return (
    <div className='catalogue-page'>
      <Navbar
        navigationItems={[
        { title: 'МЕНЮ', link: 'catalogue' },
        { title: 'ВІДГУКИ', link: 'reviews' },
        { title: 'ДОСТАВКА ТА ОПЛАТА', link: 'delivery' },
        { title: 'АКЦІЇ', link: 'promotions' },
        ]}
      />
      <Breadcrumb />
      <Catalogue />
      <Footer
        footerItems={[
          { title: 'МЕНЮ', link: 'catalogue' },
          { title: 'ВІДГУКИ', link: 'reviews' },
          { title: 'ДОСТАВКА ТА ОПЛАТА', link: 'delivery' },
          { title: 'АКЦІЇ', link: 'promotions' },
          { title: 'НАЙЧАСТІШІ ЗАПИТАННЯ', link: 'popular-questions' },
        ]}
        informationColumns = {2}
      />
    </div>

  )
}

export default MenuPage

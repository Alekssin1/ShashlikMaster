import React, { useEffect } from 'react'
import Navbar from 'components/Landing/Navbar/index';
import Catalogue from 'components/Menu/Catalogue/index'
import 'components/Menu/index.scss'
import Footer from 'components/Footer/index';
import Breadcrumb from 'components/Breadcrumb/index';
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

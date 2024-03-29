import React from 'react'
import Navbar from '../components/Landing/Navbar';
import Catalogue from '../components/Menu/Catalogue'
import '../styles/Menu/MenuPage.scss'
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

function MenuPage() {
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

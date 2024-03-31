import React, { useEffect } from 'react'
import Navbar from '../components/Landing/Navbar';
import ProductInfo from '../components/Product/ProductInfo';
import '../styles/Product/ProductPage.scss'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { useLocation } from 'react-router-dom';

function ProductPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);
  return (
    <div className='product-page'>
      <Navbar
        navigationItems={[
        { title: 'МЕНЮ', link: '/menu' },
        { title: 'ВІДГУКИ', link: 'reviews' },
        { title: 'ДОСТАВКА ТА ОПЛАТА', link: 'delivery' },
        { title: 'АКЦІЇ', link: 'promotions' },
        ]}
      />
      <Breadcrumb />
      <ProductInfo />
      <Footer
        footerItems={[
          { title: 'МЕНЮ', link: '/menu' },
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

export default ProductPage
import React from 'react'
import Navbar from '../components/Landing/Navbar';
import ProductInfo from '../components/Product/ProductInfo';
import '../styles/Product/ProductPage.scss'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

function ProductPage() {
  return (
    <div className='product-page'>
      <Navbar
        navigationItems={[
        { title: 'МЕНЮ', link: 'catalogue' },
        { title: 'ВІДГУКИ', link: 'reviews' },
        { title: 'ДОСТАВКА ТА ОПЛАТА', link: 'delivery' },
        { title: 'АКЦІЇ', link: 'promotions' },
        ]}
      />
      <Breadcrumb />
      <ProductInfo />
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

export default ProductPage
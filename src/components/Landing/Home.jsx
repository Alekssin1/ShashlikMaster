import React from 'react'
import '../../styles/Home.scss'
import ProductImage from '../../assets/images/ProductRightImage.png'
import { ReactComponent as SkewerStart} from '../../assets/images/skewer-start.svg';
import { ReactComponent as SkewerEnd} from '../../assets/images/end-skewer.svg';



function Home() {
  return (
    <div className='main-page'>
      <div className='main-page__grid-container'>
        <div className='main-page__left-content'>
          <h1>Відчуваєш, як твій шлунок заводить пісню, а нюх ловить <span className="main-page__highlighted-text">апетитний аромат диму?</span></h1>
          <h2>Наше м’ясо не лише збуджує смакові рецептори, але й <span className="main-page__highlighted-text">швидко</span> матеріалізується з ваших думок, у кур’єра <span className="highlighted-text">у вас під дверима</span>.</h2>
          <div className="main-page__order-delivery-button">
            <SkewerStart />
            <SkewerEnd className="main-page__skewer-button" />
            <a href="#">ЗАМОВИТИ ДОСТАВКУ</a>
            <SkewerEnd className="main-page__skewer-button" />
          </div>
        </div>
        <div className="main-page__right-content">
          <img src={ProductImage} alt="main-page__product-image" />
        </div>
      </div>
    </div>
    
  )
}

export default Home

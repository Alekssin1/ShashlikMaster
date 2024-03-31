import React, { useState, useEffect } from 'react';
import '../../styles/Home.scss'
import ProductImage from '../../assets/images/ProductRightImage.png'
import { Link } from "react-router-dom";



function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize(); 

    const handleResize = () => {
      checkScreenSize(); 
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='main-page'>
      <div className='main-page__grid-container'>
        <div className='main-page__left-content'>
          {isSmallScreen
              ? <h1>Відчуваєш <span className="main-page__highlighted-text">апетитний аромат диму?</span></h1>
              : <h1>Відчуваєш, як твій шлунок заводить пісню, а нюх ловить <span className="main-page__highlighted-text">апетитний аромат диму?</span></h1>}
          {isSmallScreen
              ? <h2>Ми <span className="main-page__highlighted-text">швидко</span> матеріалізуємо ваші думки, у кур’єра <span className="main-page__highlighted-text">у вас під дверима</span>.</h2>
              : <h2>Наше м’ясо не лише збуджує смакові рецептори, але й <span className="main-page__highlighted-text">швидко</span> матеріалізується з ваших думок, у кур’єра <span className="main-page__highlighted-text">у вас під дверима</span>.</h2>
            }
          <div className="main-page__order-delivery-button">
            <div className="divider__circle"></div>
            <div className="divider__line"></div>
            <Link to={"/menu"}>ЗАМОВИТИ ДОСТАВКУ</Link>
            <div className="divider__line"></div>
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

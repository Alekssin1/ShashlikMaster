import React, { useState, useEffect } from 'react';
import '../../styles/Home.scss'
import ProductImage from '../../assets/images/ProductRightImage.png'
import { ReactComponent as SkewerStart} from '../../assets/images/skewer-start.svg';
import { ReactComponent as SkewerEnd} from '../../assets/images/end-skewer.svg';
import { ReactComponent as Start} from '../../assets/images/start-button.svg';
import { ReactComponent as End} from '../../assets/images/end-button.svg';



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
              ? <h2>Ми <span className="main-page__highlighted-text">швидко</span> матеріалізуємо ваші думки, у кур’єра <span className="highlighted-text">у вас під дверима</span>.</h2>
              : <h2>Наше м’ясо не лише збуджує смакові рецептори, але й <span className="main-page__highlighted-text">швидко</span> матеріалізується з ваших думок, у кур’єра <span className="highlighted-text">у вас під дверима</span>.</h2>
            }
          <div className="main-page__order-delivery-button">
            {isSmallScreen
              ? <Start className="main-page__skewer-button" />
              : <SkewerStart className="main-page__skewer-button" />}
            {isSmallScreen
              ? <End className="main-page__skewer-button" />
              : <SkewerEnd className="main-page__skewer-button" />}
            <a href="#">ЗАМОВИТИ ДОСТАВКУ</a>
            {isSmallScreen
              ? <End className="main-page__skewer-button" />
              : <SkewerEnd className="main-page__skewer-button" />}
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

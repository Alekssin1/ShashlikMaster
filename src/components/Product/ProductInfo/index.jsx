import React, { useState, useEffect } from 'react'
import "components/Product/ProductInfo/index.scss"
import 'swiper/css';

import Set from "assets/images/Recommendation/set.webp"
import Lemonade from "assets/images/Recommendation/lemonade.webp"
import RecommendationsCarousel from 'components/UI/RecommendationCarousel';
import { ReactComponent as DropList} from 'assets/images/ProductInfo/collapse-button.svg';

function ProductInfo() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const [close, setClose] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const recommendations = [
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
    { image: Set, title: 'СЕТ НА 10-12 ПЕРСОН', weight: '4400 г', price: '2400' },
  ];
  const recommendations_drinks = [
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
    { image: Lemonade, title: 'Напій НАТАХТАРІ Барбарис 500мл скло', weight: '500мл', price: '40' },
  ];


  return (
      <div className="product">
        <div className="product__info">
            <div className="product__image-container">
                <img src={Set} alt="product-title" />
            </div>
            <div className="product__right-content">
                <h1>СЕТ НА 10-12 ПЕРСОН</h1>
                <div className="product__price-and-weight">
                  <span>4400 г</span>
                  {windowWidth < 820 && <span className='price'>2400 грн</span>}
                </div>
                <div className="product__composition">
                  <div className="product__content" onClick={() => setClose(!close)}>
                    <span>Склад</span>
                    {windowWidth <= 768 && <DropList className={close ? 'rotate-up' : 'rotate-down'} />}
                  </div>
                  <ul className={`product__composition-list ${close ? 'open' : ''}`}>
                        <li className='product__composition-item'>
                        Люля-кебаб з курки 400 г
                        </li>
                        <li className='product__composition-item'>
                        Люля-кебаб з свинини 400 г
                        </li>
                        <li className='product__composition-item'>
                        Люля-кебаб з телятини 400 г
                        </li>
                        <li className='product__composition-item'>
                        Шашлик зі свинячого ошийку 600 г
                        </li>
                        <li className='product__composition-item'>
                        Свичячі ребра 400 г
                        </li>
                        <li className='product__composition-item'>
                        Курячі крильця 600 г
                        </li>
                        <li className='product__composition-item'>
                        Картопля з салом 600 г
                        </li>
                        <li className='product__composition-item'>
                        Соус 400 г 
                        </li>
                        <li className='product__composition-item'>
                        Цибуля
                        </li>
                        <li className='product__composition-item'>
                        Зелень 
                        </li>
                    </ul>
                    <div className="product__buy">
                      <div className="product__price-label">
                              <div className="divider__circle"></div>
                              <div className="divider__line"></div>
                              <button type='button'>В кошик</button>
                              <div className="divider__line"></div>
                      </div>
                      {windowWidth >= 820 && <span>2400 грн</span>}
                    </div>
                </div>       
            </div>
        </div>
        <div className="product__recommendations">
          <RecommendationsCarousel recommendations={recommendations} />
          <RecommendationsCarousel recommendations={recommendations_drinks} />
        </div>
      </div>
  )
}

export default ProductInfo

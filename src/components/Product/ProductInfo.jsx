import React from 'react'
import Set from "../../assets/images/Recommendation/set.webp"
import "../../styles/Product/ProductInfo.scss"

function ProductInfo() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
            <div className="product__image-container">
                <img src={Set} alt="product-title" />
            </div>
            <div className="product__right-content">
                <h1>СЕТ НА 10-12 ПЕРСОН</h1>
                <span>4400 г</span>
                <div className="product__composition">
                    <span>Склад</span>
                    <ul className='product__composition-list'>
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
                      <span> 2400 грн </span>
                    </div> 
                </div>       
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo

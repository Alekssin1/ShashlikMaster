import React from 'react';
import { Link } from "react-router-dom";


const CatalogueCard = ({ id, category, image, title, weight, price  }) => {
  return (
    <div className="catalogue-product-card">
        <div className="catalogue-product-card__content">
            <div className="catalogue-product-card__product-image-container">
                <Link to={`/ShashlikMaster/menu/${category}/${id}`}><img src={image} alt={title}/></Link>
            </div>
            <h2><Link to={`/ShashlikMaster/menu/${category}/${id}`}>{title}</Link></h2>
            <span>{weight}</span>
        </div>
        <div className="catalogue-product-card__product-price-label">
              <div className='price-label'>
                <div className="divider__circle"></div>
                <div className="divider__line"></div>
                <button type='button'>{price} ГРН</button>
                <div className="divider__line"></div>
              </div>
        </div>
    </div>
    
  );
};

export default CatalogueCard;
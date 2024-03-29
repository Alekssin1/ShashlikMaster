import React from 'react';
import "../../styles/Menu/CatalogueCard.scss"

const CatalogueCard = ({ image, title, weight, price  }) => {
  return (
    <div className="catalogue-product-card">
        <div className="catalogue-product-card__content">
            <div className="catalogue-product-card__product-image-container">
                <img src={image} alt={title}/>
            </div>
            <h2>{title}</h2>
            <span>{weight}</span>
        </div>
        <div className="catalogue-product-card__product-price-label">
              <div className='price-label'>
                <div className="divider__circle"></div>
                <div className="divider__line"></div>
                <button type='button'>{price}</button>
                <div className="divider__line"></div>
              </div>
        </div>
    </div>
    
  );
};

export default CatalogueCard;
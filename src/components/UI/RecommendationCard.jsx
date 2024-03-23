import React from 'react'

function RecommendationCard({ title, weight, price, image }) {
    return (
      <div className="recommendation__product-card">
        <div className="recommendation__product-info">
            <a href={title}>{title}</a>
            <span>{weight}</span>
        </div>
        <div className="recommendation__product-card-image-container">
          <a href={title}><img src={image} alt={title}/></a>
        </div>
        <div className="recommendation__buy-button">
          {price}
        </div>
      </div>
    );
  }

export default RecommendationCard

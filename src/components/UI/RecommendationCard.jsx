import React from 'react'
import { Link } from "react-router-dom";

function RecommendationCard({ id, title, weight, price, image }) {
    return (
      <div className="recommendation__product-card">
        <div className="recommendation__product-info">
            <Link to={`/menu/shashlik/${id}`}>{title}</Link>
            <span>{weight}</span>
        </div>
        <div className="recommendation__product-card-image-container">
          <Link to={`/menu/shashlik/${id}`}><img src={image} alt={title}/></Link>
        </div>
        <div className="recommendation__buy-button">
          {price}
        </div>
      </div>
    );
  }

export default RecommendationCard

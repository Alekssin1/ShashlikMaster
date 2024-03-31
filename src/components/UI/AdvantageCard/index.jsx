import React from 'react'
import 'components/UI/AdvantageCard/index.scss'

function AdvantageCard({ picture, header, spanText }) {
    return (
      <div className='advantage-card'>
        <div className='advantage-card__picture-container'> 
            {picture}
        </div>
        <div className='advantage-card__text'>
          <h2>{header}</h2>
          <span>{spanText}</span>
        </div>
      </div>
    );
  }

export default AdvantageCard

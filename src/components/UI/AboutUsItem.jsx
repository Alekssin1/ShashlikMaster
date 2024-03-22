import React from 'react';
import renderHighlightedText from "../../utils/HighlightenedText"

function AboutUsItem({ header, text, imageSrc, index }) {

  return (
    <div className='about-us__grid-container'>
      {index % 2 !== 1 ? (
        <>
          <div className={`about-us__picture-container ${index % 2 !== 1 ? 'about-us__picture-changed' : ''}`}>
            <img src={imageSrc} alt="about-us__product-image" />
          </div>
          <div className={`about-us__text ${index % 2 !== 1 ? 'about-us__text-changed' : ''}`}>
          {renderHighlightedText(header, true)}
          {renderHighlightedText(text, false)}
          </div>
        </>
      ) : (
        <>
          <div className={`about-us__text ${index % 2 !== 1 ? 'about-us__text-changed' : ''}`}>
          {renderHighlightedText(header, true)}
          {renderHighlightedText(text, false)}
          </div>
          <div className={`about-us__picture-container ${index % 2 !== 1 ? 'about-us__picture-changed' : ''}`}>
            <img src={imageSrc} alt="about-us__product-image" />
          </div>
        </>
      )}
    </div>
  );
}

export default AboutUsItem;

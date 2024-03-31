import React, { useState, useEffect } from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(swiper.slides.length);

  useEffect(() => {
    const updateSlideInfo = () => {
      let newIndex = swiper.realIndex;
      if (swiper.params.loop) {
        newIndex = (newIndex + swiper.params.slidesPerGroup) % swiper.slides.length;
        if (newIndex === 0) newIndex = swiper.slides.length;
      }
      setActiveIndex(newIndex);
      setTotalSlides(swiper.slides.length);
    };

    swiper.on('slideChange', updateSlideInfo);

    return () => {
      swiper.off('slideChange', updateSlideInfo);
    };
  }, [swiper]);

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>{'<'}</button>
      <span>{activeIndex} / {totalSlides}</span>
      <button onClick={() => swiper.slideNext()}>{'>'}</button>
    </div>
  );
};
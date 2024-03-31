import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import CatalogueCard from '../Menu/CatalogueCard';
import { SwiperNavButtons } from '../UI/SwiperNavButtons';

const RecommendationsCarousel = ({ recommendations }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="product__category-item">
      <div className="category-name">Додайте напої до вашого замовлення</div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={32}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
          1440: { slidesPerView: 4, spaceBetween: 32 }
        }}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        style={{ maxWidth: '100%' }}
      >
        {recommendations.map((recommendation, index) => (
          <SwiperSlide key={index}>
            <CatalogueCard
              image={recommendation.image}
              title={recommendation.title}
              weight={recommendation.weight}
              price={recommendation.price}
            />
          </SwiperSlide>
        ))}
        <SwiperNavButtons activeIndex={activeIndex} />
      </Swiper>
    </div>
  );
};

export default RecommendationsCarousel;

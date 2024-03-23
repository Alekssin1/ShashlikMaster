import React, { useState } from 'react';
import '../../styles/Reviews.scss'
import ReviewCard from '../UI/ReviewCard';
import { Element } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { ReactComponent as NextArrowSVG} from '../../assets/images/Reviews/arrow-left.svg';
import { ReactComponent as PreviousArrowSVG} from '../../assets/images/Reviews/arrow-right.svg';


const reviews = [
    {
      name: "Олена",
      text: "Смачно готують. Ціни супер. Доставили швидко.",
      rating: 5,
    },
    {
      name: "В'ячеслав",
      text: "Дуже смачний люля кебаб, а також швидка доставка, рекомендую!",
      rating: 5,
      current:true
    },
    {
      name: "Степан",
      text: "Найсмачніший шашлик, який я їв на даний моментfdsafffffff ffffffffffffffffffffffffffffffff fffffffffff fffffffff.",
      rating: 5,
    },
  ];

function Reviews() {

const [currentIndex, setCurrentIndex] = useState(reviews.findIndex(review => review.current));

  return (
    <Element name="reviews" className='reviews'>
        <h1>Що кажуть про нас клієнти</h1>
        <NextArrowSVG className = "reviews__next-slide" />
        <PreviousArrowSVG className = "reviews__previous-slide"/>
        <div className="reviews__content">
            <div className="reviews__card-container">
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        name={review.name}
                        text={review.text}
                        rating={review.rating}
                        current={index === currentIndex}
                    />
                ))}
            </div>
        
        </div>
    </Element>
  )
}

export default Reviews

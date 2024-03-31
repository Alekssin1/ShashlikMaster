import React, { useState } from 'react';
import '../../styles/Reviews.scss'
import ReviewCard from '../UI/ReviewCard';
import { Element } from 'react-scroll';
import { ReactComponent as PreviousArrowSVG} from '../../assets/images/Reviews/arrow-left.svg';
import { ReactComponent as NextArrowSVG} from '../../assets/images/Reviews/arrow-right.svg';
import Slider from "react-slick";


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
      text: "Найсмачніший шашлик, який я їв на даний момент",
      rating: 5,
    },
    {
      name: "Олег",
      text: "Найсмачніший шашлик, який я їв на даний момент",
      rating: 5,
    },
    {
      name: "Інна",
      text: "Найсмачніший шашлик, який я їв на даний момент",
      rating: 4,
    },
    {
      name: "Джеремі",
      text: "Найсмачніший шашлик, який я їв на даний момент",
      rating: 4,
    },
    {
      name: "Оля",
      text: "Найсмачніший шашлик, який я їв на даний момент",
      rating: 5,
    },
  ];

function Reviews() {

const [currentIndex, setCurrentIndex] = useState(reviews.findIndex(review => review.current));
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  centerPadding: "20px",
  speed: 600,
  nextArrow: <NextArrowSVG className="arrow-controller"  />,
  prevArrow: <PreviousArrowSVG className="arrow-controller" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
};

  return (
    <Element name="reviews" className='reviews'>
        <h1>Що кажуть про нас клієнти</h1>
        <div className="slider-container">
          <Slider {...settings}>
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        name={review.name}
                        text={review.text}
                        rating={review.rating}
                        current={index === currentIndex}
                    />
                ))}
          </Slider>
        </div>
        
    </Element>
  )
}

export default Reviews

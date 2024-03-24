import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/Recommendation.scss'
import Skewer from '../../assets/images/Recommendation/skewer.png'
import Product from '../../assets/images/Recommendation/productr.png'
import Product2 from '../../assets/images/Recommendation/product2.png'
import Set from '../../assets/images/Recommendation/set.png'
import RecommendationCard from '../UI/RecommendationCard';
import { ReactComponent as PreviousArrowSVG} from '../../assets/images/Reviews/back.svg';
import { ReactComponent as NextArrowSVG} from '../../assets/images/Reviews/forward.svg';



const products = [
    {
      title: "Шашлик з телятини",
      weight: "100г",
      price: "100 ГРН",
      image: Product, 
    },
    {
        title: "Шашлик з курятини",
        weight: "100г",
        price: "250 ГРН",
        image: Product2, 
    },
    {
        title: "Сет з 12 страв",
        weight: "4000г",
        price: "2000 ГРН",
        image: Set, 
    },
    {
        title: "Шашлик з телятини",
        weight: "400г",
        price: "2664 ГРН",
        image: Product, 
    },
    {
        title: "Шашлик з телятини",
        weight: "100г",
        price: "100 ГРН",
        image: Product2, 
    },
    {
        title: "Шашлик з телятини",
        weight: "100г",
        price: "100 ГРН",
        image: Set, 
    },
    {
        title: "Шашлик з телятини",
        weight: "100г",
        price: "100 ГРН",
        image: Product, 
    },
    {
        title: "Шашлик з телятини",
        weight: "100г",
        price: "100 ГРН",
        image: Product2, 
    },
    {
        title: "Шашлик з телятини",
        weight: "100г",
        price: "100 ГРН",
        image: Set, 
    },
  ];


function Recommendation() {
    var settings = {
        infinite: false,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrowSVG className="arrow-controller"  />,
        prevArrow: <PreviousArrowSVG className="arrow-controller" />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
        ]
      };
  return (
    <>  
        <div className="background-skewer">
            <img src={Skewer} alt='Delivery Note' />
        </div>
        <div className='recommendation'>
            <h1>Рекомендуємо скуштувати</h1>
            <Slider {...settings}>
                {products.map((product, index) => (
                    <RecommendationCard key={index} {...product}/>
                ))}
            </Slider>
        </div>
        <div className="background-skewer last-skewer">
            <img src={Skewer} alt='Delivery Note' />
        </div>
    </>
    
  )
}

export default Recommendation

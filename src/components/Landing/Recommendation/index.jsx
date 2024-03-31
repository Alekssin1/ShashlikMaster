import React, { useRef, useState, useEffect} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'components/Landing/Recommendation/index.scss'
import Product from 'assets/images/Recommendation/productr.webp'
import Product2 from 'assets/images/Recommendation/product2.webp'
import Set from 'assets/images/Recommendation/set.webp'
import RecommendationCard from 'components/UI/RecommendationCard';
import { ReactComponent as PreviousArrowSVG} from 'assets/images/Reviews/back.svg';
import { ReactComponent as NextArrowSVG} from 'assets/images/Reviews/forward.svg';



const products = [
    {
      id : 1,
      title: "Шашлик з телятини",
      weight: "100г",
      price: "100 ГРН",
      image: Product, 
    },
    {
        id : 2,
        title: "Шашлик з курятини",
        weight: "100г",
        price: "250 ГРН",
        image: Product2, 
    },
    {
        id : 3,
        title: "Сет з 12 страв",
        weight: "4000г",
        price: "2000 ГРН",
        image: Set, 
    },
    {
        id : 4,
        title: "Шашлик з телятини",
        weight: "400г",
        price: "2664 ГРН",
        image: Product, 
    },
    {
        id : 5,
        title: "Шашлик з телятини",
        weight: "100г",
        price: "100 ГРН",
        image: Product2, 
    },
    {
        id : 6,
        title: "Шашлик з телятини",
        weight: "100г",
        price: "100 ГРН",
        image: Set, 
    },
    {
        id : 7,
        title: "Шашлик з телятини",
        weight: "100г",
        price: "100 ГРН",
        image: Product, 
    },
    {
        id : 8,
        title: "Шашлик з телятини",
        weight: "100г",
        price: "100 ГРН",
        image: Product2, 
    },
    {
        id : 9,
        title: "Шашлик з телятини",
        weight: "100г",
        price: "100 ГРН",
        image: Set, 
    },
  ];


function Recommendation() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4); 

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesToShow(4);
      } else if (width >= 600) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  
  var settings = {
      infinite: false,
      lazyLoad: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToShow,
      initialSlide: 0,
      nextArrow: <NextArrowSVG className="arrow-controller"  />,
      prevArrow: <PreviousArrowSVG className="arrow-controller" />,
    };
  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const handleAfterChange = (currentSlide) => {
    setCurrentSlide(currentSlide);
  };
  const currentPage = Math.ceil(currentSlide / slidesToShow) + 1;
  const totalSlides = Math.ceil(products.length / slidesToShow);
 

  return (
    <>  
        <div class="background-skewer">
          <div class="background-skewer__circle"></div>
          <div class="background-skewer__line"></div>
        </div>
        <div className='recommendation'>
            <h1>Рекомендуємо скуштувати</h1>
            <Slider {...settings} ref={sliderRef} afterChange={handleAfterChange}>
                {products.map((product, index) => (
                    <RecommendationCard key={index} {...product}/>
                ))}
            </Slider>
            <div className="recommendation__custom-arrows">

              <button onClick={handlePrevClick} >{'<'}</button>
              <span>{currentPage} / {totalSlides}</span>
              <button onClick={handleNextClick} >{'>'}</button>
            </div>
        </div>
        <div class="background-skewer last-skewer">
          <div class="background-skewer__circle"></div>
          <div class="background-skewer__line"></div>
        </div>
    </>
    
  )
}

export default Recommendation

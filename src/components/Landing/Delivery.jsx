import { useEffect, useState } from 'react';
import '../../styles/Delivery.scss';
import { Element } from 'react-scroll';
import AboutUsItem from '../../assets/images/Delivery/delivery-list.png';
import AboutUsItemMobile from '../../assets/images/Delivery/background.png'; 
import { ReactComponent as SkewerStart } from '../../assets/images/Delivery/skewer-start.svg';
import { ReactComponent as SkewerEnd } from '../../assets/images/Delivery/skewer-end.svg';

function Delivery() {
  const [isMobileScreen, setIsMobile] = useState(window.innerWidth < 460);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 460);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Element name="delivery" className="delivery">
      <h1>
        Спробуйте раз - і станете нашим
        <br />
        постійни клієнтом
      </h1>
      <div className="delivery__note">
        <div className="delivery__image-container">
          {isMobileScreen ? (
            <img src={AboutUsItemMobile} alt="Delivery Note" />
          ) : (
            <img src={AboutUsItem} alt="Delivery Note" />
          )}
          <div className="delivery__text-overlay">
            <h2>Доставка</h2>
            <span>
              Мінімальна сума замовлення на доставку по Києву 300 грн,
              детальніше на сторінці “Доставка та оплата”.
            </span>
            <div className="delivery__order-delivery-button">
              <SkewerStart />
              <a href="#">Замовити</a>
              <SkewerEnd />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Delivery;
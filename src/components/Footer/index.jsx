import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import 'components/Footer/index.scss'
import { ReactComponent as Logo } from 'assets/images/Footer/Logo.svg';

function Footer({ footerItems, informationColumns }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallWidth, setIsSmallWidth] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 960);
      setIsSmallWidth(window.innerWidth <= 660);
    };

    checkScreenSize(); 

    const handleResize = () => {
      checkScreenSize(); 
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className='footer'>
      <div className="footer__content">
        <Logo className="footer__logo"/>
        <div className="footer__left">
          {isSmallScreen ? <h1>Інформація</h1> : null}
          <ul className="footer__information-list" style={{ columns: informationColumns }}>
            {footerItems.map((item, index) => (
              <li className="footer__information-item" key={index}>
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className="footer__information-link"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {isSmallWidth ? (
          <>
            <div className="footer__contacts">
              <h2>Контакти</h2>
              <ul className="footer__contacts-list">
                <li className="footer__contacts-item">+38(093) 448-27-73</li>
                <li className="footer__contacts-item">+38(099) 448-33-12</li>
                <li className="footer__contacts-item">+38(068) 455-84-69</li>
              </ul>
            </div>
            <div className="footer__delivery">
              <h2>Режим доставки</h2>
              <ul className="footer__delivery-list">
                <li className="footer__delivery-item">ПН-ПТ з 10:00 до 22:00</li>
                <li className="footer__delivery-item">СБ-НД с 10:00 до 23:00</li>
                <li className="footer__delivery-item">вул. Миколи Закревського 1</li>
              </ul>
            </div>
          </>
        ) : (
          <div className="footer__right">
            <div className="footer__contacts">
              <h2>Контакти</h2>
              <ul className="footer__contacts-list">
                <li className="footer__contacts-item">+38(093) 448-27-73</li>
                <li className="footer__contacts-item">+38(099) 448-33-12</li>
                <li className="footer__contacts-item">+38(068) 455-84-69</li>
              </ul>
            </div>
            <div className="footer__delivery">
              <h2>Режим доставки</h2>
              <ul className="footer__delivery-list">
                <li className="footer__delivery-item">ПН-ПТ з 10:00 до 22:00</li>
                <li className="footer__delivery-item">СБ-НД с 10:00 до 23:00</li>
                <li className="footer__delivery-item">вул. Миколи Закревського 1</li>
              </ul>
            </div>
          </div>
        )}
      </div> 
      <div className="footer__copyrighted">
        © 2024 Шашлик мастер
      </div>
    </div>
  )
}

export default Footer

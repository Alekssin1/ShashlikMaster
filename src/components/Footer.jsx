import React from 'react'
import { Link } from 'react-scroll'
import '../styles/Footer.scss'
import { ReactComponent as Logo } from '../assets/images/Footer/Logo.svg';


function Footer() {
  return (
    <div className='footer'>
      <div className="footer__content">
        <div className="footer__left">
          <Logo className="footer__logo"/>
            <ul className="footer__information-list">
             <li className="footer__information-item">
               <Link
                 to="about-us"
                 smooth={true}
                 duration={500}
                 className="footer__information-link"
               >
                 ПРО НАС
               </Link>
             </li>
             <li className="footer__information-item">
               <Link
                 to="reviews"
                 smooth={true}
                 duration={500}
                 className="footer__information-link"
               >
                 ВІДГУКИ
               </Link>
             </li>
             <li className="footer__information-item">
               <Link
                 to="delivery"
                 smooth={true}
                 duration={500}
                 className="footer__information-link"
               >
                 ДОСТАВКА ТА ОПЛАТА
               </Link>
             </li>
            </ul>
        </div>
        <div className="footer__right">
            <div className="footer__contacts">
              <h2>Контакти</h2>
              <ul className="footer__contacts-list">
                <li className="footer__contacts-item">
                  +38(093) 448-27-73
                </li>
                <li className="footer__contacts-item">
                  +38(099) 448-33-12
                </li>
                <li className="footer__contacts-item">
                  +38(068) 455-84-69
                </li>
              </ul>
            </div>
            <div className="footer__delivery">
              <h2>Режим доставки</h2>
              <ul className="footer__delivery-list">
                <li className="footer__delivery-item">
                 ПН-ПТ з 10:00 до 22:00
                </li>
                <li className="footer__delivery-item">
                 СБ-НД с 10:00 до 23:00
                </li>
                <li className="footer__delivery-item">
                 вул. Миколи Закревського 1
                </li>
              </ul>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default Footer

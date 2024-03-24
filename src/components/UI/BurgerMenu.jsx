import React from "react";
import '../../styles/Navbar.scss'
import { Link } from "react-scroll";


function BurgerMenu({ setIsOpen }) {
    const handleClick = () => {
        setIsOpen(false); 
    };
  return (
    
    <div className="burger-menu ">
      <nav>
        <ul className="burger-menu__navigation-list ">
            <li className="burger-menu__navigation-item">
            <Link
                to="about-us"
                smooth={true}
                duration={500}
                className="burger-menu-link"
                onClick={handleClick}>ПРО НАС</Link>
            </li>
            <li className="burger-menu__navigation-item">
            <Link
                to="reviews"
                smooth={true}
                duration={500}
                className="burger-menu-link"
                onClick={handleClick}>ВІДГУКИ</Link>
            </li>
            <li className="burger-menu__navigation-item">
            <Link
                to="delivery"
                smooth={true}
                duration={500}
                className="burger-menu-link"
                onClick={handleClick}>ДОСТАВКА ТА ОПЛАТА</Link>
            </li>
        </ul>
      </nav>
      <ul className="burger-menu__contacts-list">
        <li className="burger-menu__contacts-item">
          +38(093) 448-27-73
        </li>
        <li className="burger-menu__contacts-item">
          +38(099) 448-33-12
        </li>
        <li className="burger-menu__contacts-item">
          +38(068) 455-84-69
        </li>
      </ul>
    </div>
  )
}

export default BurgerMenu


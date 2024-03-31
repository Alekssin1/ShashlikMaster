import React from "react";
import '../../styles/Navbar.scss'
import { Link } from "react-scroll";


function BurgerMenu({ setIsOpen, navigationItems }) {
    const handleClick = () => {
        setIsOpen(false); 
    };
  return (
    
    <div className="burger-menu ">
      <nav>
      <ul className="burger-menu__navigation-list ">
            {navigationItems.map((item, index) => (
              <li className="burger-menu__navigation-item" key={index}>
                <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className="burger-menu-link"
                    onClick={handleClick}>
                    {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <ul className="burger-menu__contacts-list">
        <li className="burger-menu__contacts-item">
          <a href="tel:+380934482773">+38(093) 448-27-73</a>
        </li>
        <li className="burger-menu__contacts-item">
          <a href="tel:+380994483312">+38(099) 448-33-12</a>
        </li>
        <li className="burger-menu__contacts-item">
          <a href="tel:+380684558469">+38(068) 455-84-69</a>
        </li>
      </ul>
    </div>
  )
}

export default BurgerMenu


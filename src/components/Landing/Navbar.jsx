import React, { useState, useEffect } from "react";
import '../../styles/Navbar.scss'
import { Link } from "react-scroll";
import { ReactComponent as Logo} from '../../assets/images/Logo.svg';
import { ReactComponent as Call} from '../../assets/images/contact phone.svg';
import { ReactComponent as DropList} from '../../assets/images/arrow-down.svg';
import { ReactComponent as Cart} from '../../assets/images/Cart.svg';
import { ReactComponent as SmallerLogo } from "../../assets/images/smaller-logo.svg";
import { Sling as Hamburger } from 'hamburger-react'
import BurgerMenu from "../UI/BurgerMenu";

function Navbar({ navigationItems }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 540);
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsScrollingUp(currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className={`navigation-bar ${isScrollingUp ? "visible" : "hidden"} ${isOpen && isSmallScreen ? "hide-background" : ""}`}>
        <div className="navigation-bar__navigation-buttons">
          <a href="/" className="navigation-bar__logo">
            {isSmallScreen
              ? <SmallerLogo className="navigation-bar__logo-svg" />
              : <Logo className="navigation-bar__logo-svg" />
            }
          </a>
          <nav>
            <ul className="navigation-bar__navigation-list">
              {navigationItems.map((item, index) => (
                <li className="navigation-bar__navigation-item" key={index}>
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className="navigation-link"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="navigation-bar__interact-buttons">
          <div className="navigation-bar__interact-button navigation-bar__contacts-list" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <Call />
            <span>+38(093) 448-27-73</span>
            {isDropdownOpen && (
              <div className="navigation-bar__dropdown">
                <span>+38(099) 448-33-12</span>
                <span>+38(068) 455-84-69</span>
              </div>
            )}
            <DropList />
          </div>
          <div className="navigation-bar__interact-button">
            <Cart />
          </div>
          <div className="navigation-bar__interact-button">
            <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} size ={isSmallScreen ? 30:36}/>
          </div>
        </div>
      </header>
      {isOpen && <BurgerMenu setIsOpen={setOpen} />}
    </>
  );
}

export default Navbar;

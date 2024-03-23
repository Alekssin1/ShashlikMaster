import React, { useState, useEffect } from "react";
import '../../styles/Navbar.scss'
import { Link } from "react-scroll";
import { ReactComponent as Logo} from '../../assets/images/Logo.svg';
import { ReactComponent as Call} from '../../assets/images/contact phone.svg';
import { ReactComponent as DropList} from '../../assets/images/arrow-down.svg';
import { ReactComponent as Cart} from '../../assets/images/Cart.svg';



function Navbar() {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
  
        setIsScrollingUp(currentScrollPos < prevScrollPos);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    useEffect(() => {
      console.log("isScrollingUp:", isScrollingUp);
    }, [isScrollingUp]);
    
    return (
      <header className={`navigation-bar ${isScrollingUp ? "visible" : "hidden"}`}>
        <div className="navigation-bar__navigation-buttons">
            <a href="/" className="navigation-bar__logo">
              <Logo />
            </a>
            <nav>
                <ul className="navigation-bar__navigation-list">
                    <li className="navigation-bar__navigation-item">
                    <Link
                        to="about-us"
                        smooth={true}
                        duration={500}
                        className="navigation-link">ПРО НАС</Link>
                    </li>
                    <li className="navigation-bar__navigation-item">
                    <Link
                        to="reviews"
                        smooth={true}
                        duration={500}
                        className="navigation-link">ВІДГУКИ</Link>
                    </li>
                    <li className="navigation-bar__navigation-item">
                    <Link
                        to="delivery"
                        smooth={true}
                        duration={500}
                        className="navigation-link">ДОСТАВКА ТА ОПЛАТА</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
        <div className="navigation-bar__interact-buttons">
            <div className="navigation-bar__interact-button">
                <Call />
                <span>
                 +38(093) 448-27-73
                </span>
                <DropList />
            </div>
            <div className="navigation-bar__interact-button">
                <Cart />
            </div>
        </div>
      </header>
    );
}

export default Navbar;

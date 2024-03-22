import React from "react";
import '../../styles/Navbar.scss'
import { ReactComponent as Logo} from '../../assets/images/Logo.svg';
import { ReactComponent as Call} from '../../assets/images/contact phone.svg';
import { ReactComponent as DropList} from '../../assets/images/arrow-down.svg';
import { ReactComponent as Cart} from '../../assets/images/Cart.svg';


function Navbar() {
    return (
      <header className="navigation-bar">
        <div className="navigation-bar__navigation-buttons">
            <a href="/" className="navigation-bar__logo">
              <Logo />
            </a>
            <nav>
                <ul className="navigation-bar__navigation-list">
                    <li className="navigation-bar__navigation-item">
                        <a href="/about-us">ПРО НАС</a>
                    </li>
                    <li className="navigation-bar__navigation-item">
                        <a href="/reviews">ВІДГУКИ</a>
                    </li>
                    <li className="navigation-bar__navigation-item">
                        <a href="/derivery">ДОСТАВКА ТА ОПЛАТА</a>
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

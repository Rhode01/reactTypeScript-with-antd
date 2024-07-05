import React,{useState} from "react";
import "./header.css";
import Navigation from "./Navigation";
const Header: React.FC = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    const handletoggleMobileMenu = () =>{
        setMobileMenu(!mobileMenu)
    }
    return (
        <div>
            <div className="header-container">
                <div className="logo-container">
                    <div className="logo">
                        <span className="logo-icon">
                            <i className="uil uil-car-sideview"></i>
                            <span className="nav-title">Rhode</span>
                        </span>
                    </div>
                </div>
                <div className="navigation-container">
                    <div className={`nav-menu ${mobileMenu ? 'hide' : ''}`}>
                        <Navigation />
                    </div>
                    <div className="mobile-menu">
                        <span className="mobile-menu-toggle" onClick={handletoggleMobileMenu}>
                             <i className={mobileMenu ? "uil uil-times" :"uil uil-bars"} ></i>
                        </span>
                        {mobileMenu && (
                           <div className={`mobile-nav ${mobileMenu ? 'show' : ''}`}>
                                <Navigation  />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

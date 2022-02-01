import React, { useState } from "react";

import desktopLogo from "../../assests/images/logo.png";
import mobileLogo from "../../assests/images/mobile-logo.png";
import navOpen from "../../assests/images/nav-open.png";
import navClose from "../../assests/images/nav-close.png";
import "./nav-bar.styles.scss";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="nav-bar flex">
      <div className="logo">
        <img className="desktop-logo" src={desktopLogo} alt="" />
        <img className="mobile-logo" src={mobileLogo} alt="" />
      </div>

      <ul className={`nav-links ${isNavOpen ? "open" : "close"} flex`}>
        <li className="nav-link">Home</li>
        <li className="nav-link">Courses</li>
        <li className="nav-link">About</li>
      </ul>

      <div className="login flex">
        <button className="button login">Login</button>
        <button className="button">Sign Up</button>
      </div>

      <div onClick={() => setIsNavOpen(!isNavOpen)} className="toggle-nav">
        <img src={isNavOpen ? navClose : navOpen} alt="" srcset="" />
      </div>
    </div>
  );
};
export default Navbar;

import React from "react";
import logo from "../../assests/images/logo.png";
import "./footer.styles.scss";

import Column1 from "./column1.component";
import Column2 from "./column2.component";
import Column3 from "./column3.component";
import Column4 from "./column4.component";
import Column5 from "./column5.component";
import Column6 from "./column6.component";

const Footer = () => {
  return (
    <div className="footer flex">
      <img src={logo} alt="" />
      <div className="footer-links flex">
        <Column1 />
        <Column2 />
        <Column3 />
        <Column4 />
        <Column5 />
        <Column6 />
      </div>
    </div>
  );
};

export default Footer;

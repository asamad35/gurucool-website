import React from "react";
import "./app-section.styles.scss";

import mobile from "../../assests/images/mobile.png";
import playstore from "../../assests/images/playstore.png";
import appstore from "../../assests/images/appstore.png";

const AppSection = () => {
  return (
    <div className="app">
      <div className="app-box flex">
        <h1 className="app-heading primary-heading">
          Course app is available on Play store & App store
        </h1>
        <div className="download-button flex">
          <img src={playstore} alt="" />
          <img src={appstore} alt="" />
        </div>
      </div>
      <div className="mobile-picture">
        <img src={mobile} alt="" />
      </div>
    </div>
  );
};

export default AppSection;

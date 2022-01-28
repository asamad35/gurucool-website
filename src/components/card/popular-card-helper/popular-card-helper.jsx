import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faBookmark } from "@fortawesome/free-solid-svg-icons";

import "./popular-card-helper.styles.scss";

const PopularCardHelper = () => {
  return (
    <div className="popular flex">
      <div className="feature-box flex">
        <FontAwesomeIcon
          size="2x"
          style={{ color: "#F9C933", width: "1.6rem", height: "1.6rem" }}
          icon={faFire}
        />
        <p className="popular-text">Trending</p>
      </div>
      <FontAwesomeIcon
        size="2x"
        style={{ color: "#F9C933", width: "1.6rem", height: "1.4rem" }}
        icon={faBookmark}
      />
    </div>
  );
};

export default PopularCardHelper;

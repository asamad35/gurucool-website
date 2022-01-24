import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faBookmark } from "@fortawesome/free-solid-svg-icons";

import "./popular-card-helper.styles.scss";

const PopularCardHelper = () => {
  return (
    <div className="popular flex">
      <div className="feature-box flex">
        <FontAwesomeIcon size="2x" style={{ color: "#f9c933" }} icon={faFire} />
        <p className="popular-text">Trending</p>
      </div>
      <FontAwesomeIcon
        size="2x"
        style={{ color: "#f9c933" }}
        icon={faBookmark}
      />
    </div>
  );
};

export default PopularCardHelper;

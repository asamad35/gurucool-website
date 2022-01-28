import React from "react";
import "./grid-card.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const GridCard = ({ image, heading, ratings, reviews, price, bestSeller }) => {
  const ratingsArray = new Array(ratings).fill(0);
  return (
    <div className="grid-card flex">
      <div className="image-box">
        <img src={image} alt="" />
        {bestSeller ? (
          <span className="best-seller grid-best-seller flex">Bestseller</span>
        ) : (
          ""
        )}
      </div>
      <div className="text-box flex">
        <h1 className="heading-text secondary-paragraph">{heading}</h1>
        <div className="ratings flex">
          {ratingsArray.map(() => (
            <FontAwesomeIcon
              size="2x"
              style={{ color: "#EDB300", width: "1.5rem" }}
              icon={faStar}
            />
          ))}

          <span>{reviews}</span>
        </div>
        <div className="price">₹{price}</div>
      </div>
    </div>
  );
};

export default GridCard;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./card.styles.scss";
import PopularCardHelper from "./popular-card-helper/popular-card-helper";
import ProgrammingCardHelper from "./programming-card-helper/programming-card-helper";

const Card = ({
  heading,
  description,
  reviews,
  ratings,
  image,
  popular,
  programming,
  recommended,
  bestSeller,
}) => {
  const ratingsArray = new Array(ratings).fill(0);
  return (
    <>
      <div className="card-img">
        <img src={image} alt="" />
        {bestSeller ? <span className="best-seller">Bestseller</span> : ""}
      </div>
      <div className="card-text-box flex">
        <h2 className="card-heading">{heading}</h2>
        <p className="card-paragraph">{description}</p>
        <div className="card-rating flex">
          {ratingsArray.map(() => (
            <FontAwesomeIcon
              size="2x"
              style={{ color: "#EDB300" }}
              icon={faStar}
            />
          ))}

          <span className="card-paragraph">{reviews}</span>
        </div>

        {popular ? <PopularCardHelper /> : ""}
        {programming ? <ProgrammingCardHelper /> : ""}
        {recommended ? <ProgrammingCardHelper /> : ""}
      </div>
    </>
  );
};

export default Card;

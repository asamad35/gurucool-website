import React from "react";
import "./programming-card-helper.styles.scss";

const ProgrammingCardHelper = () => {
  return (
    <div className="programming-card-helper flex">
      <span className="secondary-heading discounted-price">₹455</span>
      <span className="secondary-paragraph original-price">₹600</span>
      <span className="secondary-paragraph discount">25% off</span>
    </div>
  );
};

export default ProgrammingCardHelper;

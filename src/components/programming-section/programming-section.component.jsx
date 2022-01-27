import React from "react";
import cardData from "./programming-cards-data";
import FreeCarousel from "../free-carousel/free-carousel";
import "./programming-section.styles.scss";

const ProgrammingSection = () => {
  return (
    <div className="section programming-section">
      <div className="text-box">
        <h2 className="secondary-heading ">
          Because you like <span> programming </span>
        </h2>
        <p className="secondary-paragraph">
          Learn new programming languages to enhance your skills
        </p>
      </div>

      <FreeCarousel cardData={cardData} extraSwiperHeight />

      <div className="flex">
        <div className="button flex ">See All</div>
      </div>
    </div>
  );
};

export default ProgrammingSection;

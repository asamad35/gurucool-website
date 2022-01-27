import React from "react";
import cardData from "./recommended-cards-data";
import FreeCarousel from "../free-carousel/free-carousel";
import "./recommended-section.styles.scss";

const RecommendedSection = () => {
  return (
    <div className="section recommended-section">
      <div className="text-box flex">
        <div className="heading-text flex">
          <h2 className="secondary-heading ">Recommended for you</h2>
          <p className="secondary-paragraph">
            Learn new recommended languages to enhance your skills
          </p>
        </div>
        <span className="secondary-paragraph">See All</span>
      </div>

      <FreeCarousel cardData={cardData} extraSwiperHeight />

      <div className="flex">
        <div className="button flex ">See All</div>
      </div>
    </div>
  );
};

export default RecommendedSection;

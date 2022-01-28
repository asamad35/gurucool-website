import React from "react";
import cardData from "./free-courses-cards-data";
import FreeCarousel from "../free-carousel/free-carousel";
import "./free-courses-section.styles.scss";

const FreeCoursesSection = () => {
  return (
    <div className="section free-courses-section">
      <div className="text-box">
        <h2 className="secondary-heading ">Free courses</h2>
        <p className="secondary-paragraph">
          Learn something completely new or improve your existing skills
        </p>
      </div>

      <FreeCarousel cardData={cardData} reduceSwiperHeight />
      <FreeCarousel cardData={cardData} reduceSwiperHeight />

      <div className="flex">
        <div className="button flex ">See All</div>
      </div>
    </div>
  );
};

export default FreeCoursesSection;

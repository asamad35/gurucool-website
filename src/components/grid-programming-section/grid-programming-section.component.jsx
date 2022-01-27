import React from "react";
// import cardData from "./popular-cards-data";
import "./grid-programming-section.styles.scss";
import GridCarousel from "../grid-carousel/grid-carousel.component";

const GridProgrammingSection = () => {
  return (
    <div className="section grid-programming-section">
      <div className="text-box">
        <h2 className="secondary-heading ">Programming</h2>
        <p className="secondary-paragraph">
          Learn something completely new or improve your existing skills
        </p>
      </div>

      <GridCarousel />

      <div className="flex">
        <div className="button flex ">See All</div>
      </div>
    </div>
  );
};

export default GridProgrammingSection;

import React from "react";
// import cardData from "./popular-cards-data";
import "./grid-programming-section.styles.scss";
import GridCarousel from "../grid-carousel/grid-carousel.component";
import gridCardData from "./grid-card/grid-programming-cards-data";

const GridProgrammingSection = () => {
  return (
    <div className="section grid-programming-section">
      <div className="text-box">
        <h2 className="secondary-heading mob-section-heading ">Programming</h2>
        <p className="secondary-paragraph  mob-section-paragraph">
          Learn something completely new or improve your existing skills
        </p>
      </div>

      <GridCarousel gridCardData={gridCardData} />

      <div className="flex">
        <div className="button flex ">See All</div>
      </div>
    </div>
  );
};

export default GridProgrammingSection;

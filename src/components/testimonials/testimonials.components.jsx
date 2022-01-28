import React from "react";
import "./testimonials.styles.scss";
import testimonialCardData from "./testimonials-card-data";

import NavigateCarousel from "../navigate-carousel/navigate-carousel.component";

const Testimonials = () => {
  console.log(testimonialCardData);
  return (
    <div className="testimonials-section section ">
      <h1 className="testimonials-heading secondary-heading">User Stories</h1>
      <NavigateCarousel testimonialCardData={testimonialCardData} />
    </div>
  );
};

export default Testimonials;

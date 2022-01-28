import React from "react";
import "./testimonial-card.styles.scss";

const TestimonialCard = ({ image, description, name }) => {
  return (
    <div className="testimonial-card flex">
      <div className="testimonial-image">
        <img src={image} alt="" />
      </div>
      <p className="testimonial-para secondary-paragraph">{description}</p>
      <p className="testimonial-name">{name}</p>
    </div>
  );
};

export default TestimonialCard;

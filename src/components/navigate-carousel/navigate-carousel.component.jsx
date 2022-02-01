import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "../testimonials/testimonial-card/testimonial-card.component";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./navigate-carousel.styles.scss";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function NavigateCarousel({ testimonialCardData }) {
  return (
    <div className="navigate-carousel">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // slidesPerGroup={3}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1496: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        className="mySwiper"
      >
        {testimonialCardData.map(({ key, ...otherProps }) => (
          <SwiperSlide key={key}>
            <TestimonialCard {...otherProps} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

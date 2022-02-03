import React from "react";
import Card from "../card/card.component";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./free-carousel.scss";
// import Swiper core and required modules
import SwiperCore, { FreeMode, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Pagination]);

const FreeCarousel = ({ cardData, extraSwiperHeight, reduceSwiperHeight }) => {
  return (
    <div className="free-swiper">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={15}
        freeMode={true}
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1496: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className={`${extraSwiperHeight ? "extraSwiperHeight" : ""} ${
          reduceSwiperHeight ? "reduceSwiperHeight" : ""
        }`}
      >
        {cardData.map(({ key, ...otherProps }) => (
          <SwiperSlide key={key}>
            <Card {...otherProps} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FreeCarousel;

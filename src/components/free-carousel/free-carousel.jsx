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

const FreeCarousel = ({ cardData, programming }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      className={`mySwiper ${programming ? "programmingSwiper" : ""}`}
    >
      {cardData.map(({ key, ...otherProps }) => (
        <SwiperSlide key={key}>
          <Card {...otherProps} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FreeCarousel;

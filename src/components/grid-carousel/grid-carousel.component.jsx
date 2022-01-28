import React from "react";

import GridCard from "../grid-programming-section/grid-card/grid-card.components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./grid-carousel.styles.scss";

// import Swiper core and required modules
import SwiperCore, { Grid, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Grid, Pagination, Navigation]);

export default function GridCarousel({ gridCardData }) {
  return (
    <div className="grid-swiper">
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className=""
      >
        {gridCardData.map(({ key, ...otherProps }) => (
          <SwiperSlide>
            <GridCard {...otherProps} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

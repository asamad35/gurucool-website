import React from 'react';
import Card from '../card/card.component';
import cardData from './popular-cards'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../carousel.scss";
// import Swiper core and required modules
import SwiperCore, { FreeMode, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Pagination]);

const PopularSection = () => {
    return (
        <div className='section popular-section'>
            <div className="text-box">
                <h2 className="secondary-heading ">What’s popular</h2>
                <p className='secondary-paragraph'>Learn something completely new or improve your existing skills</p>
            </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
         { cardData.map(({key,...otherProps})=>
            <SwiperSlide key={key} >
                <Card {...otherProps} />
            </SwiperSlide>
          )
          }
     
      </Swiper>
        </div>
    );
};

export default PopularSection;
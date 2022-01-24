import React from 'react';
import cardData from './popular-cards'
import FreeCarousel from '../free-carousel/free-carousel';
import './popular-section.styles.scss';




const PopularSection = () => {
    return (
        <div className='section popular-section'>
            <div className="text-box">
                <h2 className="secondary-heading ">What’s popular</h2>
                <p className='secondary-paragraph'>Learn something completely new or improve your existing skills</p>
            </div>

          <FreeCarousel cardData={cardData}/>

          <div className='flex'>
          <div className="button flex ">See All</div>
          </div>
        </div>
    );
};

export default PopularSection;
import React from 'react';

import './hero-section.styles.scss'
import heroGirl from '../../assests/images/heroGirl.png'

import wave1 from '../../assests/vectors/wave1.svg'
import wave2 from '../../assests/vectors/wave2.svg'


const HeroSection = () => {
    return (
        <div className='flex hero-section '>

            <div className="flex hero-text-box">

                <h1 className='hero-heading primary-heading'>
                Let’s learn to build a beautiful world
                </h1>

                <div className="flex input ">
                <input type="text" placeholder ='Search from our 1000+ courses' />
                <button className='button start-learning' >Start Learning</button>
                </div>

                <a className='navigate hero-navigate'>Explore all courses</a>

            </div>

            <div className="hero-image-box">
                <img src={heroGirl} alt="" />
            </div>
            
            <img className="wave1" src={wave1} alt="" />
            <img className="wave2" src={wave2} alt="" />

            
        </div>
    );
};

export default HeroSection;
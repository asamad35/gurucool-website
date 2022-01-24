import React from "react";
import './home-page.styles.scss'


import Navbar from "../../components/nav-bar/nav-bar.component";
import HeroSection from "../../components/hero-section/hero-section.component";
import PopularSection from "../../components/popular-section/popular-section.component";

const HomePage = ()=>{
    return(
        <div className="home">
            <Navbar/>
            <HeroSection/>
            <PopularSection/>
        </div>
    )
}

export default HomePage;
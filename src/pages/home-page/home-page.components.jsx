import React from "react";
import "./home-page.styles.scss";

import Navbar from "../../components/nav-bar/nav-bar.component";
import HeroSection from "../../components/hero-section/hero-section.component";
import PopularSection from "../../components/popular-section/popular-section.component";
import ProgrammingSection from "../../components/programming-section/programming-section.component";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <PopularSection />
      <ProgrammingSection />
    </div>
  );
};

export default HomePage;

import React from "react";
import "./home-page.styles.scss";

import Navbar from "../../components/nav-bar/nav-bar.component";
import HeroSection from "../../components/hero-section/hero-section.component";
import PopularSection from "../../components/popular-section/popular-section.component";
import ProgrammingSection from "../../components/programming-section/programming-section.component";
import RecommendedSection from "../../components/recommended-section/recommended-section.component";
import AchieveGoals from "../../components/achieve-goals/achieve-goals.component";
import OurVision from "../../components/our-vision/our-vision.component";
import AppSection from "../../components/app-section/app-section.component";
import TeachHere from "../../components/teachHere/teachHere.component";
import Footer from "../../components/footer/footer.component";
import GridProgrammingSection from "../../components/grid-programming-section/grid-programming-section.component";
import Testimonials from "../../components/testimonials/testimonials.components";
import FreeCoursesSection from "../../components/free-courses-section/free-courses-section.component";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <PopularSection />
      <ProgrammingSection />
      <RecommendedSection />
      <GridProgrammingSection />
      <AchieveGoals />
      <OurVision />
      <FreeCoursesSection />
      <Testimonials />
      <AppSection />
      <TeachHere />
      <Footer />
    </div>
  );
};

export default HomePage;

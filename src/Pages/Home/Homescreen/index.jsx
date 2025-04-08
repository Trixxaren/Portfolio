import React from "react";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
    </>
  );
};

export default Home;

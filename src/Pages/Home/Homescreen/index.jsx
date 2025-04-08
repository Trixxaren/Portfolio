import React from "react";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;

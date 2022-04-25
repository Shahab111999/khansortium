import React from "react";
import HeroContainer from "../Hero";
import newsroomBanner from '../../assets/newsroomBanner.jpg'


const Hero = () => {
  let slidesContent = [
    {
      img:newsroomBanner,
      slide: "firstSlide",
      p: "Get the latest news and feature stories on our businesses, community initiatives, heritage and people. Scroll to read.",
      heading: "News and Features",
      btn: "Read Stories",
    },
  ];
  return <HeroContainer slidesContent={slidesContent} />;
};

export default Hero;
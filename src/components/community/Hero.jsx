import React from "react";
import HeroContainer from "../Hero";

const Hero = () => {
  let slidesContent = [
    {
      img:'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      slide: "firstSlide",
      p:'The group’s Corporate Social Responsibility has benefited the community in many ways. From mobile covid testing campaigns, health awareness drives, free public internet initiatives, sponsoring local sports teams to aiding in disaster reliefs, Khansortium group has always focused on serving the local community since its inception.',
      heading: "Our Initiatives",
      btn: "Read Stories",
    },
  ];
  return (
  <div id="Community_Initiatives">
    <HeroContainer slidesContent={slidesContent} />
  </div>
  );
};

export default Hero;

import React from "react";
import CommunityCards from "../components/community/CommunityCards";
import CommunityStories from "../components/community/CommunityStories";
import Details from "../components/community/Details";
import Divison from "../components/community/Divison";
import Events from "../components/community/Events";
import Hero from "../components/community/Hero";
import Intro from "../components/community/Intro";
import Sponsor from "../components/community/Sponsor";
import Slider from "../components/community/Slider";
import Drives from "../components/community/Drives";
import SliderSection from "../components/community/SliderSection";
import Layout from "../components/layout/Layout";
import BookMark from "../components/community/Bookmark";

const Community = () => {

  let khansortiumComm = {
    heading: "Khansortium Community",
    p: "Since the Tata group was formed more than 150 years ago, it has served as the custodian of public good, dedicated to making a positive social impact. 66% of Tata Sons’ equity is held by the Tata Trusts and dividends flow directly to support the philanthropic work of the Trusts. Over the past century and a half, the Tata group has calibrated its mission to address India’s most urgent needs. Check the carousel below to access sector-specific stories and initiatives.",
  };
  let drives = {
    heading: "Khansortium drives",
    p: "Since the Tata group was formed more than 150 years ago, it has served as the custodian of public good, dedicated to making a positive social impact. 66% of Tata Sons’ equity is held by the Tata Trusts and dividends flow directly to support the philanthropic work of the Trusts. Over the past century and a half, the Tata group has calibrated its mission to address India’s most urgent needs. Check the carousel below to access sector-specific stories and initiatives.",
  };
  let sponsor = {
    heading: "Sponsorship",
    p: "To encourage collaborative volunteering across group companies and leverage the combined power of over 700,000 Tata employees, their family members and retirees across the globe, we introduced a group-level volunteering platform, Tata Engage in 2014. The Tata Engage platform helps volunteers to engage with the community by contributing their time and skills through the three distinct formats – experiential volunteering events through Tata Volunteering Weeks, skill-based, weekend projects through ProEngage and volunteering for Tata Disaster Responses. Over the past five years, the Tata group has clocked over 1 million volunteering hours annually, placing us among the top 15 corporate volunteering programs globally. In FY20, the group achieved 1.52 million volunteering hours, creating a milestone with hours in excess of 1.5 million for the first time",
  };
  let event = {
    heading: "Disaster Relief Contribution ",
    p: "To encourage collaborative volunteering across group companies and leverage the combined power of over 700,000 Tata employees, their family members and retirees across the globe, we introduced a group-level volunteering platform, Tata Engage in 2014. The Tata Engage platform helps volunteers to engage with the community by contributing their time and skills through the three distinct formats – experiential volunteering events through Tata Volunteering Weeks, skill-based, weekend projects through ProEngage and volunteering for Tata Disaster Responses. Over the past five years, the Tata group has clocked over 1 million volunteering hours annually, placing us among the top 15 corporate volunteering programs globally. In FY20, the group achieved 1.52 million volunteering hours, creating a milestone with hours in excess of 1.5 million for the first time",
  };
  return (
    <Layout>
      <Hero />
      <Intro />
      <SliderSection/>
      
      {/* <Details dets={khansortiumComm} /> */}
      {/* <Divison/> */}
      {/* <Drives/> */}
      {/* <Details dets={drives} /> */}
      {/* <Sponsor/> */}
      {/* <Details dets={sponsor} /> */}
      {/* <Events/> */}
      {/* <Details dets={event} /> */}
      
      {/* <Slider /> */}
      {/* <CommunityCards />
      <CommunityStories /> */}
      <BookMark/>
    </Layout>
  );
};

export default Community;

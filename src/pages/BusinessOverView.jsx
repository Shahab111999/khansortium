import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Details from "../components/business/Details";
import Hero from "../components/business/Hero";
import Verticals from "../components/business/Verticals";
import VerticalCards from "../components/VerticalCards";
import NewVerticalCards from "../components/landing/NewVerticalCards";
import { useLocation } from "react-router";
import BookMarks from "../components/business/BookMarks";
const BusinessOverView = () => {
  const {hash} = useLocation()
  useEffect(()=>{
  let timer
  if(hash && hash!== "#Business_Overview" && hash !== "#Business_Details" && hash !== "#Vertical_Cards"){
      let scrll = window.innerHeight 
     timer = setTimeout(()=>{
             window.scrollTo(0,scrll)
     },60)
  }
  },[hash ])
  return (
    <>
      <Layout>
        <Hero />
        {/* <Details /> */}
        {/* <VerticalCards/> */}
        <NewVerticalCards/>
        <BookMarks/>
        {/* <Verticals /> */}
      </Layout>
    </>
  );
};

export default BusinessOverView;

import React, { lazy, Suspense } from "react";
import Hero from "../components/landing/Hero";
// import News from "../components/landing/News";
import Heritage from "../components/landing/Heritage";
// import Careers from "../components/landing/Careers";
import Brands from "../components/landing/Brands";
import Layout from "../components/layout/Layout";
import BookMarks from "../components/landing/BookMarks";
// import FbPost from "../components/landing/FbPost";
// import FacebookPosts from "../components/FacebookPosts";
// import InstagramFeed from "../components/landing/InstagramFeed";
// import BusinessVericals from "../components/landing/BusinessVerticals";
// import NewVerticalCards from "../components/landing/NewVerticalCards";
// import SocialPosts from "../components/landing/SocialPosts";
// import CompanyCards from "../components/landing/CompanyCards";
// import ResponsiveCarousel from "../components/landing/ResponsiveCarousel";
// import TwitterFeed from "../components/landing/TwitterFeed";
// import InstaFeed from "../components/landing/InstaFeed";

// const Layout = lazy(() => import('../components/layout/Layout'))
// const Hero = lazy(() => import('../components/landing/Hero'))
// const Brands = lazy(() => import('../components/landing/Brands'))
// const Heritage = lazy(() => import('../components/landing/Heritage'))
const SocialPosts = lazy(() => import('../components/landing/SocialPosts'))
// const TwitterFeed = lazy(() => import('../components/landing/TwitterFeed'))
// const InstaFeed = lazy(() => import('../components/landing/InstaFeed'))

const Landing = () => {

  return (
    <>
    
        <Layout>
         {/* <FacebookPosts/> */}
            <Hero />
        
          {/* <ResponsiveCarousel/> */}
          {/* <CompanyCards/> */}
        
            <Brands />
       
          {/* <Careers /> */}
          {/* <BusinessVericals/> */}
          
            <Heritage />
         
          {/* <News /> */}
          {/* <NewVerticalCards/> */}
          <Suspense fallback={<div>loading...</div>}>
          {/* <div class="powr-facebook-feed" id="f073273c_1633651643"></div> */}
           
            <SocialPosts />
          </Suspense>
          {/* <Suspense fallback={<div>loading...</div>}>
            <TwitterFeed />
          </Suspense>
          <Suspense fallback={<div>loading...</div>}>
            <InstaFeed />
          </Suspense> */}
          <BookMarks />
        </Layout>
   
    </>
  );
};
export default Landing;

import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/newsroom/Hero";
import Newses from "../components/newsroom/Newses";
import SocialPosts from "../components/landing/SocialPosts";
import BlogNews from "../components/newsroom/News";

const News = () => {
  return (
    <Layout>
      {/* <BlogNews /> */}
      <Hero />
      <Newses />
      <SocialPosts bhaistatichnmeto />
    </Layout>
  );
};

export default News;

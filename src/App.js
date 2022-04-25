import "./App.css";
import "./horizontal_responsive.css";
import Landing from "./pages/Landing";
import { Switch, Route } from "react-router-dom";
import BusinessOverview from "./pages/BusinessOverView";
import Community from "./pages/Community";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import News from "./pages/News";
// import { useEffect } from "react";
// import scrollSnapPolyfill from 'css-scroll-snap-polyfill'
import Vertical from "./pages/Vertical";
import JobApplication from "./pages/JobApplication";
import FranchiseApplication from "./pages/FranchiseApplication";
import Verticals from "./pages/Verticals";
import PartnerApplication from "./pages/Partner";
import ContactUs from "./pages/ContactUs";
import JobResponsibility from "./pages/JobResponsibility";
import ThankYou from "./pages/ThankYou";

import { useLocation } from "react-router";

import BlogNews from "./components/newsroom/News";
import Layout from "./components/layout/Layout";
import TeamDetail from "./pages/TeamDetail";
import KhansortiumBlog from "./components/newsroom/KhansortiumBlog";
import KhansortiumBlog1 from "./components/newsroom/KhansortiumBlog1";
import AmericanTwenty20Blog from "./components/newsroom/AmericanTwenty20Blog";
import Blog from "./components/newsroom/Blog";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  // useEffect(() => {
  //   scrollSnapPolyfill()
  // }, [])

  const location = useLocation();

  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            if (!location.hash) {
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 50);
            }
            return <Landing key={Math.random() * 100} />;
          }}
        />
        <Route
          path="/business"
          render={() => {
            if (!location.hash) {
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 50);
            }
            return <BusinessOverview key={Math.random() * 100} />;
          }}
        />
        <Route
          path="/community"
          render={() => {
            if (!location.hash) {
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 50);
            }
            return <Community key={Math.random() * 100} />;
          }}
        />
        <Route
          path="/about"
          render={() => {
            if (!location.hash) {
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 50);
            }
            return <AboutUs key={Math.random() * 100} />;
          }}
        />
        <Route
          path="/careers"
          render={() => {
            if (!location.hash) {
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 50);
            }
            return <Careers key={Math.random() * 100} />;
          }}
        />

        <Route
          path="/newsroom"
          render={() => {
            if (!location.hash) {
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 50);
            }
            return <News key={Math.random() * 100} />;
          }}
        />
        <Route
          path="/contactus"
          render={() => {
            if (!location.hash) {
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 50);
            }
            return <ContactUs key={Math.random() * 100} />;
          }}
        />

        <Route path="/verticals:Id">
          <Vertical />
        </Route>
        <Route path="/team-detail/:Name">
          <TeamDetail />
        </Route>
        <Route path="/jobapplication:Id">
          <JobApplication />
        </Route>
        <Route path="/franchiseapplication:Id">
          <FranchiseApplication />
        </Route>
        <Route path="/companies:Id">
          <Verticals />
        </Route>
        <Route path="/partner_application">
          <PartnerApplication />
        </Route>

        <Route path="/job-responsibilities:Id">
          <JobResponsibility />
        </Route>
        <Route path="/blog/americanTwenty20Blog">
          <Layout>
            <AmericanTwenty20Blog />
          </Layout>
        </Route>
        <Route path="/blog/cricket">
          <Layout>
            <BlogNews />
          </Layout>
        </Route>
        <Route path="/blog/khansortium">
          <Layout>
            <KhansortiumBlog />
          </Layout>
        </Route>

        <Route path="/blog/khansortium1">
          <Layout>
            <KhansortiumBlog1 />
          </Layout>
        </Route>
        <Route path="/blogs/:title">
          <Layout>
            <Blog />
          </Layout>
        </Route>
        <Route path="/thank-you">
          <ThankYou />
        </Route>
      </Switch>
    </>
  );
}

export default App;

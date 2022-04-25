import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./carousel.css";
import background from "../assets/blog/blog2/thumbnaill.jpg";
import background1 from "../../src/assets/blog/blog2/khansortium_blog.jpg";
import background2 from "../../src/assets/blog/blog3/cricketballslide.webp";
import Blogs from "./newsroom/BlogContents";
export default function Carousel1() {
  return (
    <Carousel>
      {
        Blogs.map((item, index) => {
          return <div key={index}
            className="Grid2Card Grid2CardTwo"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${require(`../../public/images/${item.carouselImage}`).default})`
            }}
          >
            <span className="Grid2CardBadge">Blog</span>
            <Link to={`/blogs/${item.title}`}></Link>
            <div className="cardTwoContent" style={{ pointerEvents: "none" }}>
              <h1>{item.title}</h1>
            </div>

            <i className="fa fa-long-arrow-alt-right"> </i>
          </div>
        })
      }

    </Carousel>
  );
}


import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heraldLogo  from '../assets/logos/herald.jpeg'
import Carousel from "./Carousel";
const GridCards2 = ({ gridCardContent, GridBadge, children }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slider = useRef(null);

  useEffect(() => {
    /*   const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval); */
  }, [currentSlide]);

  const nextSlide = () => {
    /*  let dots = document.querySelectorAll(".Grid2CardSlideDot");
     dots.forEach((dot) => dot.classList.remove("Grid2CardSlideDotActive"));
     switch (currentSlide !== 3 ? currentSlide + 1 : 1) {
       case 1:
         slider.current.style.transform = "translateX(0)";
         dots[0].classList.add("Grid2CardSlideDotActive");
         break;
       case 2:
         slider.current.style.transform = "translateX(-33.33%)";
         dots[1].classList.add("Grid2CardSlideDotActive");
         break;
       case 3:
         slider.current.style.transform = "translateX(-66.66%)";
         dots[2].classList.add("Grid2CardSlideDotActive");
         break;
     }
     setCurrentSlide((prev) => (prev + 1 < 4 ? prev + 1 : 1)); */
  };
  const slide = (slideNum) => {
    /*  setCurrentSlide(slideNum);
     let dots = document.querySelectorAll(".Grid2CardSlideDot");
     dots.forEach((dot, index) =>
       index === slideNum - 1
         ? dot.classList.add("Grid2CardSlideDotActive")
         : dot.classList.remove("Grid2CardSlideDotActive")
     );
     switch (slideNum) {
       case 1:
         slider.current.style.transform = "translateX(0)";
         break;
       case 2:
         slider.current.style.transform = "translateX(-33.33%)";
         break;
       case 3:
         slider.current.style.transform = "translateX(-66.66%)";
         break;
     } */
  };

  return (
    <div style={{ backgroundColor: '#bababa' }} id='Grid2' className="Grid2">
      {children}
      {GridBadge && <div className="GridBadge">
        <span>{GridBadge}</span>
      </div>}

      <div className="Grid2CardContainer">

        <div className="Grid2Card Grid2CardOne">
      
          <Link to='blog/cricket'></Link>
      
          <div className="cardOneImg">
            <img src={gridCardContent[0].img} alt="" />
          </div>
          <div className="cardOneContent">
            <img className='herald_logo' src={heraldLogo} alt="" />
            <span className="Grid2CardBadge">{gridCardContent[0].badge}</span>
            <div className="subContent">
              <h3>{gridCardContent[0].heading}</h3>
              <p>
                {
                  gridCardContent[0].p
                }
              </p>
            </div>
              <i className="fa fa-long-arrow-alt-right"></i>
           
          </div>
        </div>

           
        <div className=" Grid2CardTwo">
   
        <Carousel/>
        </div>
          {/* <Link to='/blog/khansortium'></Link>
          <img src={gridCardContent[1]} alt="" />
          <span className="Grid2CardBadge">Blog</span>
          <div className="cardTwoContent" style={{ pointerEvents: 'none' }}>
            <h2>
            Khansortium is spreading its wings across Chicagoland
            </h2>
            <p>
              <i>
                {gridCardContent[1].p}
              </i>
            </p>
          </div>
          <Link to='/blog/khansortium'>

           
          <i className="fa fa-long-arrow-alt-right"></i>
        ‏‏‏‏</Link> */}
     


        
        <div className="Grid2Card Grid2CardThree">
          <Link to='business#All'></Link>
          <span className="Grid2CardBadge">{gridCardContent[2].badge}</span>
          <div className="cardThreeContent">
            <i className={gridCardContent[2].icon}></i>
            <h3>{gridCardContent[2].number}</h3>
            <span>{gridCardContent[2].span}</span>
          </div>
          <i className="fa fa-long-arrow-alt-right"></i>
        </div>
        <div className="Grid2Card Grid2CardFour">
          {/* <Link to='careers'></Link> */}
          <span className="Grid2CardBadge">{gridCardContent[3].badge}</span>
          <span>{gridCardContent[3].heading}</span>
          <div ref={slider} className="JobsSlider">
            {
              gridCardContent[3].slides.map((slideContent, index) => (

                <div className="jobsSlide" key={index + GridBadge}>
                  <ul>
                    {slideContent.lists.map((listItem, index) => (
                      <li key={index + GridBadge}>
                        {listItem.span} <br />
                        <Link to={listItem.link}>
                          <i>{listItem.i}</i>
                        </Link>
                      </li>

                    ))}

                  </ul>
                </div>
              ))
            }
          </div>
          <Link to='careers'>
            <i className="fa fa-long-arrow-alt-right"></i>
          </Link>
          {/*  <div className="Grid2CardSlideDots">
              <span
                onClick={() => slide(1)}
                className="Grid2CardSlideDot Grid2CardSlideDotActive"
              ></span>
              <span
                onClick={() => slide(2)}
                className="Grid2CardSlideDot"
              ></span>
              <span
                onClick={() => slide(3)}
                className="Grid2CardSlideDot"
              ></span>
            </div> */}
        </div>
      </div>
    </div>

  )
}

export default GridCards2

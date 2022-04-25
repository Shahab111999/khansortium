import React, { useEffect, useRef, useState } from "react";

const VerticalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  let slidesContent = [
    {
      img:"https://khansortium.netlify.app/static/media/nabil1-min.b5e96ce1.jpg",
      slide: "firstSlide",
      p: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
      heading: "Telecommunication",
      btn: "View Details",
    },
    {
      img:"https://khansortium.netlify.app/static/media/nabil1-min.b5e96ce1.jpg",
      slide: "secondSlide",
      p: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
      heading: "Media Marketing",
      btn: "View Details",
    },
    {
img:"https://khansortium.netlify.app/static/media/nabil1-min.b5e96ce1.jpg",
      slide: "thirdSlide",
      p: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
      heading: "Real Estate",
      btn: "View Details",
    },
    {
img:"https://khansortium.netlify.app/static/media/nabil1-min.b5e96ce1.jpg",
      slide: "fourthSlide",
      p: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
      heading: "Entertainment",
      btn: "View Details",
    },
  ];
  const firstSlide = useRef(null);
  const secondSlide = useRef(null);
  const thirdSlide = useRef(null);
  const fourthSlide = useRef(null);
  const slides = [firstSlide, secondSlide, thirdSlide,fourthSlide];
  const slider = useRef(null);
  const slideCount = useRef(null);
  const [play,setPlay] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => {
    slidesContent.length > 1 &&  play &&nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide,play]);
  const nextSlide = () => {
    slides.forEach((slide) => slide.current.classList.remove("active"));
    switch (currentSlide) {
      case 1:
        slider.current.style.transform = "translateX(-100vw)";
        secondSlide.current.classList.add("active");
        slideCount.current.classList.contains("slideT") &&
          slideCount.current.classList.remove("slideT");
        slideCount.current.classList.add("slideO");
        setCurrentSlide(2);
        break;
      case 2:
        slider.current.style.transform = "translateX(-200vw)";
        thirdSlide.current.classList.add("active");
        slideCount.current.classList.add("slideT");
        setCurrentSlide(3);
        break;
      case 3:
        slider.current.style.transform = "translateX(-300vw)";
        fourthSlide.current.classList.add("active");
        slideCount.current.classList.contains("slideT") &&
          slideCount.current.classList.remove("slideT");
        slideCount.current.classList.contains("slideO") &&
          slideCount.current.classList.remove("slideO");
        setCurrentSlide(4);
        break;
      case 4:
        slider.current.style.transform = "translateX(0)";
        firstSlide.current.classList.add("active");
        slideCount.current.classList.contains("slideT") &&
          slideCount.current.classList.remove("slideT");
        slideCount.current.classList.contains("slideO") &&
          slideCount.current.classList.remove("slideO");
        setCurrentSlide(1);
        break;
    }
  };
  const prevSlide = () => {
    slides.forEach((slide) => slide.current.classList.remove("active"));
    switch (currentSlide) {
      case 1:
        slider.current.style.transform = "translateX(-300vw)";
        fourthSlide.current.classList.add("active");
        thirdSlide.current.classList.add("active");
        // slideCount.current.classList.add("slideT");
        setCurrentSlide(4);
        break;
      case 2:
        slider.current.style.transform = "translateX(0)";
        firstSlide.current.classList.add("active");
        slideCount.current.classList.contains("slideT") &&
          slideCount.current.classList.remove("slideT");
        slideCount.current.classList.contains("slideO") &&
          slideCount.current.classList.remove("slideO");
        setCurrentSlide(1);
        break;
      case 3:
        slider.current.style.transform = "translateX(-100vw)";
        secondSlide.current.classList.add("active");
        slideCount.current.classList.contains("slideT") &&
          slideCount.current.classList.remove("slideT");
        slideCount.current.classList.add("slideO");
        setCurrentSlide(2);
        break;
      case 4:
        slider.current.style.transform = "translateX(-200vw)";
        fourthSlide.current.classList.add("active");
        slideCount.current.classList.contains("slideT") &&
          slideCount.current.classList.remove("slideT");
        slideCount.current.classList.add("slideO");
        setCurrentSlide(3);
        break;
    }
  };
  return (
    <div id="Hero" className="Hero">
      <div ref={slider} className="HeroSlider">
    {
        slidesContent.map((slide,index)=>  (
        <div 
        key={index + slide.heading}
          ref={slide.slide =='fourthSlide' && fourthSlide || slide.slide == 'thirdSlide' && thirdSlide ||slide.slide =='secondSlide' &&secondSlide||firstSlide}
          id={slide.slide}
          className={`${slide.slide +" "+ slide.slide === 'firstSlide' && 'active' } slide`}
        >
          <div className="slideImg">
            <img src={slide.img} alt="" />
          </div>

          <div className="slideContent">
           {slide.badge && <div className="badge">
              <em>{slide.badge}</em>
            </div>}
            <h1>{slide.heading}</h1>
            <div className="slideSubContent">
              <p>
              {slide.p}
              </p>
              <button>
{slide.btn}                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>

        ))
    }
      
      </div>
   { slidesContent.length > 1 &&  <div className="slideCounter">
        <div ref={slideCount} className="slideCounts">
          <span>
            <strong>{currentSlide}</strong>
          </span>{" "}
          / <span>4</span>
        </div>
        <div className="prevNext">
          <span onClick={prevSlide}>
            <i className="fa fa-chevron-left"></i> Prev
          </span>
          <span>
            {
              play?
              <i onClick={()=>setPlay(!play)} className="fa fa-pause"></i>
              :
            <i onClick={()=>setPlay(!play)} className="fa fa-play"></i>
            }
          </span>
          <span onClick={nextSlide}>
            Next <i className="fa fa-chevron-right"></i>
          </span>
        </div>
      </div>
   } </div>
  );
};

export default VerticalSlider;

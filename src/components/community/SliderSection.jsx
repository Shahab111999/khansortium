import React, { useEffect, useRef, useState } from "react";
import mobvac from '../../assets/mob_vac.png'
import mobvacmobile from '../../assets/mob_vac_mobile.png'
import medical from '../../assets/medi.png'
import medicalmob from '../../assets/mediMob.png'
import disaster from '../../assets/dis.png'
import disastermob from '../../assets/disMob.png'
import wifi from '../../assets/wifi.jpg'
import wifimob from '../../assets/wifiMob.jpg'
import cric from '../../assets/cric.jpg'
import wefixvan  from '../../assets/wefixvan.jpeg'
import disasterRelief from '../../assets/disasterRelief.jpeg'
import { useLocation } from "react-router";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [width,setWidth] = useState(window.innerWidth)
  const [images,setImages] = useState({
      slide1:width <768 ? mobvacmobile: mobvac,
      slide2:width <768 ? medicalmob: medical,
      slide3:cric,
      slide4:width <768 ? disastermob: disaster,
      slide5:width <768 ? wifimob: wifi,
  })
  const {hash} = useLocation()
  useEffect(()=>{
    let hashed = hash.replace('#',"")   
    let scroll = window.innerHeight + 600
    const scrollToSlider =()=>{
      window.scrollTo(0,scroll)
    }
    if(hashed === "Slide1"){
          setCurrentSlide(1)
          slider.current.style.transform = "translateX(0)";
        firstSlide.current.classList.add("active");
        slideCount.current.classList.contains("slideT") &&
          slideCount.current.classList.remove("slideT");
        slideCount.current.classList.contains("slideO") &&
          slideCount.current.classList.remove("slideO");
          setTimeout(()=>{

            scrollToSlider()
          },100)
        }
        if(hashed === "Slide2"){
          setCurrentSlide(2)
          slider.current.style.transform = "translateX(-100vw)";
        secondSlide.current.classList.add("active");
        slideCount.current.classList.contains("slideT") &&
          slideCount.current.classList.remove("slideT");
        slideCount.current.classList.add("slideO");
        setTimeout(()=>{

          scrollToSlider()
        },100)  
        }
        if(hashed === "Slide3"){
          setCurrentSlide(3)
          slider.current.style.transform = "translateX(-200vw)";
        thirdSlide.current.classList.add("active");
        slideCount.current.classList.add("slideT");
        setTimeout(()=>{

          scrollToSlider()
        },100)  
        }
        if(hashed === "Slide4"){
          setCurrentSlide(4)
          slider.current.style.transform = "translateX(-300vw)";
          fourthSlide.current.classList.add("active");
          slideCount.current.classList.contains("slideT") &&
            slideCount.current.classList.remove("slideT");
          slideCount.current.classList.contains("slideO") &&
            slideCount.current.classList.remove("slideO");
          setTimeout(()=>{

            scrollToSlider()
          },100)
        }
        if(hashed === "Slide5"){
          setCurrentSlide(5)
          slider.current.style.transform = "translateX(-400vw)";
        fifthSlide.current.classList.add("active");
        slideCount.current.classList.contains("slideT") &&
          slideCount.current.classList.remove("slideT");
        slideCount.current.classList.contains("slideO") &&
          slideCount.current.classList.remove("slideO");
          setTimeout(()=>{

            scrollToSlider()
          },100)
    }
  },[hash])

  useEffect(()=>{
      const handleResize=()=>{
        setWidth(window.innerWidth)
       setImages({
           slide1:width <768 ? mobvacmobile: mobvac,
           slide2:width <768 ? medicalmob: medical,
           slide4:width <768 ?disastermob: disaster,
           slide5:width <768 ?wifimob: wifi,
       })
    }
 window.addEventListener('resize',handleResize)
 return ()=> window.removeEventListener('resize',handleResize)
  },[width])
  let slidesContent = [
    {
      img:wefixvan ,
        badge:'CSR Drives',
      slide: "firstSlide",
      heading: "Free Onsite Covid Testing ",
      hatjabagairat:true
    },
    {
      img:images.slide2,
        slide: "secondSlide",
      badge:"Contribution to Cause ",
      heading: "Hayat Clinic Free Medical Services  ",
    },
    {
img:images.slide3,
      slide: "thirdSlide",
      badge:"Sports",
      heading: "Team Sponsors ",
    },
    {
        img:disasterRelief,
        slide: "fourthSlide",
        heading: "Disaster Relief ",
        badge:'CSR Drives'
    },
    {
      img:images.slide5,
      slide: "fifthSlide",
      badge:'EBB',
      heading: "Free Internet",
      subHeading:["The Emergency Broadband Program","by Boost Mobile 4.0"]
    },
  ];
  const firstSlide = useRef(null);
  const secondSlide = useRef(null);
  const thirdSlide = useRef(null);
  const fourthSlide = useRef(null);
  const fifthSlide = useRef(null);
  const slides = [firstSlide, secondSlide, thirdSlide,fourthSlide,fifthSlide];
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
        slider.current.style.transform = "translateX(-400vw)";
        fifthSlide.current.classList.add("active");
        slideCount.current.classList.contains("slideT") &&
          slideCount.current.classList.remove("slideT");
        slideCount.current.classList.contains("slideO") &&
          slideCount.current.classList.remove("slideO");
        setCurrentSlide(5);
        break;
      case 5:
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
        slider.current.style.transform = "translateX(-400vw)";
        fifthSlide.current.classList.add("active");
        // thirdSlide.current.classList.add("active");
        slideCount.current.classList.add("slideT");
        setCurrentSlide(5);
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
        thirdSlide.current.classList.add("active");
        slideCount.current.classList.contains("slideT") &&
          slideCount.current.classList.remove("slideT");
        slideCount.current.classList.add("slideO");
        setCurrentSlide(3);
        break;
      case 5:
        slider.current.style.transform = "translateX(-300vw)";
        fourthSlide.current.classList.add("active");
        slideCount.current.classList.contains("slideT") &&
          slideCount.current.classList.remove("slideT");
        slideCount.current.classList.add("slideO");
        setCurrentSlide(4);
        break;
    }
  };
  return (
    <div id="Drives">
   <div id="Hero" className="Hero">
      <div ref={slider} className="HeroSlider">
    {
        slidesContent.map((slide,index)=>  (
        <div 
        key={index + slide.heading}
          ref={slide.slide =='fifthSlide' && fifthSlide || slide.slide =='fourthSlide' && fourthSlide || slide.slide == 'thirdSlide' && thirdSlide ||slide.slide =='secondSlide' &&secondSlide||firstSlide}
          id={slide.slide}
          className={`${slide.slide +" "+ slide.slide === 'firstSlide' && 'active' } slide`}
        >
          <div className="slideImg">
            <img /* style={{objectPosition:slide.hatjabagairat && "-80px"}}  */src={slide.img} alt="" />
          </div>

          <div className="slideContent">
           {slide.badge && <div className="badge">
              <em>{slide.badge}</em>
            </div>}
            <h1>{slide.heading}</h1>
         { slide.subHeading && 
         <>
            <br />
            <h2>{slide.subHeading[0]} <br />
            
            {slide.subHeading[1]}</h2>


         </>
         
         }
        {slide.p &&    <div className="slideSubContent">
              <p>
              {slide.p}
              </p>
              <button>
{slide.btn}                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>}
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
          / <span>5</span>
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
 
    </div>
  );
};

export default Slider;

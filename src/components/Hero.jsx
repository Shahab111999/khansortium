import React, { useEffect, useRef, useState } from "react";
import {gsap} from 'gsap'
import Arrow from "./landing/Arrow";
import { Link } from "react-router-dom";
import AddressModal from "./modals/AddressModal";

const Hero = ({slidesContent,children}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  useEffect(()=>{
    let tl = gsap.timeline({delay:.7})
   slidesContent > 1 &&  tl
    .from(firstSlide.current.querySelector('h1'),{opacity:0,x:-200,duration:1})
    .from(firstSlide.current.querySelector('.slideSubContent'),{opacity:0,y:100})
    .from(firstSlide.current.querySelector('p'),{opacity:0,y:20,duration:.8})
    .from(firstSlide.current.querySelector('button'),{opacity:0,x:50,duration:.8})
    .from(firstSlide.current.querySelector('.badge'),{opacity:0,scale:0,duration:.8})
  },[])

  const firstSlide = useRef(null);
  const secondSlide = useRef(null);
  const thirdSlide = useRef(null);
  const slides = [firstSlide, secondSlide, thirdSlide];
  const slider = useRef(null);
  const slideCount = useRef(null);
  const [play,setPlay] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => {
    slidesContent.length > 1 &&  play &&nextSlide();
    }, 15000);
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
        slider.current.style.transform = "translateX(-200vw)";
        thirdSlide.current.classList.add("active");
        thirdSlide.current.classList.add("active");
        slideCount.current.classList.add("slideT");
        setCurrentSlide(3);
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
    }
  };
  const scrollDown =()=>{
    let height = window.innerHeight
    window.scrollTo(0,height)
}
const openModal =()=>{ 
  document.getElementById('addressModal').classList.add('active')
} 
  return (
    <div id="Hero" className="Hero">
      <div ref={slider} className="HeroSlider">
    {
        slidesContent.map((slide,index)=>  (
        <div 
        key={index + slide.heading}
          ref={slide.slide == 'thirdSlide' && thirdSlide ||slide.slide =='secondSlide' &&secondSlide||firstSlide}
          id={slide.slide}
          className={`${slide.slide +" "+ slide.slide === 'firstSlide' && 'active' } slide`}
        >
          <div id={slide.animatedBanner && 'animated_banner'} className="slideImg">
          { slide.img && <img src={slide.img} alt="" />
          }{children}
          </div>

          <div className="slideContent">
           {slide.badge && <div className="badge">
              <em>{slide.badge}</em>
            </div>}
            <h1 className={slide.text ==='blue' && "text_blue"}>{slide.heading}</h1>
         { slide.p && <div className="slideSubContent">
              <p className={slide.text ==='blue' && "text_blue"}>
              {slide.p}
              </p>
              {
                slide.secondBtn &&
                <a href={slide.secondBtn} target={slide.secondBtnLinkTargetBlank && "_blank"}>
                  <button className='FirstHeroBtnForVerticalPage'>
                        Visit Website  
                  </button>
                </a>
              }
              {slide.btn &&
               slide.insanbnja ? 
               <Link to={slide.insanbnja  !== 'Be A Managing Partner'? '/jobapplication23': '/partner_application'}>
                  <button className='SecondHeroBtnForVerticalPage'>
                    {slide.insanbnja}
                  </button>
               </Link>
               
               :
               slide.link? <Link to={slide.link}>
              <button onClick={scrollDown}>
                  
                  {
                     slide.btn
                  
                  }                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
               </Link>:
              <button onClick={scrollDown}>
                  
                  {
                     slide.btn
                  
                  }                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              }
                {/* {slidesContent[0].stores &&   <button onClick={openModal} className='FirstHeroBtnForVerticalPage'>
                      View Stores  
                  </button>
              }   */}
            </div>}
          </div>
        </div>

        ))
    }
      
      </div>
   { slidesContent.length > 1 &&  <div className={`slideCounter ${slidesContent[0].text && currentSlide === 1 &&  " slideCounterBlue"}`}>
        <div ref={slideCount} className="slideCounts">
          <span>
            <strong>{currentSlide}</strong>
          </span>{" "}
          / <span>3</span>
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
   } 
   <Arrow/>
   {/* <AddressModal heading={ slidesContent[0].heading ==='We Are Wireless Boost 4.0' ? " Boost 4.0" :slidesContent[0].heading} stores={slidesContent[0].stores}/> */}
   </div>
  );
};

export default Hero;

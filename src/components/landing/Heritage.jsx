import React, { useRef, useState } from "react";
import { useEffect } from "react";
import bg from '../../assets/user.jpg'

import ceo from '../../assets/team/ceo1.jpeg'
import ceo_mob from '../../assets/team/ceo1_mob.jpeg'
import ceo2 from '../../assets/team/ceo2.jpeg'
import ceo2_mob from '../../assets/team/ceo2_mob.jpeg'
import ceo3 from '../../assets/team/ceo3.jpeg';
import ceo3_mob from '../../assets/team/ceo3_mob.jpeg';
// import ceo4 from '../../assets/team/ceo4.jpg';
// import ceo4_mob from '../../assets/team/ceo4_mob.jpg'
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/all";
import heritage_img1 from '../../assets/team/heritage_bg1.webp'
import heritage_img2 from '../../assets/team/heritage_bg2.webp'
import heritage_img3 from '../../assets/team/heritage_bg3.webp'
import heritage_img4 from '../../assets/team/heritage_bg4.webp'
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger)

const Heritage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [inView,setInView] = useState(false)
  const [ceo_img,setCeo_img] = useState(window.innerWidth <768  ? ceo_mob:ceo)
  const [ceo2_img,setCeo2_img] = useState(window.innerWidth <768  ? ceo2_mob:ceo2)
  const [ceo3_img,setCeo3_img] = useState(window.innerWidth <768  ? ceo3_mob:ceo3)
  // const [ceo4_img,setCeo4_img] = useState(window.innerWidth <768  ? ceo4_mob:ceo4)

  useEffect(()=>{
    const handleResize =()=>{
     const isMobile = window.innerWidth< 768     
      setCeo_img(()=> isMobile? ceo_mob:ceo)
      setCeo2_img(()=> isMobile? ceo2_mob:ceo2)
      setCeo3_img(()=> isMobile? ceo3_mob:ceo3)
      // setCeo4_img(()=> isMobile? ceo4_mob:ceo4)
    }
    window.addEventListener('resize',handleResize)
    return ()=> window.removeEventListener('resize',handleResize)
  },[ceo])


  const container = useRef()
  let timeline= gsap.timeline({paused:true,defaults:{duration:"1s"}})
  useEffect(()=>{
   ScrollTrigger.create({
       trigger:container?.current,
       start:  "250px bottom",
       
       onEnter: ()=>{
         timeline.play()
         setTimeout(()=>{
           container?.current?.querySelector('.HeritageSlide1').classList.add('HeritageAnimation')
         },1000)
       
         setInView(true)
       }
   })
 },[])

  const slider = useRef(null);
  const slideOne = useRef(null);
  const slideTwo = useRef(null);
  const slideThree = useRef(null);
  const slideFour = useRef(null);
  const prevSlide = () => {
    let width = window.innerWidth * (currentSlide !== 1 ? currentSlide - 2 : 2);
    setCurrentSlide((prev) => (prev - 1 === 0 ? 3 : prev - 1));
    slider.current.scrollTo(width, 0);
    let slides = [slideOne, slideTwo, slideThree];
    slides.forEach(
      (slide) =>
        slide.current.classList.contains("HeritageAnimation") &&
        slide.current.classList.remove("HeritageAnimation")
    );

    switch (currentSlide) {
      case 1:
        slideThree.current.classList.add("HeritageAnimation");
        break;
      case 2:
        slideOne.current.classList.add("HeritageAnimation");
        break;
      case 3:
        slideTwo.current.classList.add("HeritageAnimation");
        break;
      
    }
  };

  useEffect(() => {
    let interval;
    if(inView){
       interval = setInterval(() => {
        nextSlide();
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [currentSlide,inView]);
  const nextSlide = () => {
    let width = window.innerWidth * (currentSlide < 3 ? currentSlide : 0);
    setCurrentSlide((prev) => (prev + 1 < 4 ? prev + 1 : 1));
    slider.current.scrollTo(width, 0);
    let slides = [slideOne, slideTwo, slideThree];
    slides.forEach(
      (slide) =>
        slide.current.classList.contains("HeritageAnimation") &&
        slide.current.classList.remove("HeritageAnimation")
    );

    switch (currentSlide) {
      case 1:
        slideTwo.current.classList.add("HeritageAnimation");
        break;
      case 2:
        slideThree.current.classList.add("HeritageAnimation");
        break;
      case 3:
        slideOne.current.classList.add("HeritageAnimation");
        break;
    //   case 4:
    //     slideOne.current.classList.add("HeritageAnimation");
    //     break;
    }
  };
  return (
    <div ref={container} id="Mangement" className="Heritage">
      <div className="HeritageBadge">
        <span>Our Management</span>
      </div>
      <div ref={slider} className="HeritageSlider">
    {/*     <div
          ref={slideOne}
          className="HeritageSlide HeritageSlide1 "
        >
          <img
            src='https://images.pexels.com/photos/4069293/pexels-photo-4069293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt=""
          />
          <div className="HeritageSlideContainer">
            <div className="HeritageSlideImg">
              <img
               src={img1}
               alt=""
              />
            </div>
            <div className="HeritageContent">
              <h2>Our Management</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                asperiores repellendus architecto maiores illo, velit esse
                magnam rem molestiae odit quisquam suscipit amet nam blanditiis
                molestias animi? Quisquam, quasi debitis!
                <i className="fa fa-long-arrow-alt-right"></i>
              </p>
            </div>
          </div>
        </div> */}
        <div ref={slideOne} className="HeritageSlide HeritageSlide1">
          <img
            src={heritage_img1}
            alt=""
          />
          <div className="HeritageSlideContainer">
            <div className="HeritageSlideImg">
              <img
                src={ceo_img}
                alt=""
              />
            </div>
            <div className="HeritageContent">
              <h2>Nadeem Khan</h2>
              <p>
              <span>Chairman</span>
              <Link to={`team-detail/Nadeem Khan`}>
                <button className='btn'>Read More</button>
              </Link>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                asperiores repellendus architecto maiores illo, velit esse
                magnam rem molestiae odit quisquam suscipit amet nam blanditiis
                molestias animi? Quisquam, quasi debitis! */}
                {/* <i className="fa fa-long-arrow-alt-right"></i> */}
              </p>
            </div>
          </div>
        </div>
        <div ref={slideTwo} className="HeritageSlide HeritageSlide2">
          <img
            src={heritage_img2}
            alt=""
          />{" "}
          <div className="HeritageSlideContainer">
            <div className="HeritageSlideImg">
              <img
                src={ceo2_img}
                alt=""
              />
            </div>
            <div className="HeritageContent">
              <h2>Aamir Khan</h2>
              <p>
                <span>Chairman</span>
                <Link to={`team-detail/Aamir Khan`}>
                  <button className='btn'>Read More</button>
                </Link>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                asperiores repellendus architecto maiores illo, velit esse
                magnam rem molestiae odit quisquam suscipit amet nam blanditiis
                molestias animi? Quisquam, quasi debitis! */}
                {/* <i className="fa fa-long-arrow-alt-right"></i> */}
              </p>
            </div>
          </div>
        </div>
        <div ref={slideThree} className="HeritageSlide HeritageSlide3">
          <img
            src={heritage_img3}
            alt=""
          />{" "}
          <div className="HeritageSlideContainer">
            <div className="HeritageSlideImg">
              <img
                src={ceo3_img}
                alt=""
              />
            </div>
            <div className="HeritageContent">
              <h2>Nabbil Khan</h2>

              <p>
                <span>Chairman</span>
                <Link to={`team-detail/Nabbil Khan`}>
                  <button className='btn'>Read More</button>
                </Link>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                asperiores repellendus architecto maiores illo, velit esse
                magnam rem molestiae odit quisquam suscipit amet nam blanditiis
                molestias animi? Quisquam, quasi debitis! */}
                {/* <i className="fa fa-long-arrow-alt-right"></i> */}
              </p>
            </div>
          </div>
        </div>
      {/*   <div ref={slideFour} className="HeritageSlide HeritageSlide4">
          <img
            src={heritage_img4}
            alt=""
          />{" "}
          <div className="HeritageSlideContainer">
            <div className="HeritageSlideImg">
              <img
                src={ceo4_img}
                alt=""
              />
            </div>
            <div className="HeritageContent">
              <h2>Gloria Gayle</h2>
              <p>
                <span>Chief Communications officer</span>
                <Link to={`team-detail/Nadeem Khan`}>
                  <button className='btn'>Read More</button>
                </Link>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                asperiores repellendus architecto maiores illo, velit esse
                magnam rem molestiae odit quisquam suscipit amet nam blanditiis
                molestias animi? Quisquam, quasi debitis!  
                 <i className="fa fa-long-arrow-alt-right"></i>
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="HeritageSlideCounterContainer">
        <div className="HeritageSlideCounter">
          <div onClick={prevSlide} className="HeritagePrev">
            <i className="fa fa-long-arrow-alt-left"></i>
          </div>
          <div className="HeritageCount">
            <span>{currentSlide}</span>
            <span>/</span>
            <span>3</span>
          </div>
          <div className="HeritageNext" onClick={nextSlide}>
            <i className="fa fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;

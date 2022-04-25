import React, { useEffect, useState } from "react";
import "./styles.css";
import HeroContainer from "../Hero";
import logo_animation_part1 from '../../assets/landing/hero/logo_animation_part1.png'
import logo_animation_part2 from '../../assets/landing/hero/logo_animation_part2.png'
import logo_animation_part3 from '../../assets/landing/hero/logo_animation_part3.png'
import logo_animation_part4 from '../../assets/landing/hero/logo_animation_part4.png'
import logo_animation_part5 from '../../assets/landing/hero/logo_animation_part5.png'
import logo_animation_part6 from '../../assets/landing/hero/logo_animation_part6.png'
import logo_animation_part7 from '../../assets/landing/hero/logo_animation_part7.png'
import logo_animation_part8 from '../../assets/landing/hero/logo_animation_part8.png'
// import logo from  '../../assets/logo2.png'
import logo from  '../../assets/landing/hero/k_logo.png'
import barington_crescent_cricket_club from  '../../assets/landing/hero/barington_crescent_cricket.webp'
import join_us from '../../assets/landing/hero/join_us.webp' 
// import fb from 'graph-api'

const Hero = () => {
    const [mob,setMob] =useState(window.innerWidth < 768)
  //  fb.get(714511402804095,(res)=>console.log(res))
  
    useEffect(()=>{
  
       const timer=  setTimeout(() => {
          document.querySelectorAll('.anim')?.forEach(item=>item.classList.add('animate'))
        }, 250);
        const secondTimer = setTimeout(()=>{
          document.querySelectorAll('.anim')?.forEach(item=>item.style.opacity= 0)
          document.querySelector('.rotatingLogo')?.classList.add('active')
        },2000)
        return ()=>{
          clearTimeout(timer)
          clearTimeout(secondTimer)
         
        }
    },[])
  useEffect(()=>{
    const handleResize =()=>{
      setMob(window.innerWidth < 768)
    }
    window.addEventListener('resize',handleResize)
    return ()=> window.removeEventListener('resize',handleResize)
  },[mob])
  let slidesContent = [
    {
      slide: "firstSlide",
      p:"Since 1999, Khansortium has stood the test of time by believing in integrity, fostering collaboration, and perfecting customer experience. The group inspires all its companies to enrich society by serving the local community and delivering authentic value.",
      heading: "Khansortium Group",
      btn: "Know More",
      animatedBanner:true,
      text:'blue'
    },
    {
      img:barington_crescent_cricket_club,
      slide: "secondSlide",
      p: "  Barrington Crescent Cricket Club won the first American T-20 Cricket League Championship in August 2021. BCCC won five games out of the nine total for a winning ratio of 55%. Barrington Crescent Cricket Club's star player, Fahad Babar, secured the trophy by scoring the winning shot during the super over.",
      heading: "Promoting Sports ",
      btn: "Know More",
    },
    {
img:join_us,
slide: "thirdSlide",
      p: " Khansortium is a hyper-growth group of enterprises that strives daily to steer our mission forward. Exceptional teamwork, willingness to learn, and providing outstanding customer services are some of the qualities we hold closely. Khansortium invites you to join our mission today.",
      heading: "Join Us",
      btn: "Join Now",
      link:'jobapplication1'
    },
  ];
  return <HeroContainer slidesContent={slidesContent} >
    {
      !mob?
      <>
        {/* <img className='anim anim1' src={logo_animation_part1} alt="" />
          <img className='anim anim2' src={logo_animation_part2} alt="" />
          <img className='anim anim3' src={logo_animation_part3} alt="" />
          <img className='anim anim4' src={logo_animation_part4} alt="" />
          <img className='anim anim5' src={logo_animation_part5} alt="" />
          <img className='anim anim6' src={logo_animation_part6} alt="" />
          <img className='anim anim7' src={logo_animation_part7} alt="" />
          <img className='anim anim8' src={logo_animation_part8} alt="" />
        */}
          <img className='rotatingLogo' src={logo} alt="" /> 
      </>:
          <img className='mob_logo' src={logo} alt="" />

    }

  </HeroContainer>;
};

export default Hero;

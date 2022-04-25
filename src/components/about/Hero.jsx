import React, { useEffect, useState } from "react";
import HeroContainer from '../Hero'
import anim1 from '../../assets/landing/hero/logo_animation_part1.png'
import anim2 from '../../assets/landing/hero/logo_animation_part2.png'
import anim3 from '../../assets/landing/hero/logo_animation_part3.png'
import anim4 from '../../assets/landing/hero/logo_animation_part4.png'
import anim5 from '../../assets/landing/hero/logo_animation_part5.png'
import anim6 from '../../assets/landing/hero/logo_animation_part6.png'
import anim7 from '../../assets/landing/hero/logo_animation_part7.png'
import anim8 from '../../assets/landing/hero/logo_animation_part8.png'
// import logo from  '../../assets/logo2.png'
import logo from  '../../assets/landing/hero/k_logo.png'

const Hero = () => {
  const [mob,setMob] =useState(window.innerWidth < 768)
 
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
          p:"Khansortium group resonates progress at its core – with an exemplary leadership, the group is continuously expanding across borders, touching new altitudes and empowering cohorts by imparting key values of Khansortium success since 1999.",
          heading: "We are Khansortium",
          btn: "Know More", 
          animatedBanner:true,
          text:'blue'
        },
      ];
    return (
      <div id="khansortiumabout">
        <HeroContainer slidesContent={slidesContent}>
              {
            !mob?
            <>
              {/* <img className='anim anim1' src={anim1} alt="" />
                <img className='anim anim2' src={anim2} alt="" />
                <img className='anim anim3' src={anim3} alt="" />
                <img className='anim anim4' src={anim4} alt="" />
                <img className='anim anim5' src={anim5} alt="" />
                <img className='anim anim6' src={anim6} alt="" />
                <img className='anim anim7' src={anim7} alt="" />
                <img className='anim anim8' src={anim8} alt="" /> */}
                <img className='rotatingLogo' src={logo} alt="" />
            </>:
                <img className='mob_logo' src={logo} alt="" />

          }
        </HeroContainer>

      </div>
    )
}

export default Hero

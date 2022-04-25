import React from 'react'
import HeroContainer from '../Hero'

const Hero = () => {
    let slidesContent=[
        {
          img:'https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          slide:'firstSlide'
          ,p:'  Build a career that lets you explore your strengths in a group where your growth matters. Today, Khansortium team spans fourteen companies across eight business verticals and still growing. Be a part of success',
          heading:'Join Us',
           btn:'Join Us Now'
        },
      /*   {img:'https://images.pexels.com/photos/1181526/pexels-photo-1181526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          ,
            slide:'secondSlide'
          ,p:'  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!',
          heading:'Internal Opportunities For Employees',
           btn:'Read Stories'
        },
        {
          img:'https://images.pexels.com/photos/1181625/pexels-photo-1181625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            slide:'thirdSlide'
          ,p:'  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!',
          heading:'A Formula That CLiQs',
           btn:'Read Stories'
        }, */
    ]
    return (
 
        <HeroContainer  slidesContent={slidesContent}/>
    )
}

export default Hero

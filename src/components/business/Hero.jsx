import React from 'react'
import HeroContainer from '../Hero'

const Hero = () => {
    let slidesContent=[
        {
          img:"https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          slide:'firstSlide',
          p:'Established by Nadeem khan in 1999, Khansortium group encapsulates a diverse portfolio of businesses, encompassing 14 companies across eight verticals, headquartered in Illinois, United States.',
          heading:'Khansortium group Business Overview',
           btn:'Learn More'
        },
        // {
        //   img:bannerImg2,
        //   slide:'secondSlide'
        //   ,p:'  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!',
        //   heading:'Join Us Now',
        //    btn:'Read Stories'
        // },
        // {
        //   img:bannerImg3,
        //   slide:'thirdSlide'
        //   ,p:'  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!',
        //   heading:'Join Us Now',
        //    btn:'Read Stories'
        // }
      ]
    return (
        <div id='Business_Overview'>
            
          <HeroContainer  slidesContent={slidesContent}/>
        </div>
    )
}

export default Hero

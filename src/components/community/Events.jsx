import React from 'react'
import HeroContainer from "../Hero";
const Events = () => {
    
    let slidesContent = [
        {
          img:'https://images.pexels.com/photos/4947396/pexels-photo-4947396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            slide: "firstSlide",
          p:"Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
          heading: "Disaster Relief Contribution",
          btn: "Read Stories",
        },
      ];
    
    return <HeroContainer slidesContent={slidesContent} />;
}

export default Events

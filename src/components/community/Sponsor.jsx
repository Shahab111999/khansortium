import React from 'react'
import HeroContainer from "../Hero";

const Sponsor = () => {
    let slidesContent = [
        {
          img:'https://images.unsplash.com/photo-1576671081837-49000212a370?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80',
          slide: "firstSlide",
          p:"Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
          heading: "Sponsor # 1",
          badge:'We Sponsers',
          btn: "Read Stories",
        },
        {
          img:'https://images.unsplash.com/photo-1576671081837-49000212a370?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80',
          slide: "secondSlide",
          p:"Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
          heading: "Sponsor # 2",
          badge:'We Sponsers',
          btn: "Read Stories",
        },
        {
          img:'https://images.unsplash.com/photo-1576671081837-49000212a370?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80',
          slide: "thirdSlide",
          p:"Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
          heading: "Sponsor # 3",
          badge:'We Sponsers',
          btn: "Read Stories",
        },
      ];
      return <HeroContainer slidesContent={slidesContent} />;
    
}

export default Sponsor

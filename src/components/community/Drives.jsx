import React from 'react'
import HeroContainer from "../Hero";
// import image from '../../assets/landingBanner/image.jpg'

const Drives = () => {
    let slidesContent =  [
      {
        img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        slide: "firstSlide",
        p: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
        heading: "Drive No 1",
        badge:'Our Drives',
        btn: "Read Stories",
      },
      // {
      //   img: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      //   slide: "secondSlide",
      //   p: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
      //   heading: "Drive No 2",
      //   badge:'Our Drives',
      //   btn: "Read Stories",
      // },
      // {
      //   img: "https://images.pexels.com/photos/617000/pexels-photo-617000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      //   slide: "thirdSlide",
      //   p: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
      //   heading: "Drive No 3",
      //   badge:'Our Drives',
      //   btn: "Read Stories",
      // },
    ];
      return <HeroContainer slidesContent={slidesContent} />;
    
}

export default Drives

import React from "react";
import Hero from "../Hero";

const Slider = () => {
  let slidesContent = [
    {
      img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      slide: "firstSlide",
      p: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
      heading: "Event Organization",
      btn: "Read Stories",
    },
    {
      img: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      slide: "secondSlide",
      p: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
      heading: "Medical",
      btn: "Read Stories",
    },
    {
      img: "https://images.pexels.com/photos/617000/pexels-photo-617000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      slide: "thirdSlide",
      p: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit repellat labore maxime temporibus architecto eosid quae nulla nesciunt aliquid ipsa!",
      heading: "Sports",
      btn: "Read Stories",
    },
  ];
  return <Hero slidesContent={slidesContent} />;
};

export default Slider;

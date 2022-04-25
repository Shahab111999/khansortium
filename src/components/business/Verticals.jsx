import React from "react";
import GridCards1 from "../GridCards1";

const Verticals = () => {
  const verticalBusinessCardsContent = [
    {
      slides: [
        {
          slide: "Slide One",
          heading: "Tata Digial to Invest in Curfit",
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, reiciendis?",
          img: "https://images.pexels.com/photos/1125028/pexels-photo-1125028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          slide: "Slide Two",
          heading: "Tata Digial to Invest in Curfit",
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, reiciendis?",
          img: "https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          slide: "Slide Three",
          heading: "Tata Digial to Invest in Curfit",
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, reiciendis?",
          img: "https://images.pexels.com/photos/5439447/pexels-photo-5439447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
    },
    {
      icon: "fab fa-twitter",
      slides: [
        {
          p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita debitis animi, ut id cumque neque dolor quia inventore? Placeat, quisquam.",
          italic: "2 days ago",
        },
        {
          p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita debitis animi, ut id cumque neque dolor quia inventore? Placeat, quisquam.",
          italic: "2 days ago",
        },
        {
          p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita debitis animi, ut id cumque neque dolor quia inventore? Placeat, quisquam.",
          italic: "2 days ago",
        },
      ],
    },
    {
      icon: "fab fa-facebook",
      italic: " a day ago",
      img: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      icon: "fab fa-instagram",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis velit quidem, natus modi aliquid ut commodi vero optio doloremque sint?",
      img: "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  return (
    <GridCards1
      GridBadge="Verticals"
      gridCardContent={verticalBusinessCardsContent}
    />
  );
};

export default Verticals;

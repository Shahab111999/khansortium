import React, { useEffect, useRef } from "react";
import { useState } from "react";
import GridCards1 from "../GridCards1";

const News = () => {
  let newsCardContent = [
    {
      slides: [
        {
          slide:'Slide One',
          badge: "Crescent Cricket Club",
          heading: "American T20 Leagure Winners",
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, reiciendis?",
          img:'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        },
        {
          slide:'Slide Two',
          badge: "We Fix Phones",
          heading: "Biggest Achievement of the year",
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, reiciendis?",
          img:'https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
          badge: 'Crescent Cricket Club',
          slide: "Slide Three",
          heading: "The Biggest Clash ",
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, reiciendis?",
        img: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1126&q=80'
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
    img:'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      icon: "fab fa-instagram",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis velit quidem, natus modi aliquid ut commodi vero optio doloremque sint?",
      img: "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  return (
    <div id="News">
      <GridCards1 GridBadge="In The News" gridCardContent={newsCardContent} />
    </div>
  );
};

export default News;

import React from "react";
import GridCards2 from "../GridCards2";

const Careers = () => {
  const careerCardsContnent = [
    {
      badge: "Careers",
      p: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quam consequuntur distinctio omnis?",
      heading: "Beware of Job Scams",
      img:'https://images.pexels.com/photos/7534779/pexels-photo-7534779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      img:'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      badge: "Current Openings",
      heading: ["Apply for jobs at Khan", "Sortium"],
      p: "Lorem ipsum, dolor sit amet consectetur adipisicing. Loremipsum, dolor sit am.",
    },
    {
      badge: "In Numbers",
      icon: "fa fa-users",
      number: "750,000",
      span: "Employess at the Khan Sortium",
    },
    {
      badge: "Careers",
      heading: "Featured Jobs",
      slides: [
        {
          lists: [
            {
              span: "Current Vacancies",
              i: "Tata Steel, Various Location",
            },
            {
              span: "Current Vacancies",
              i: "TCS Wordlwide",
            },
          ],
        },
        {
          lists: [
            {
              span: "Current Vacancies",
              i: "Tata Steel, Various Location",
            },
            {
              span: "Current Vacancies",
              i: "TCS Wordlwide",
            },
          ],
        },
        {
          lists: [
            {
              span: "Current Vacancies",
              i: "Tata Steel, Various Location",
            },
            {
              span: "Current Vacancies",
              i: "TCS Wordlwide",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div id="Careers">
      <GridCards2 GridBadge="Careers" gridCardContent={careerCardsContnent} />
    </div>
  );
};

export default Careers;

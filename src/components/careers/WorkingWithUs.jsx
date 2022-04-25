import React from 'react'
import GridCards2 from '../GridCards2'

const WorkingWithUs = () => {
     const workingCardContent =[
        {
            badge: "Careers",
            p: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quam consequuntur distinctio omnis?",
            heading: "Beware of Job Scams",
          },
          {
            badge: "Current Openings",
            heading: ["Apply for jobs at Tata", "companies"],
            p: "Lorem ipsum, dolor sit amet consectetur adipisicing. Loremipsum, dolor sit am.",
          },
          {
            badge: "In Numbers",
            icon: "fa fa-users",
            number: "750,000",
            span: "Employess at the Tata group",
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
     ]
    return (
            <GridCards2 GridBadge='Working with Us' gridCardContent={workingCardContent}/>
        
    )
}

export default WorkingWithUs

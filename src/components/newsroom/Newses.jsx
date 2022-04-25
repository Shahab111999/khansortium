import React from "react";
import GridCards2 from "../GridCards2";
import styles from "./styles.module.css";

const { useState, useEffect } = React;

const data = [
  { id: 0, label: "Trending" },
  { id: 1, label: "Breaking" },
  { id: 2, label: "Popular" },
  { id: 3, label: "Recent" },
];

const Newses = () => {
  let cardContent = [
    {
      badge: "Cricket",
      p: "In the history of Chicago-area cricket, there have been numerous famous moments. The 1st Chicago Open T20 Night Cricket Tournament 2021, one of the best cricket events, was completed in the Chicago suburbs on Saturday, Oct. 9, with hundreds of people assembled for the thrilling final game.",
      heading: "Making Cricket Mainstream in America",
      img: "https://www.dailyherald.com/storyimage/DA/20211011/submitted/211019925/AR/0/AR-211019925.jpg&updated=202110111633&MaxW=900&maxH=900&noborder&Q=80",
    },
    {
      badge: "Current Openings",
      heading: ["Apply for jobs at Khansortium", "companies"],
      p: "",
    },
    {
      badge: "In Numbers",
      icon: "fa fa-users",
      number: "10+",
      span: "Companies Under Khansortium",
    },
    {
      badge: "Careers",
      heading: "Featured Jobs",
      slides: [
        {
          lists: [
            {
              span: "Current Vacancies",
              i: "Sales Associative - Retail",
              link: "job-responsibilities0",
            },
            {
              span: "Current Vacancies",
              i: "Store Manger - Retail",
              link: "job-responsibilities1",
            },
          ],
        },
      ],
    },
  ];
  const [isOpen, setOpen] = useState(true);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };
  return (
    <GridCards2 gridCardContent={cardContent}>
      {/*      <div style={{
                width:'100%',
                display:'flex',
                justifyContent:'center'
                ,paddingTop:'5rem'
                }}>

                <div className={styles.dropdown}>
        <div className={styles.dropdownHeader} onClick={toggleDropdown}>
            {selectedItem ? items.find(item => item.id == selectedItem).label : "Select Category"}
            <i  className={(isOpen && " open") +  " fa fa-chevron-down " + styles.icon  }></i>
        </div>
        <div className={isOpen && ' open ' + styles.dropdownBody  }>
            {items.map(item => (
                <div  className={styles.dropdownItem} onClick={e =>{ handleItemClick(e.target.id) ;toggleDropdown()}} id={item.id}>
                <span className={(item.id == selectedItem && styles.selected) + " "+ styles.dropdownItemDot  }>• </span>
                {item.label}
            </div>
            ))}
        </div>
        </div>
        </div> */}
    </GridCards2>
  );
};

export default Newses;

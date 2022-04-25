import React from 'react'
import Cards from '../Cards'
import cardsContent from '../../assets/data/teamcards.json'

const OurTeam = () => {
    let filterList =[
        {label:'CEO',filterId:'ceo'},
        {label:'Chairman',filterId:'chairman'},
        {label:'Junior Employees',filterId:'junior_employees'},
        {label:'Senior Employees',filterId:'senior_employees'},
    ]
    return (
        <Cards heading='Our Team'  filterList={filterList} cardsContent={cardsContent}/>
  
    )
}

export default OurTeam

import React from 'react'
import Cards from './Cards'
import cardsContent from '../assets/data/vericalcards.js'

const VerticalCards = () => {
    
    let filterList =[
        {label:'Telecommunication',filterId:'Telecommunication'},
        {label:'Entertainment',filterId:'Entertainment'},
        {label:'Real Estate',filterId:'RealEstate'},
        {label:'Media Marketing',filterId:'MediaMarketing'},
    ]
    return (
            <Cards heading='Verticals'  filterList={filterList} cardsContent={cardsContent}/>
  
    )
}

export default VerticalCards

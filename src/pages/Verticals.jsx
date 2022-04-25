import React from 'react'
import Cards from '../components/Cards'
import cardsContent from '../assets/data/vericalcards.js'
import Layout from '../components/layout/Layout'

const Verticals = () => {

    let filterList =[
        {label:'Telecommunication',filterId:'Telecommunication'},
        {label:'Gaming',filterId:'Gaming'},
        {label:'Real Estate',filterId:'RealEstate'},
        {label:'Media Marketing',filterId:'MediaMarketing'},
    ]
    return (
        <Layout>
            <img style={{
                    width: "100%",
                    objectFit: "cover",
                    backgroundColor: "#008080",
                    maxHeight: "500px",
            }} src={require('../assets/logo.png').default} alt="" />
            <Cards heading='Verticals'  filterList={filterList} cardsContent={cardsContent} active/>
        </Layout>
  
    )
}

export default Verticals

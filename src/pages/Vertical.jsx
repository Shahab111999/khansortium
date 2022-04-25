import React from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import cardContent from '../assets/data/vericalcards.js'
import Layout from '../components/layout/Layout'
import Details from '../components/business/Details'
import PartnerWithUs from '../components/about/PartnerWithUs'
import { Badge } from '@material-ui/core'

const Vertical = () => {
    let {Id} = useParams()
    let content= cardContent.filter(card=>card.heading === Id)
    console.log(Id,content)
    console.log(content.img)
    let slidesContent=[
        {
          img:content[0].img,
          slide:'firstSlide'
          ,p: content[0].des,
            heading:content[0].heading,
           btn:content[0].joinBtn,
           secondBtn:content[0].link,
           secondBtnLinkTargetBlank:true,
           insanbnja:content[0].joinBtn,
           badge:content[0].badge ? content[0].badge :false,
           stores:content[0].stores
        },]
    return (
        <Layout>

            <Hero  slidesContent={slidesContent}/>
            {/* <PartnerWithUs/> */}
            {/* <Details/> */}
        </Layout>
    )
}

export default Vertical

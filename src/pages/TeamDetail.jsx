import React from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import cardContent from '../assets/data/vericalcards.js'
import Layout from '../components/layout/Layout'
import Details from '../components/business/Details'
import PartnerWithUs from '../components/about/PartnerWithUs'
import { Badge } from '@material-ui/core'
import teams from '../assets/data/teams'

const TeamDetail = () => {
    let {Name} = useParams()
    let content= teams.filter(team=>team.name === Name)
    console.log(Name,content)
    console.log(content.img)
    let slidesContent=[
        {
          img:content[0].img,
          slide:'firstSlide',
          p:" ",
            heading:content[0].name,
           btn:"Scroll To Read",
        //    secondBtn:content[0].link,
        //    secondBtnLinkTargetBlank:true,
        //    insanbnja:content[0].joinBtn,
           badge:content[0].post
        },]
    return (
        <Layout>

            <Hero  slidesContent={slidesContent}/>
            {/* <PartnerWithUs/> */}
                {
                content[0].des && content[0].des[0] &&
            <div  className='Details'>
            <div className="DetailParas">
                {content[0].des.map(item=> <p className='DetailsPara'>{item}</p>) }
                </div>
        </div>
}

        </Layout>
    )
}

export default TeamDetail

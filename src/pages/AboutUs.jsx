import React from 'react'
import FourthSection from '../components/about/FourthSection'
import Hero from '../components/about/Hero'
import ThirdSection from '../components/about/ThirdSection'
import VideoSec from '../components/about/VideoSec'
import Layout from '../components/layout/Layout'
import Details from '../components/about/Details'
import OurTeam from '../components/about/OurTeam'
import VerticalSlider from '../components/about/VerticalsSlider'
import VerticalCards from '../components/VerticalCards'
import PartnerWithUs from '../components/about/PartnerWithUs'
import BookMark from '../components/about/BookMark'
import CommunityCards from '../components/community/CommunityCards'

const AboutUs = () => { 
    return (
        <Layout>
            <Hero/>
            <VideoSec/>
 {/* Mission And Vision  Details */}
            <Details/> 
            {/* <VerticalSlider/> */}
            {/* <OurTeam/> */}
            {/* <VerticalCards/> */}
            <PartnerWithUs/>
            {/* <CommunityCards/> */}
            {/* <ThirdSection/> */}
            {/* <FourthSection/> */}
            <BookMark/>
        </Layout>
    )
}

export default AboutUs

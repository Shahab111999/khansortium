import React from 'react'
import CEO from '../components/careers/CEO'
import Hero from '../components/careers/Hero'
import WorkingWithUs from '../components/careers/WorkingWithUs'
import Layout from '../components/layout/Layout'
import '../components/careers/styles.css'
import JobsCards from '../components/careers/JobsCards'
import FranchiseCards from '../components/careers/FranchiseCards'
import NewJobCards from '../components/careers/NewJobCards'
const Careers = () => {

    return (
        <Layout>
             <Hero/>  
             <NewJobCards/>
             {/* <JobsCards/>
             <FranchiseCards themeBlue/> */}
             {/* <WorkingWithUs />
             <CEO/> */}
        </Layout>
    )
}

export default Careers

import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import Layout from '../components/layout/Layout'
import jobCards from '../assets/data/jobCards'

const JobResponsibility = () => {
    const {Id}= useParams()
    const duties = jobCards[Id].responsibilities
    
    return (
        <Layout>
            <div className="Job_Responsibility">
               <img src={require('../assets/logoLight.png').default} alt="" />
             <h1>{jobCards[Id].title}</h1>
             <div className="Responsibilities">
                 <h4>Responsibilities:</h4>
                 <ol>
                  {  duties.map(item=><li>{item}</li>)}
                 </ol>
                 <button><Link to='/jobapplication23'>
                  Apply Now
                  </Link>
                   </button>
             </div>
            </div>
               
        </Layout>
    )
}

export default JobResponsibility

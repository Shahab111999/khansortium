import React from 'react'
import { Link } from 'react-router-dom'
import jobCards from '../../assets/data/jobCards'
const NewJobCard = () => {
   
    
       let jobs=     jobCards.map((job,index)=>(
          <Link className='ressb' to={`/job-responsibilities${index}`}>
               <div className="New_Job_Card">
                           <h4>{job.title}</h4>
                           <Link to={`/job-responsibilities${index}`}>
                              <i className="fa fa-chevron-right"></i>
                              <button>See Responsibilities </button>
                           </Link>
               </div>
          </Link>
               )

           
           )
           return jobs
   }

export default NewJobCard

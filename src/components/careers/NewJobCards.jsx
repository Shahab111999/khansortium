import React from 'react'
import NewJobCard from './NewJobCard'

const NewJobCards = () => {
    return (
        <div className='New_Job_Cards'>
            <h1>Open Jobs</h1>
            <div className="New_Job_Cards_Container">
                  <NewJobCard/>
            </div>
        </div>
    )
}

export default NewJobCards

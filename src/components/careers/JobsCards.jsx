import React, { useRef } from 'react'
import Tilt from 'react-tilt'
import { Link } from 'react-router-dom'

const JobsCards = () => {
    let slider = useRef()
    const moveJobs =(dotNum)=>{
        let dots = document.querySelectorAll('.dots span')
        dots.forEach(dot=>dot.classList.contains('active')&& dot.classList.remove('active'))
        dots[dotNum].classList.add('active')
        slider.current.scrollTo((340 *dotNum) + 90,0)
    }
    return (
        <div className="jobsCardsContainer">
               <h1>Jobs Opportunities </h1>
            <div ref={slider} className="jobsCards">
                {/* <div className="circles">
                <div className="circle">

                </div>
                <div className="circle2">

                </div>

                </div> */}
                <Link to={`/jobapplication${'somethingCooking'}`}>
                <Tilt className="jobCard">
                    <h3>Front-End Developer</h3>
                    <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                     <button>Apply Now</button>
                </Tilt>
                </Link>
                <Link to={`/jobapplication${'somethingCooking'}`}>
                <Tilt className="jobCard">
                    <h3>Front-End Developer</h3>
                    <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                     <button>Apply Now</button>
                </Tilt>
                </Link>
                <Link to={`/jobapplication${'somethingCooking'}`}>
                <Tilt className="jobCard">
                    <h3>Front-End Developer</h3>
                    <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                     <button>Apply Now</button>
                </Tilt>
                </Link>
                <Link to={`/jobapplication${'somethingCooking'}`}>
                <Tilt className="jobCard">
                    <h3>Front-End Developer</h3>
                    <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                     <button>Apply Now</button>
                </Tilt>
                </Link>
                <Link to={`/jobapplication${'somethingCooking'}`}>
                <Tilt className="jobCard">
                    <h3>Front-End Developer</h3>
                    <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                     <button>Apply Now</button>
                </Tilt>
                </Link>
                <Link to={`/jobapplication${'somethingCooking'}`}>
                <Tilt className="jobCard">
                    <h3>Front-End Developer</h3>
                    <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                     <button>Apply Now</button>
                </Tilt>
                </Link>
                <Link to={`/jobapplication${'somethingCooking'}`}>
                <Tilt className="jobCard">
                    <h3>Front-End Developer</h3>
                    <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                     <button>Apply Now</button>
                </Tilt>
                </Link>
                <Link to={`/jobapplication${'somethingCooking'}`}>
                <Tilt className="jobCard">
                    <h3>Front-End Developer</h3>
                    <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                     <button>Apply Now</button>
                </Tilt>
                </Link>
                <Link to={`/jobapplication${'somethingCooking'}`}>
                <Tilt className="jobCard">
                    <h3>Front-End Developer</h3>
                    <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                     <button>Apply Now</button>
                </Tilt>
                </Link>
                <Link to={`/jobapplication${'somethingCooking'}`}>
                <Tilt className="jobCard">
                    <h3>Front-End Developer</h3>
                    <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                     <button>Apply Now</button>
                </Tilt>
                </Link>
            </div>
               <div className="dots">
                   <span onClick={()=>moveJobs(0)} className='active'></span>
                   <span onClick={()=>moveJobs(1)}></span>
                   <span onClick={()=>moveJobs(2)}></span>
                   <span onClick={()=>moveJobs(3)}></span>
                   <span onClick={()=>moveJobs(4)}></span>
                   <span onClick={()=>moveJobs(5)} ></span>
                   <span onClick={()=>moveJobs(6)}></span>
                   <span onClick={()=>moveJobs(7)}></span>
                   <span onClick={()=>moveJobs(8)}></span>
                   <span onClick={()=>moveJobs(9)}></span>
               </div>
        </div>
    )
}

export default JobsCards

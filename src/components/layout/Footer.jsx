import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoLight.png'

const Footer = () => {
    return (
        <footer>
            <div className='footerLists'>
    <div className='kuchbhi'>
         <ul>
                <li className="listHeading">
                 <strong>
                     <Link to='/business#All'>
                        Business Verticals
                     </Link>
                 </strong>
                </li>
                <li>
                    <Link to='/business#Telecommunication'>
                        Telecommunication
                      </Link> 
                </li>
                <li>
                    <Link to='/business#BusinessProcessOutsource'>
                        BPO
                  </Link> 
                </li>
                <li>
                    <Link to='/business#Entertainment'>
                         Entertainment
                    </Link> 
                </li>
                <li>
                    <Link to='/business#RealEstate'>
                        Real Estate
                      </Link> 
                </li>
                <li>
                    <Link to='/business#StaffingAndTraining'>
                        Staffing & Training
                     </Link> 
                </li>
                <li>
                    <Link to='/business#SoftwareDevelopment'>
                        Software Development
                    </Link> 
                </li>
                <li>
                    <Link to='/business#EventVenue' >
                        Event Venue
                    </Link> 
                </li>
                <li>
                    <Link to='/business#Pharmaceutical'> 
                      Pharmaceutical
                     </Link> 
                </li>
                <li>
                    <Link to='/business#Sports'> 
                      Sports
                     </Link> 
                </li>
                {/* <li>Infrastructure</li>
                <li>Information Technology</li>
                <li>Steel</li>
                <li>Automative</li>
                <li>Consumer and Retail</li>
                <li>Infrastructure</li> */}
            </ul>
        <ul>
            <li className="listHeading">
                <strong>
                    <Link to='/community'>
                        Community   
                    </Link>
                </strong>
            </li>
            <li>
                <strong>
                    <Link to='/community#Slide1'>
                        Our Drives
                    </Link>
                </strong>

            </li>
            <li>
                <Link to='/community#Slide1'>
                    Free Onsite Covid Testing
                </Link>
            </li>
            <li>
                <Link to='/community#Slide2'>
                     Free Medical Services
                </Link>
            </li>
            <li>
                <Link to='/community#Slide3'>
                    Team Sponsors
                </Link>
            </li>
            <li>
                <Link to='/community#Slide4'>
                    Disaster Relief
                </Link>
            </li>
            <li>
                <Link to='/community#Slide5'>
                    Free Internet Packages
                </Link>
            </li>
        </ul>
        <ul>
            <li className="listHeading">
                <strong>
                    <Link to='/about'>
                        About
                    </Link>
                </strong>
            </li>
            <li>
                <strong>
                    <Link to='/newsroom'> 
                        Newsroom
                    </Link>
                </strong>
            </li>
            <li>
                <strong>
                    <Link to='/careers'> 
                        Careers
                    </Link>
                </strong>
            </li> 
            <li>
                <strong>
                    <Link to='/jobapplication1'> 
                        Join Us
                    </Link>
                </strong>
            </li>
            <li>
                <strong>
                    <Link to='/partner_application'> 
                        Be A Managing Partner 
                    </Link>
                </strong>
            </li>
           
           
        </ul>
        {/* <ul>
           <li className="listHeading">
               <strong>News Room</strong>
           </li><li>Innovation</li>
            <li>Heritage</li>
            <li>Upcomming Events</li>
           
        </ul> */}
        </div>
       <ul className="lastList">
        <ul className="socials">
       <li>
           <a target='_blank' href='https://www.facebook.com/Khansortium-111918071264923'> 
              <i className="fab fa-facebook"></i>  
           
           </a>
           </li>
           
        <li>
        <a target='_blank' href="https://www.linkedin.com/company/khansortium/about/?viewAsMember=true">
              <i className="fab fa-linkedin"></i>  
              </a>
            </li>
            
      
           
       <li>
       <a target='_blank' href="https://twitter.com/khansortium">
             <i className="fab fa-twitter"></i>  
             </a>
           </li>
           
       <li>
           <a target='_blank' href="https://www.instagram.com/khansortium/">

               <i className="fab fa-instagram"></i>  
           </a>
              
           </li>
           
      {/*   <li>
            
        <a target='_blank' href="">
        <i className="fab fa-youtube"></i>  

        </a>
            </li> */}
            
        </ul>
       <div className="footerInputWrapper">
         <input type="text" placeholder='Enter your email Id' />
         <i className="fa fa-long-arrow-alt-right"></i>
       </div>
       <div className="brandLogo">
           <Link to='/'>
                <img src={logo} alt="" />
           </Link>
       </div>
       </ul>
       </div>
        </footer>
    )
}

export default Footer

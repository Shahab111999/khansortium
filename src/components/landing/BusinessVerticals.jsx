import React from 'react'
import communication from '../../assets/svgs/communication.svg'
import bullHorn from '../../assets/svgs/bullhorn.svg'
import realEstate from '../../assets/svgs/real-estate-agency.svg'
import joystick from '../../assets/svgs/joystick.svg'
import { Link } from 'react-router-dom'

const BusinessVerticals = () => {
  return (
    <div className='our_business_verticals'>
        <h4>Our Business <span>
        Verticals
          </span> 
          </h4>
        <div className="buisness_vertical_cards">
          

          <div className="business_vertical_card">
            <img src={communication} alt="" />
             <h4>
                Telecommunication
             </h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis itaque accusantium vero fugiat, at consequatur obcaecati, molestiae sint id magnam libero. Placeat fugiat totam sed dolorem quisquam nesciunt nihil?</p>
             <Link to='/companiesTelecommunication'>View Details <i className="fa fa-long-arrow-alt-right"></i></Link>
          </div>
          <div className="business_vertical_card">
          <img src={bullHorn} alt="" />
             
             <h4>
                Media Marketing
             </h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis itaque accusantium vero fugiat, at consequatur obcaecati, molestiae sint id magnam libero. Placeat fugiat totam sed dolorem quisquam nesciunt nihil?</p>
             <Link to='/companiesMediaMarketing'>View Details <i className="fa fa-long-arrow-alt-right"></i></Link>
          </div>
          <div className="business_vertical_card">
          <img src={realEstate} alt="" />
             
            <h4>
                Real Estate
             </h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis itaque accusantium vero fugiat, at consequatur obcaecati, molestiae sint id magnam libero. Placeat fugiat totam sed dolorem quisquam nesciunt nihil?</p>
             <Link to='/companiesRealEstate'>View Details <i className="fa fa-long-arrow-alt-right"></i></Link>
          </div>
          <div className="business_vertical_card">
          <img src={joystick} alt="" />
             
             <h4>
                Entertainment
             </h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis itaque accusantium vero fugiat, at consequatur obcaecati, molestiae sint id magnam libero. Placeat fugiat totam sed dolorem quisquam nesciunt nihil?</p>
             <Link to='/companiesEntertainment'>View Details <i className="fa fa-long-arrow-alt-right"></i></Link >
          </div>
        </div>
    </div>
  )
}

export default BusinessVerticals

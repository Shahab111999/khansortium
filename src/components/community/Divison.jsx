import React from 'react'
import sport from  '../../assets/svgs/sport.svg'
import medical from  '../../assets/svgs/medical.svg'
import event from  '../../assets/svgs/event.svg'

const Divison = () => {
    return (
        <div className='our_business_verticals'>
            <h4><span>Khansortium
                </span>  Communities</h4>
                <div className="buisness_vertical_cards">
          

          <div className="business_vertical_card">
            <img src={sport} alt="" />
             <h4>
                Sports Group
             </h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis itaque accusantium vero fugiat, at consequatur obcaecati, molestiae sint id magnam libero. Placeat fugiat totam sed dolorem quisquam nesciunt nihil?</p>
             <button>View Details <i className="fa fa-long-arrow-alt-right"></i></button>
          </div>
          <div className="business_vertical_card">
          <img src={event} alt="" />
             
             <h4>
                Event Organizing Group
             </h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis itaque accusantium vero fugiat, at consequatur obcaecati, molestiae sint id magnam libero. Placeat fugiat totam sed dolorem quisquam nesciunt nihil?</p>
             <button>View Details <i className="fa fa-long-arrow-alt-right"></i></button>
          </div>
          <div className="business_vertical_card">
          <img src={medical} alt="" />
             
            <h4>
                Medical Group
             </h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis itaque accusantium vero fugiat, at consequatur obcaecati, molestiae sint id magnam libero. Placeat fugiat totam sed dolorem quisquam nesciunt nihil?</p>
             <button>View Details <i className="fa fa-long-arrow-alt-right"></i></button>
          </div>
        </div>
   

        </div>
    )
}

export default Divison

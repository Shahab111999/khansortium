import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({card:{img,heading,btn,id}}) => {
    return (
        <div id={id} className='CARD active'>
            <div className="CARD_IMAGE">
                <img src={img} alt="" />
            </div>
            <div className="CARD_CONTENT">
                <h3>{heading}</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia iure ab quo voluptas rem dolores odit, architecto sint deleniti sapiente totam, fugit nemo, temporibus voluptates quisquam earum? Consectetur, ullam optio.</p>
                <button className="CARD_BTN">
                    <Link to={'/verticals'+heading }>
                        {btn}
                    </Link>
                    </button>
            </div>
        </div>
    )
}

export default Card

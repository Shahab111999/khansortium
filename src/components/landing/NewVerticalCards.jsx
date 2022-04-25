import React from 'react'
import mediaIcon from '../../assets/svgs/bullhorn.svg'
import telecommunicationIcon from '../../assets/svgs/communication.svg'
import eventIcon from '../../assets/svgs/event.svg'
import entertainmentIcon from '../../assets/svgs/joystick.svg'
import medicalIcon from '../../assets/svgs/medicine.svg'
import teamIcon from '../../assets/svgs/team.svg'
import catererIcon from '../../assets/svgs/buffet.svg'
import developmentIcon from '../../assets/svgs/web-development.svg'
import realestateIcon from '../../assets/svgs/real-estate-agency.svg'
import likeIcon from '../../assets/svgs/like.svg'
import NewVerticalFilter from './NewVerticalFilter'
import NewVerticalCard from './NewVerticalCard'
import cardsContent from '../../assets/data/vericalcards.js'
import { Link } from 'react-router-dom'

const NewVerticalCards = () => {
    
    return (
        <div id='Vertical_Cards' className="new_vertical_cards">
            <h3>Our Companies</h3>
                <div className='new_vertical_cards_container'>
                 
                    <NewVerticalFilter/>
               
                        {cardsContent.map(card=> 
                        
                            <NewVerticalCard key={card.img} card={card}/>
                    
                        )}
        </div>
        </div>
    )
}

export default NewVerticalCards

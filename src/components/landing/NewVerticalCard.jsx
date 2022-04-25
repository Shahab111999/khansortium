import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

const NewVerticalCard = ({card}) => {
    const [active,setActive] = useState('active')
    let {hash} = useLocation()
    // let active = 'active'
    useEffect(()=>{
         if(hash && hash!== "#Business_Overview" && hash !== "#Business_Details" && hash !== "#Vertical_Cards"){
           if(hash.replace("#","") === 'All'){
               setActive('active')
           }else{

               setActive(card.id === hash.replace('#',"")? 'active':"")
           }
         }
    },[hash])
    
    return (
        <div id={card.id} className={'new_vertical_card ' + active}>
            <Link to={'/verticals'+card.heading}></Link>
            <img src={card.img} alt="" />
            <div className="new_vertical_card_layer"></div>
            <div className="new_vertical_card_heading">{card.heading  }</div>   
            <svg   enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"><g><path d="m472 452c0 11.028-8.972 20-20 20h-392c-11.028 0-20-8.972-20-20v-392c0-11.028 8.972-20 20-20h176v-40h-176c-33.084 0-60 26.916-60 60v392c0 33.084 26.916 60 60 60h392c33.084 0 60-26.916 60-60v-176h-40z"/><path d="m312 0v40h131.716l-321.858 321.858 28.284 28.284 321.858-321.858v131.716h40v-200z"/></g></svg> 
        </div>
    )
}

export default NewVerticalCard

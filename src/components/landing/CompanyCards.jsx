import React, { useEffect, useRef, useState } from 'react'
import CompanyCard from './CompanyCard'
import cards from '../../assets/data/vericalcards'
import { Link } from 'react-router-dom'

const CompanyCards = () => {
    const container = useRef(null)
    const [slide,setSlide] = useState(4)
    
    
  useEffect(()=>{
     let w=  window.innerWidth < 768 ?  container.current.clientWidth * (slide +1)   :  container.current.clientWidth /3* slide 
    console.log(w  * slide + 1)
     container.current.scrollLeft = w 
  },[slide])
    const next =()=>{
        let w=  window.innerWidth < 768 ?  container.current.clientWidth   :  container.current.clientWidth /3
        container.current.scrollLeft +=  w
        setSlide(()=>slide !==  cards.length - 1  && slide + 1)
    }
    const prev =()=>{
        let w=  window.innerWidth < 768 ?  container.current.clientWidth   :  container.current.clientWidth /3 
        container.current.scrollLeft -=  w
        setSlide(()=>slide !==  0  && slide - 1)
    }

    return (
        <div id='Brands' /* style={{backgroundImage:`url(${cards[slide].img})`}} */ className='Company_Cards'>
            <h1>Our Companies</h1>
            <div className="CompanySliderNavigators">
                <i onClick={prev} className="fa fa-chevron-left"></i>
                
                <i onClick={next} className="fa fa-chevron-right"></i>
            </div>
           
                <div ref={container} className="Company_Cards_Container">
                <CompanyCard displayNone/>
            
                 {
                     cards.map((card,index)=> <CompanyCard key={card.img+index}  joinBtn={card.joinBtn} des={card.des}  img={card.img} heading={card.heading} id={index} setSlide={setSlide}  activehabhai={index === slide}/>)
                }
                
                <CompanyCard displayNone/>
                
                </div>
           <Link  to='/business#All' className='seeAllCompanies'>See All Companies</Link> 
        </div>
    )
}

export default CompanyCards

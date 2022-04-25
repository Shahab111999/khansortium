import React, { useRef } from 'react'

const CompanyCard = ({activehabhai,heading,img,id,setSlide,des,joinBtn,displayNone}) => {
    const cont = useRef()
    const addAnimations =()=>{
             cont.current.classList.toggle('cardanim1')
             cont.current.classList.toggle('cardanim2')
             setTimeout(()=>{
             },100)
     }

      const slideNow =()=>{
       
        setSlide(id && id)
      
      }
    return (
        <div ref={cont} onClick={slideNow} style={{backgroundImage:`url(${img})`,opacity:displayNone && "0"}} className={`Company_Card  ${ activehabhai ? "  active": "" }`}>
            <span onClick={addAnimations} className="back">Back</span>
           <div className="ccc">
            <h1>{heading}</h1>
          <div className="cccsubc">
            <p>{des}</p>
            <div className="companyCardsBtns">
              <button>Visit Website</button>
              <button>{joinBtn}</button>

           </div>

          </div>
              
            </div>
            <button className='seeDetails' onClick={addAnimations}>See Details</button>
    </div>
    )
}

export default CompanyCard

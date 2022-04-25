import React, { useEffect, useState } from 'react'
import './styles.css'
import cards from '../../assets/data/vericalcards'


const VideoSec = () => {
  
  const [img,setImg] = useState(cards[0].img)
  const [current,setCurrent] = useState(0)
  useEffect(()=>{
  let interval = setInterval(()=>{
              console.log(current,cards.length)
              setCurrent(()=> current <cards.length -1 ?current+1: 0)
              console.log(current)
              setImg(cards[current].img)
              
            },2000)
  return ()=> clearInterval(interval)
  },[img,current]) 
    return (
      <div id="mv">
      <div id="Hero" className="Hero">
      <div className="HeroSlider">
   
        <div
           className='firstSlide active slide'
        >
          <div className="slideImg">
              <img src={img} alt="" />
          </div>

          <div className="slideContent">
           
            <h1>Khansortium Existance</h1>
            <div className="slideSubContent vidslideCont">
              <h3>Misson</h3>
              <p>
              Khansortium group nurtures trust in a collaborative environment to enhance customer experiences.
             </p>
              <h3>Vision</h3>
              <p>
              Inspire the stakeholders to establish a viable ecosystem in the community.
             </p>
              {/* <div className="btnsGroup">
                  <button className="btnReadProfile"><i className="fa fa-file-export"></i> Read Profile </button>
                  <button className="btnReadProfile"><i className="fa fa-download"></i> Download PDF </button>
              </div> */}
            </div>
          </div>
        </div>

      </div>
 
   </div>
  
      </div>
    )
}

export default VideoSec

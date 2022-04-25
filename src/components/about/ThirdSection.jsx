import React from 'react'

const ThirdSection = () => {
    return (
        <div>
             <div id="Hero" className="Hero">
      <div className="HeroSlider">
   
        <div
           className='firstSlide active slide'
        >
          <div className="slideImg">
              <img src="https://www.tata.com/content/dam/tata/images/about-us/Desktop/about_ownership_desktop_1920x1080.jpg" alt="" />
          </div>

          <div className="slideContent">
           
            <h1>66% of Tata Sons is owned by trusts</h1>
            <div className="slideSubContent">
              <p>
              The Tata Trusts promote education, health, culture and livelihood initiatives in India.
</p>
              <div className="btnsGroup">
                  <button className="btnReadProfile"><i className="fa fa-file-export"></i> Read Profile </button>
                  <button className="btnReadProfile"><i className="fa fa-download"></i>Download PDF</button>
              </div>
            </div>
          </div>
        </div>

      </div>
 
   </div>
        </div>
    )
}

export default ThirdSection

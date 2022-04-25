import React from "react";
import "./community.css";
import hadith from '../../assets/hadith.jpg'

const Intro = () => {
  return (
    <div id='Hadith' className="CommunityIntro">
      <div className="CommunityIntroImg">
      <h1>
      Whomsoever Allah Intends Good For; 
      <br />
      He Grants Him The Understanding Of Deen
      </h1>
      <h4>
      Sahih Al Bukhari
      </h4>
    </div>
      {/* <div className="CommunityIntroContent">
        <p>
          In a free enterprise, the community is not just another stakeholder in
          business, but is in fact the very purpose of its existence.{" "}
          <small>Jamsetji Tata</small>
        </p>
      </div> */}
    </div>
  );
};

export default Intro;

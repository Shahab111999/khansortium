import React from "react";
import "./styles.css";
import Banner from "../../assets/t20-cricket-header-banner.png";
import crescent_cricket_club from "../../assets/companies/crescent_cricket_club.webp";
import RameezRajaJr from "../../assets/blog/blog3/rameezraja2.jpg";
import CalvinSavage from "../../assets/blog/blog3/Calvin-Savage.jpg";
import DamianEbanks from "../../assets/blog/blog3/Damian-Ebanks.jpg";
import NicholasThomas from "../../assets/blog/blog3/Nicholas-Thomas.jpeg";

const AmericanTwenty20Blog = () => {
  return (
    <section>
      <div className="news_banner">
        <img
          style={{ objectPosition: "center bottom", objectFit: "cover" }}
          src={Banner}
          alt=""
        />
      </div>
      <div className="news_container">
        <h1 className="news_heading">American Twenty20 Championship</h1>
        <span className="news_sub_heading">13 April 2022</span>
        <div className="news_text">
          <p>
            The American Twenty20 Championship, also known as the USACA Twenty20
            championship is an American Twenty20 cricket tournament dedicated to
            developing American cricket players for international competition
            and increasing interest in the sport in the United States. The
            United States of America Cricket Association is the national cricket
            organization supporting the competition. Beginning in 2021, the
            American Trophy was a weeknight leather/white-ball cricket
            competition conducted by CASO (Chicago All Sports Organizers) and
            held in New Jersey, and the Barrington Crescent Cricket Club won.
            Following the incredible success of the first year, a new team has
            partnered up with the AmericanT20 brand, and 2022 promises to be a
            five-team battle. These five teams include Barrington Crescent
            Cricket Club, Chicago Players, Midwest Stars, Skokie Raiders, and
            Hoffman Estate Rangers.
          </p>
          <br />
        </div>

        <div className="news_text_img_right">
          <div className="news_text_half">
            <h4>Barrington Crescent Cricket Club:</h4>
            <br />
            <p>
              Barrington Crescent Cricket Club stakeholders are Naveed Ahmed and
              Dr.Naqi Haider. The last year's champion has inducted four
              international players; Rameez Raja Jr, Nicholas Thomas, Damian
              Ebanks, and Calvin Savage. These players are focused and possess
              good batting and bowling techniques.
            </p>
          </div>
          <div className="news_img_half">
            <img src={crescent_cricket_club} alt="" />
          </div>
          <br />
        </div>
        <div className="news_text_img_right">
          <div className="news_img_half">
            <img src={RameezRajaJr} alt="" />
          </div>
          <div className="news_text_half">
            <h4>Rameez Raja Jr:</h4>
            <br />
            <p>
              Rameez Raja Jr is a 34-year-old Pakistani player. His batting
              style is right hand, and his preferred bowling style is a right
              arm off break, while his playing role is the top-order batter.
              According to the statistics, an overview of his career averages
              from 2011 to 2012 includes two matches and 24 runs, with the
              highest score being 23 runs and a batting average of 12 runs.
            </p>
          </div>
        </div>
        <div className="news_text_img_right">
          <div className="news_text_half">
            <h4>Nicholas Thomas:</h4>
            <br />
            <p>
              Nicholas Thomas also called Nick, is a 34-year-old all-rounder, a
              right-handed batsman whose bowling style is right arm fast. Nick's
              batting statistics incorporate 5 T20 leagues from different clubs.
              <br />
              From Arizona Cricket Association, he has played 14 T20 matches,
              made 282 runs with an average of 23.50, and maintained a strike
              rate of 165.88. From LA Champions Cricket League 21-22, he has
              played 7 matches, made 259 runs with an average of 43.17, and
              maintained a strike rate of 190.44. From Colorado Cricket League,
              he has played 4 matches, made 46 runs with an average of 11.50,
              and maintains a strike rate of 117.95.
              <br />
              From Sands Cricket Association, he has played 53 matches made 1212
              runs with an average of 28.19, with a strike rate of 162.25. From
              USEC LABOR DAY T-10, he has played 10 matches, made 138 runs with
              an average of 19.71, and maintained a strike rate of 197.14.
              According to his bowling statistics from Arizona Cricket
              Association, he bowled 18 overs in 14 matches, gave 122 runs, and
              took 6 wickets. From LA Champions Cricket League 21-22 he bowled
              26 overs in 7 matches, gave 179 runs, and managed to get 15
              wickets. From Colorado Cricket League he bowled 9.2 overs in 4
              matches, gave 83 runs, and managed to get 3 wickets. From Sands
              Cricket Association he bowled 138.5 overs in 53 matches, gave 877
              runs, and managed to get 52 wickets. From USEC LABOR DAY T-10 he
              bowled 9 overs in 10 matches, gave 140 runs, and managed to get 1
              wicket.
            </p>
          </div>
          <div className="news_img_half">
            <img src={NicholasThomas} alt="" />
          </div>
        </div>
        <div className="news_text_img_right">
          <div className="news_img_half">
            <img src={CalvinSavage} alt="" />
          </div>
          <div className="news_text_half">
            <h4>Calvin Peter Savage:</h4>
            <br />
            <p>
              Calvin Peter Savage is a 29-year-old, South African player. His
              batting style is right hand and his bowling style is right-arm
              fast, other than that he is also a wicketkeeper. As maintained by
              his career statistics, from 2010 to 2012 he played 13 matches,
              made a batting average of 21.16 runs and bowling average of 36.30,
              and encountered 10 wickets.
            </p>
          </div>
        </div>
        <div className="news_text_img_right">
          <div className="news_text_half">
            <h4>Damian Ebanks:</h4>
            <br />
            <p>
              Damian Ebanks is a 34-year-old player of the West Indies. His
              batting style is left hand and he is an occasional wicketkeeper.
              <br />
              Cricket is one of the most popular, watched, and sought-after
              sports in the world, and it has become a passion for many. Our
              goal has been to instill the same passion in the Chicagoland
              neighborhoods, and we have been quite successful in doing so.
            </p>
          </div>
          <div className="news_img_half">
            <img src={DamianEbanks} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmericanTwenty20Blog;
